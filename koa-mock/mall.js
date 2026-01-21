const Router = require('@koa/router')
const fs = require('fs');
const path = require('path');

// 数据文件路径
const dataFilePath = path.join(__dirname, 'data.json');

// 读取用户数据
function readUsersData() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    } else {
      // 如果文件不存在，创建默认数据
      const defaultData = {
        users: [
          {
            id: 10001,
            username: 'admin',
            password: '123456', // 实际项目中应存储加密密码
            email: 'admin@mimall.com'
          }
        ]
      };
      saveUsersData(defaultData);
      return defaultData;
    }
  } catch (error) {
    console.error('读取用户数据失败:', error);
    // 返回默认数据
    return {
      users: [
        {
          id: 10001,
          username: 'admin',
          password: '123456',
          email: 'admin@mimall.com'
        }
      ]
    };
  }
}

// 保存用户数据
function saveUsersData(data) {
  try {
    // 确保目录存在
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('保存用户数据失败:', error);
  }
}

module.exports = function(util) {
  // ============ 用户数据存储 ============
  // 模拟用户数据库，使用文件存储实现持久化
  const router = new Router({ prefix: '/api' })
  
  // ============ 用户注册 ============
  router.post('/user/register', (ctx) => {
    // 每次注册前重新读取用户数据，确保数据是最新的
    let { users } = readUsersData();
    const { username, password, email } = ctx.request.body;
    
    // 检查用户名是否已存在
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      ctx.body = {
        status: 1,
        msg: '用户名已存在'
      };
      return;
    }
    
    // 检查邮箱是否已存在
    const existingEmail = users.find(user => user.email === email);
    if (existingEmail) {
      ctx.body = {
        status: 1,
        msg: '邮箱已被注册'
      };
      return;
    }
    
    // 创建新用户
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 10002,
      username,
      password, // 实际项目中应加密存储
      email,
      createTime: new Date().toISOString()
    };
    
    users.push(newUser);
    
    // 保存数据到文件
    saveUsersData({ users });
    
    ctx.body = {
      status: 0,
      msg: '注册成功',
      data: {
        id: newUser.id,
        username: newUser.username
      }
    };
  });

  // ============ 用户登录 ============
