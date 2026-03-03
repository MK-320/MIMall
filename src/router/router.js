import Vue from "vue";
import Router from "vue-router";
import VueCookie from "vue-cookie";
import { Message } from "element-ui";

Vue.use(Router);
Vue.use(VueCookie);

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/index/index"),
      },
      {
        path: "/product/:id",
        name: "product",
        component: () => import("@/views/showProduct/index.vue"),
      },
      {
        path: "/productDetailed/:id",
        name: "productDetailed",
        component: () => import("@/views/productDetailed/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/loginUser.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/registerUser.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/cart/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/order/index.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "list",
        name: "orderList",
        component: () => import("@/views/orderList/index.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "confirm",
        name: "orderConfirm",
        component: () => import("@/views/orderConfirm/index.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "pay",
        name: "orderPay",
        component: () => import("@/views/orderPay/index.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "alipay",
        name: "alipay",
        component: () => import("@/views/alipay/index.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
 const isLoggedIn = !!Vue.cookie.get('token')

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      Message.error("请先进行登录！");
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
