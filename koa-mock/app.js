const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

// ========== CORS 中间件 ==========
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  
  if (ctx.method === 'OPTIONS') {
    ctx.status = 200
    return
  }
  
  await next()
})

// 请求体解析
app.use(bodyParser())

// 日志中间件
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`[${new Date().toISOString()}] ${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 工具函数
const util = {
  checkLogin(ctx) {
    const userId = ctx.cookies.get('mallUserId')
    if (!userId) {
      ctx.body = {
        status: 10,
        msg: '未登录，请先登录'
      }
      return false
    }
    return true
  },
  
  getCookie(ctx, key) {
    return ctx.cookies.get(key)
  }
}

// 导入业务路由
const mallRoutes = require('./mall')(util)

// 健康检查路由
router.get('/health', (ctx) => {
  ctx.body = { 
    status: 'OK', 
    time: new Date().toISOString(),
    service: 'MIMALL Koa Mock Server'
  }
})

// 默认路由
router.get('/', (ctx) => {
  ctx.body = {
    message: 'MIMALL Koa Mock Server is running!',
    endpoints: [
      'GET  /health - 健康检查',
      'POST /api/user/login - 用户登录',
      'GET  /api/user - 获取用户信息',
      'GET  /api/products - 获取商品列表',
      'GET  /api/products/:id - 获取商品详情',
      'GET  /api/carts - 获取购物车',
      'POST /api/carts - 添加购物车',
      'GET  /api/orders - 获取订单列表'
    ]
  }
})

// 注册路由
app.use(router.routes())
app.use(router.allowedMethods())
app.use(mallRoutes.routes())
app.use(mallRoutes.allowedMethods())

// 404 处理
app.use(async (ctx) => {
  if (ctx.status === 404) {
    ctx.status = 404
    ctx.body = {
      status: 404,
      message: `API not found: ${ctx.method} ${ctx.url}`,
      timestamp: new Date().toISOString()
    }
  }
})

// 错误处理
app.on('error', (err, ctx) => {
  console.error('Server error:', err)
  ctx.status = err.status || 500
  ctx.body = {
    status: err.status || 500,
    msg: err.message || '服务器内部错误',
    timestamp: new Date().toISOString()
  }
})

// 启动服务器
const PORT = 3000
app.listen(PORT, () => {
  console.log(`
  🚀 Koa Mock Server 启动成功！
  
  🔗 本地地址: http://localhost:${PORT}
  📍 前端地址: http://localhost:8080
  
  📋 可用接口:
  ====================================
  🔹 健康检查: GET  http://localhost:${PORT}/health
  🔹 服务首页: GET  http://localhost:${PORT}/
  
  🔹 用户登录: POST http://localhost:${PORT}/api/user/login
  🔹 用户信息: GET  http://localhost:${PORT}/api/user
  
  🔹 商品列表: GET  http://localhost:${PORT}/api/products
  🔹 商品详情: GET  http://localhost:${PORT}/api/products/33
  
  🔹 购物车列表: GET  http://localhost:${PORT}/api/carts
  🔹 添加购物车: POST http://localhost:${PORT}/api/carts
  
  🔹 订单列表: GET  http://localhost:${PORT}/api/orders
  ====================================
  
  ⚠️  请确保：
  1. 前端设置了代理到 http://localhost:${PORT}
  2. 前端请求时设置了 withCredentials: true
  3. 开发环境下使用正确的环境变量
  `)
})