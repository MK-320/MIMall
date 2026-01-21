# MIMall - 高仿小米商城前端项目

## 项目概述

MIMall 是一个使用 Vue 2.x 开发的高仿小米商城前端项目。该项目采用现代化的前端技术栈，包括 Vue.js、Vuex、Vue Router、Element UI 等，实现了完整的电商网站功能，包括商品展示、购物车管理、订单处理、用户认证等功能。

### 技术栈
- **前端框架**: Vue 2.x
- **状态管理**: Vuex
- **路由管理**: Vue Router
- **UI 框架**: Element UI
- **HTTP 客户端**: Axios
- **构建工具**: Vue CLI
- **样式处理**: Sass/SCSS
- **Mock 服务**: Koa + Mock 数据

### 项目结构

```
MIMall/
├── koa-mock/              # Koa Mock 服务器
├── public/                # 静态资源
├── src/                   # 源代码
│   ├── App.vue           # 根组件
│   ├── main.js           # 应用入口
│   ├── assets/           # 静态资源
│   ├── components/       # 公共组件
│   ├── mock/             # Mock 数据
│   ├── router/           # 路由配置
│   ├── storage/          # 本地存储
│   ├── store/            # Vuex 状态管理
│   └── views/            # 页面组件
├── package.json          # 项目依赖
├── vue.config.js         # Vue CLI 配置
└── README.md
```

## 功能模块

### 1. 用户模块
- 用户登录/注册
- 用户信息管理
- 会话管理

### 2. 商品模块
- 商品列表展示
- 商品详情页面
- 商品搜索和过滤

### 3. 购物车模块
- 添加/删除商品
- 修改商品数量
- 购物车结算

### 4. 订单模块
- 创建订单
- 订单列表
- 订单详情
- 支付处理

### 5. 收货地址模块
- 地址管理
- 地址编辑/删除

## 构建和运行

### 开发环境
```bash
# 安装依赖
npm install

# 启动前端开发服务器 (端口 8080)
npm run serve

# 启动后端 Mock 服务器 (端口 3000)
cd koa-mock
npm install
node app.js
```

### 生产环境
```bash
# 构建生产版本
npm run build
```

### 其他命令
```bash
# 代码检查和修复
npm run lint

# 运行测试环境
npm run test
```

## 环境配置

项目支持多环境配置：
- **development**: 开发环境，使用本地 Koa Mock 服务器
- **test**: 测试环境
- **production**: 生产环境

在 `vue.config.js` 中配置了代理，将 `/api` 请求代理到 `http://localhost:3000`，解决开发环境下的跨域问题。

## 项目特性

1. **响应式设计**: 适配不同屏幕尺寸的设备
2. **组件化开发**: 采用组件化的开发模式，提高代码复用性
3. **状态管理**: 使用 Vuex 进行全局状态管理
4. **路由管理**: 使用 Vue Router 进行页面路由管理
5. **Mock 服务**: 包含完整的 Koa Mock 服务，模拟后端 API
6. **懒加载**: 使用 `vue-lazyload` 实现图片懒加载
7. **无限滚动**: 集成 `vue-infinite-scroll` 实现无限滚动功能

## Mock API 接口

Koa Mock 服务器提供了完整的电商 API 接口：

- **用户接口**:
  - `POST /api/user/login` - 用户登录
  - `GET /api/user` - 获取用户信息
  - `POST /api/user/logout` - 退出登录

- **商品接口**:
  - `GET /api/products` - 获取商品列表
  - `GET /api/products/:id` - 获取商品详情

- **购物车接口**:
  - `GET /api/carts` - 获取购物车
  - `POST /api/carts` - 添加购物车
  - `PUT /api/carts/:id` - 更新购物车商品
  - `DELETE /api/carts/:id` - 删除购物车商品
  - `PUT /api/carts/selectAll` - 全选购物车
  - `PUT /api/carts/unSelectAll` - 取消全选

- **订单接口**:
  - `GET /api/orders` - 获取订单列表
  - `GET /api/orders/:id` - 获取订单详情
  - `POST /api/orders` - 创建订单
  - `POST /api/pay` - 支付接口

- **收货地址接口**:
  - `GET /api/shippings` - 获取收货地址列表
  - `POST /api/shippings` - 添加收货地址
  - `PUT /api/shippings/:id` - 更新收货地址
  - `DELETE /api/shippings/:id` - 删除收货地址

## 开发约定

1. **代码规范**: 使用 ESLint 进行代码检查
2. **组件命名**: 使用 PascalCase 命名组件
3. **文件命名**: 使用 kebab-case 命名文件
4. **API 调用**: 所有 API 调用通过 Axios 进行，并在 main.js 中进行统一拦截处理
5. **状态管理**: 使用 Vuex 进行全局状态管理

## 注意事项

1. 项目使用 Vue 2.x，如需升级到 Vue 3.x 需要进行大量重构
2. Mock 数据存储在内存中，重启服务器后数据会丢失
3. 项目中使用了大量第三方库，如 Element UI、Swiper 等
4. 图片资源使用懒加载，提升页面加载性能