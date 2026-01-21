# MIMall（Vue2）高仿小米商城 - 前端项目（含 Koa Mock API）

MIMall 是一个使用 **Vue 2.x** 开发的高仿小米商城前端项目，覆盖电商站点的核心链路：**商品浏览 → 加入购物车 → 下单 → 订单列表/详情 →（模拟）支付**，并内置一个可直接运行的 **Koa Mock 服务**（`koa-mock/`），用于本地开发联调。

> **重要说明**：本仓库主要是前端项目。由于原始后端服务不可用，项目内置了 `koa-mock/` 作为本地 Mock API 服务，用于模拟接口与登录态，**不等同于真实后端**。如果你有可用的后端服务，可以修改 `vue.config.js` 中的代理配置或 `src/main.js` 中的 `axios.defaults.baseURL` 来接入真实后端。

---

## 功能概览

- **用户**
  - 注册 / 登录 / 退出登录
  - 登录态校验（未登录会跳转到登录页）
- **商品**
  - 首页商品推荐/展示
  - 商品详情
- **购物车**
  - 加入购物车、数量增减、删除
  - 全选/取消全选
  - 购物车数量徽标（顶部导航）
- **收货地址**
  - 地址列表 / 新增 / 编辑 / 删除
- **订单**
  - 创建订单
  - 订单确认页、订单列表、订单详情
  - 支付（Mock 返回“暂不可用/模拟”）

---

## 技术栈

- **前端框架**: Vue 2.6
- **路由**: Vue Router 3（Hash 路由）
- **状态管理**: Vuex 3
- **UI**: Element UI 2
- **HTTP**: Axios（`vue-axios` 注入到 `this.axios`）
- **样式**: Sass/SCSS
- **轮播**: Swiper 5 / `vue-awesome-swiper`
- **本地 Mock API**: Koa + `@koa/router` + `koa-bodyparser`

---

## 目录结构（核心）

```text
MIMall/
├── koa-mock/              # 本地 Koa Mock API 服务（端口 3000）
│                          # 注意：由于原始后端服务不可用，此目录提供 Mock 接口用于开发
│   ├── app.js             # Koa 启动入口
│   ├── mall.js            # 业务接口（/api 前缀）
│   └── data.json          # 简易"用户数据"持久化（首次运行会自动生成）
├── public/                # 静态资源（图片、index.html 等）
├── src/
│   ├── main.js            # 入口：Axios 拦截器/全局插件注册等
│   ├── router/router.js   # 路由定义
│   ├── store/             # Vuex（用户名、购物车数量）
│   ├── components/        # 公共组件（Header/Footer/Modal/Loading 等）
│   ├── views/             # 页面（首页/详情/购物车/订单/登录注册等）
│   └── storage/           # sessionStorage 封装
├── vue.config.js          # 开发代理配置（/api -> http://localhost:3000）
└── package.json
```

---

## 环境要求

- **Node.js**: 建议 14+ / 16+（Vue CLI 5 兼容性更好）
- **包管理器**: npm（项目包含 `package-lock.json`，推荐使用 npm）
- **端口**
  - 前端：`8080`（见 `vue.config.js`）
  - Mock API：`3000`（见 `koa-mock/app.js`）

---

## 一键跑起来（开发环境）

### 1) 启动 Mock API（Koa，端口 3000）

> **说明**：由于原始后端服务不可用，项目使用 `koa-mock/` 提供本地 Mock API。如果你有可用的后端服务，可以跳过此步骤，直接配置后端地址。

在项目根目录执行：

```bash
cd koa-mock
npm install
npm run dev
```

看到类似输出表示成功：

- `http://localhost:3000/health`
- `http://localhost:3000/api/user/login`

### 2) 启动前端（Vue，端口 8080）

另开一个终端，在项目根目录执行：

```bash
npm install
npm run serve
```

浏览器打开 `http://localhost:8080`。

---

## 默认账号（Mock 环境）

`koa-mock` 首次启动会自动生成 `koa-mock/data.json`，内置一个默认用户：

- **用户名**: `admin`
- **密码**: `123456`

你也可以在注册页自行注册，新用户会写入 `koa-mock/data.json`（仅用于本地开发演示）。