router.post('/user/login', (ctx) => {
    // 每次登录前重新读取用户数据，确保数据是最新的
    const { users } = readUsersData();
    const { username, password } = ctx.request.body;
    
    // 从用户列表中查找匹配的用户
    const user = users.find(u => u.username === username && u.password === password);
    
    // 验证用户名和密码
    if (user) {
      ctx.cookies.set("mallUserId", user.id, {
        maxAge: 8 * 60 * 60 * 1000,
      });
      ctx.cookies.set("mallUserName", user.username, {
        maxAge: 8 * 60 * 60 * 1000,
      });
      ctx.body = {
        status: 0,
        data: {
          id: user.id,
          username: user.username
        }
      };
    } else {
      // 登录失败
      ctx.body = {
        status: 1, // 非0状态码通常表示失败
        msg: '用户名或密码错误'
      };
    }
  });

  // ============ 获取用户信息 ============
  router.get('/user', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    ctx.body = {
      status: 0,
      data: {
        id: util.getCookie(ctx, 'mallUserId'),
        username: util.getCookie(ctx, 'mallUserName')
      }
    }
  })

  // ============ 获取购物车数量 ============
  router.get('/carts/products/sum', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    let total = 0
    cartProductVoList.map(item => {
      if (item.productSelected) {
        total += (item.quantity || 1)
      }
    })
    ctx.body = {
      status: 0,
      data: total
    }
  })

  // ============ 退出登录 ============
  router.post('/user/logout', (ctx) => {
    ctx.cookies.set("mallUserId", '', {
      maxAge: 0,
    })
    ctx.body = {
      status: 0,
      data: ''
    }
  })

  // ============ 商品列表数据 ============
  const list = [
    {
      id: 33,
      name: 'Xiaomi 13',
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90',
      subtitle: 'Xiaomi 13 年度旗舰，你值得拥有',
      price: 3999,
    }, {
      id: 1002,
      name: 'Xiaomi 13 Pro',
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/11e28a0a7c6a2ca07f0dc2044d3858c2.png?thumb=1&w=160&h=110&f=webp&q=90',
      subtitle: 'Xiaomi13 Pro 爱你，爱她',
      price: 4399,
    }, {
      id: 47,
      name: 'Xiaomi Mix Fold 2',
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/581f3a690e6803add02e4c9fde98cb78.png?thumb=1&w=160&h=110&f=webp&q=90',
      subtitle: 'Fold2 完美融合，折叠屏',
      price: 8999,
    }, {
      id: 1004,
      name: 'Xiaomi Civi 2',
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ef3713521fb9d7f114aa8bb152e220d.png?thumb=1&w=160&h=110&f=webp&q=90',
      subtitle: 'Xiaomi Civi 2 绽放无限光彩',
      price: 2299,
    }, {
      id: 1005,
      name: 'Xiaomi 11',
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png?thumb=1&w=160&h=110&f=webp&q=90',
      subtitle: 'Xiaomi 11 青春活力版',
      price: 1399,
    },
    {
      id: 1006,
      name: 'Xiaomi 13',
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c06f92c3216c90a566916e719935018.png?thumb=1&w=160&h=110&f=webp&q=90',
      subtitle: 'Xiaomi 13 限量定制色',
      price: 4999,
    },
    {
      id: 45,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Turbo',
      subtitle: '狂暴引擎 超强性能释放',
      price: 1999
    },
    {
      id: 48,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6cec580260ceb20ae6a885c2c65c611.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi K60',
      subtitle: '骁龙8+｜2K 高光直屏｜5500mAh+67W闪充',
      price: 2599
    }, {
      id: 1009,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f37dd30477e7ba040c7fb69c31ad8bf3.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi K60 Pro',
      subtitle: '【第二代骁龙8】狂暴引擎',
      price: 3599
    },
    {
      id: 1010,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212251443_29b17941a7365948446bd193011d9241.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Pro 极速版',
      subtitle: '高通骁龙778G，OLED柔性直屏+一亿像素',
      price: 1699
    },
    {
      id: 1011,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292351_92aba2c69123166a74ba2e2b525b1ae2.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Xiaomi 13 限量定制色',
      subtitle: '全新第二代骁龙8｜徕卡75mm长焦镜头',
      price: 4999
    },
    {
      id: 1012,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa047170a22d9f0852254aa36df5f5f0.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Xiaomi 13 Pro',
      subtitle: '全新第二代骁龙8｜徕卡专业光学镜头',
      price: 4999
    },
    {
      id: 1013,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c6497b70f2e881460cb232082a0da6.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Xiaomi 13',
      subtitle: '全新第二代骁龙8｜徕卡专业光学镜头',
      price: 1999
    },
    {
      id: 1014,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262033_ef39fca0e37395d07682124770fd3ad9.png?thumb=1&w=200&h=200&f=webp&q=90',
      name: '三星 OLED 护眼屏｜骁龙 5G 芯',
      subtitle: 'Redmi Note 12 5G',
      price: 1199
    },
    {
      id: 1015,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Turbo',
      subtitle: '狂暴引擎 超强性能释放',
      price: 1999
    },
    {
      id: 1016,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Turbo',
      subtitle: '狂暴引擎 超强性能释放',
      price: 1999
    },
    {
      id: 1017,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Turbo',
      subtitle: '狂暴引擎 超强性能释放',
      price: 1999
    },
    {
      id: 1018,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Turbo',
      subtitle: '狂暴引擎 超强性能释放',
      price: 1999
    },
    {
      id: 1019,
      mainImage: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90',
      name: 'Redmi Note 12 Turbo',
      subtitle: '狂暴引擎 超强性能释放',
      price: 1999
    },
  ]

  // ============ 获取商品列表 ============
  router.get('/products', (ctx) => {
    const pageSize = ctx.request.query.pageSize
    let goodsList = []
    if (pageSize) {
      goodsList = list.slice(0, pageSize)
    }
    ctx.body = {
      status: 0,
      data: {
        list: goodsList
      }
    }
  })

  // ============ 查询商品详情 ============
  router.get('/products/:id', (ctx) => {
    const id = ctx.params.id
    const item = list.find(item => item.id == id)
    ctx.body = {
      status: 0,
      data: item || {}
    }
  })

  // ============ 购物车数据 ============
  let cartProductVoList = list.slice(6, 10).map(item => {
    return {
      productId: item.id,
      productMainImage: item.mainImage,
      productSelected: false,
      productName: item.name,
      productSubtitle: item.subtitle,
      quantity: 0,
      productPrice: item.price,
      productTotalPrice: item.price
    }
  })

  // ============ 添加购物车 ============
  router.post('/carts', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    let total = 0
    const { productId } = ctx.request.body
    const isExist = cartProductVoList.filter(item => item.productId == productId)[0]
    const item = list.filter(item => item.id == productId)[0]
    cartProductVoList.map(item => {
      if (item.productSelected) {
        total += item.quantity
      }
    })
    console.log('1--', total)
    if (isExist) {
      cartProductVoList.map(item => {
        if (item.productId == productId) {
          item.productSelected = true
          item.quantity += 1
          total += 1
          console.log('2--', total)
        }
      })
    } else if (productId && item) {
      cartProductVoList.push({
        productId: item.id,
        productMainImage: item.mainImage,
        productSelected: true,
        productName: item.name,
        productSubtitle: item.subtitle,
        quantity: 1,
        productPrice: item.price,
        productTotalPrice: item.price
      })
      total += 1
      console.log('3--', total)
    }
    console.log('4--', total)
    ctx.body = {
      status: 0,
      data: {
        cartTotalQuantity: total
      }
    }
  })

  // ============ 获取购物车 ============
  router.get('/carts', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    ctx.body = {
      status: 0,
      data: {
        cartProductVoList,
        selectedAll: !cartProductVoList.some(item => !item.productSelected),
        cartTotalPrice: cartProductVoList.filter(item => item.productSelected).reduce((prev, next) => prev + next.productPrice * next.quantity, 0)
      }
    }
  })

  // ============ 全选购物车 ============
  router.put('/carts/selectAll', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    ctx.body = {
      status: 0,
      data: {
        cartProductVoList: cartProductVoList.map(item => {
          item.productSelected = true
          return item
        }),
        selectedAll: true,
        cartTotalPrice: cartProductVoList.filter(item => item.productSelected).reduce((prev, next) => prev + next.productPrice * next.quantity, 0)
      }
    }
  })

  // ============ 取消全选 ============
  router.put('/carts/unSelectAll', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    ctx.body = {
      status: 0,
      data: {
        cartProductVoList: cartProductVoList.map(item => {
          item.productSelected = false
          return item
        }),
        selectedAll: false,
        cartTotalPrice: cartProductVoList.filter(item => item.productSelected).reduce((prev, next) => prev + next.productPrice * next.quantity, 0)
      }
    }
  })

  // ============ 更新购物车商品 ============
  router.put('/carts/:id', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    const { quantity, selected } = ctx.request.body
    ctx.body = {
      status: 0,
      data: {
        cartProductVoList: cartProductVoList.map(item => {
          if (item.productId == id) {
            item.quantity = quantity
            item.productTotalPrice = item.quantity * item.productPrice
            item.productSelected = selected
          }
          return item
        }),
        selectedAll: !cartProductVoList.some(item => !item.productSelected),
        cartTotalPrice: cartProductVoList.filter(item => item.productSelected).reduce((prev, next) => prev + next.productTotalPrice, 0)
      }
    }
  })

  // ============ 删除购物车商品 ============
  router.delete('/carts/:id', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    cartProductVoList = cartProductVoList.filter(item => item.productId != id),
      ctx.body = {
        status: 0,
        data: {
          cartProductVoList: cartProductVoList,
          selectedAll: !cartProductVoList.some(item => !item.productSelected),
          cartTotalPrice: cartProductVoList.filter(item => item.productSelected).reduce((prev, next) => prev + next.productTotalPrice, 0)
        }
      }
  })

  // ============ 收货地址数据 ============
  let shippings = [
    {
      id: 1,
      receiverName: 'Jack',
      receiverMobile: '17600001111',
      receiverProvince: '上海市',
      receiverCity: '上海市',
      receiverDistrict: '浦东新区',
      receiverAddress: '软件园'
    },
    {
      id: 2,
      receiverName: 'Tom',
      receiverMobile: '18600001111',
      receiverProvince: '北京市',
      receiverCity: '北京市',
      receiverDistrict: '海淀区',
      receiverAddress: '百度科技园'
    }
  ]

  // ============ 获取收货地址列表 ============
  router.get('/shippings', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    ctx.body = {
      status: 0,
      data: {
        list: shippings
      }
    }
  })

  // ============ 更新收货地址 ============
  router.put('/shippings/:id', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    const params = ctx.request.body
    const list = shippings.map(item => {
      if (item.id == id) {
        item = {
          ...item,
          ...params
        }
      }
      return item
    })
    shippings = list
    ctx.body = {
      status: 0,
      data: {
        list: list
      }
    }
  })

  // ============ 删除收货地址 ============
  router.delete('/shippings/:id', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    const index = shippings.findIndex(item => item.id == id)
    shippings.splice(index, 1)
    ctx.body = {
      status: 0,
      data: ''
    }
  })

  // ============ 添加收货地址 ============
  router.post('/shippings', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    const params = ctx.request.body
    shippings.push({
      id: new Date().getTime(),
      ...params
    })
    ctx.body = {
      status: 0,
      data: ''
    }
  })

  // ============ 创建订单 ============
  router.post('/orders', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    ctx.body = {
      status: 0,
      data: {
        orderNo: 'T1001' + new Date().getTime()
      }
    }
  })

  // ============ 获取订单详情 ============
  router.get('/orders/:id', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    ctx.body = {
      status: 0,
      data: {
        shippingVo: shippings[0] || {},
        orderItemVoList: cartProductVoList || [],
        payment: 999,
      }
    }
  })

  // ============ 支付 ============
  router.post('/pay', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    ctx.body = {
      status: 10001,
      msg: '很抱歉，支付暂时无法使用。'
    }
  })

  // ============ 获取订单列表 ============
  router.get('/orders', (ctx) => {
    if (!util.checkLogin(ctx)) {
      return
    }
    const id = ctx.params.id
    ctx.body = {
      status: 0,
      data: {
        list: [
          {
            createTime: '2022-10-01 12:38:49',
            receiverName: '杰克',
            orderNo: 'T1001100029231812372343',
            paymentTypeDesc: '微信支付',
            payment: 2999,
            orderItemVoList: cartProductVoList.map(item => {
              return {
                ...item,
                productImage: item.productMainImage,
                totalPrice: item.productTotalPrice,
              }
            }),
            status: 20,
            statusDesc: '支付成功'
          },
          {
            createTime: '2023-03-18 10:18:29',
            receiverName: 'Mark',
            orderNo: 'T10021083229233207372592',
            paymentTypeDesc: '微信支付',
            payment: 6999,
            orderItemVoList: cartProductVoList.map(item => {
              return {
                ...item,
                productImage: item.productMainImage,
                totalPrice: item.productTotalPrice,
              }
            }),
            status: 19,
            statusDesc: '未支付'
          },
        ],
        total: 2,
        hasNextPage: false,
        orderNo: 'T1001' + new Date().getTime()
      }
    }
  })
  
  return router
}