---

## 请求代理与登录态说明（非常重要）

### 代理规则

前端的 Axios 默认基地址配置为：

- `axios.defaults.baseURL = "/api"`（见 `src/main.js`）

开发时由 `vue.config.js` 将请求代理到 Mock 服务：

- `http://localhost:8080/api/**` → `http://localhost:3000/api/**`

另外还支持将 `/mall/**` 重写到 `/api/**`（方便兼容某些旧接口前缀）。

### 返回结构 & 统一拦截

项目里约定后端返回结构大致为：

- `status === 0`：业务成功，Axios 拦截器会 **直接返回 `data` 字段**
- `status === 10`：未登录，若当前不在 `#/index` 会跳转 `/#/login`
- 其他：弹出错误提示并 reject

以上逻辑在 `src/main.js` 的 `axios.interceptors.response` 中统一处理。

### Cookie 登录态

Mock 登录成功后会下发 Cookie：

- `mallUserId`
- `mallUserName`

后续需要登录态的接口，会通过读取 Cookie 来校验是否登录（见 `koa-mock/app.js` / `koa-mock/mall.js`）。

---

## 可用脚本

在项目根目录：

```bash
# 开发启动（development）
npm run serve

# 测试模式启动（test）
npm run test

# 构建生产包（production）
npm run build

# eslint
npm run lint
```

在 `koa-mock/`：

```bash
# 启动
npm run start

# 开发热重载
npm run dev
```

---

## 页面路由（部分）

路由定义见 `src/router/router.js`，常见页面：

- `/#/index`：首页
- `/#/product/:id`：商品展示（列表/推荐入口）
- `/#/productDetailed/:id`：商品详情
- `/#/cart`：购物车
- `/#/order/confirm`：订单确认
- `/#/order/list`：订单列表
- `/#/order/pay`：订单支付
- `/#/login`：登录
- `/#/register`：注册

---

## Mock API 一览（核心）

> 接口前缀：`/api`

- **用户**
  - `POST /api/user/register`
  - `POST /api/user/login`
  - `GET  /api/user`
  - `POST /api/user/logout`
- **商品**
  - `GET /api/products?pageSize=xx`
  - `GET /api/products/:id`
- **购物车**
  - `GET    /api/carts`
  - `POST   /api/carts`
  - `PUT    /api/carts/:id`
  - `DELETE /api/carts/:id`
  - `PUT    /api/carts/selectAll`
  - `PUT    /api/carts/unSelectAll`
  - `GET    /api/carts/products/sum`
- **收货地址**
  - `GET    /api/shippings`
  - `POST   /api/shippings`
  - `PUT    /api/shippings/:id`
  - `DELETE /api/shippings/:id`
- **订单**
  - `POST /api/orders`
  - `GET  /api/orders`
  - `GET  /api/orders/:id`
  - `POST /api/pay`（Mock：返回“暂不可用/模拟”）

---

## 常见问题（FAQ）

### 1) 访问接口 404 / 前端没走到 Mock

- 确认 `koa-mock` 是否启动：访问 `http://localhost:3000/health`
- 确认前端是否走代理：`vue.config.js` 中 `/api` 代理目标是 `http://localhost:3000`
- 确认前端请求是否以 `/api` 开头（项目默认就是）

### 2) 登录后仍提示未登录（status=10）

- 确认登录接口返回是否成功（`status === 0`）
- 确认浏览器里是否有 `mallUserId` / `mallUserName` Cookie
- 若你改过端口/域名，注意 Cookie 与同源/代理关系可能会影响登录态

### 3) 修改了 `vue.config.js` 但不生效

`vue.config.js` 属于构建配置文件，修改后需要**重启前端开发服务器**。

---

## 部署建议（生产环境）

本项目是典型 SPA，可将 `npm run build` 产物（默认 `dist/`）部署到任意静态资源服务器（Nginx/OSS/CDN 等）。

- **若你接入真实后端**：
  - 建议将 `axios.defaults.baseURL` 改为你的后端域名（或通过环境变量注入）
  - 或在 Nginx 层做 `/api` 反向代理

---

## License

本仓库包含 `LICENSE` 文件，使用前请先阅读并遵守相应许可协议。
