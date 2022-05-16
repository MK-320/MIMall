/*
 * @Author: Drgeek
 * @Date: 2022-05-09 15:13:06
 * @LastEditors: Drgeek
 * @LastEditTime: 2022-05-09 15:13:20
 * @FilePath: \MIMall\src\router\router.js
 * @Description:
 *
 * Copyright (c) 2022 by drgeek/noCompany, All Rights Reserved.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);//Vue加载插件的固定写法


const originalPush = Router.prototype.push

Router.prototype.push = function push (location) {

    return originalPush.call(this, location).catch(err => err)

}



//导出一个Router的对象（里面是一些路由的配置）
export default new Router({
    //routes 配置的是路由的一系列的配置
    routes: [
        {
            path: '/',
            name:'home',
            redirect:'/index',//页面默认加载的子路由，配合router-view 使用
            component:()=>import('@/views/home/index.vue'),
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:()=>import('@/views/index/index')
                },{
                    path:'/product/:id',//动态传入参数
                    name:'product',
                    component:()=>import('@/views/showProduct/index.vue')
                },{
                    path:'/productDetailed/:id',//动态传入参数
                    name:'productDetailed',
                     component:()=>import('@/views/productDetailed/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/loginUser.vue')
        },
        {
            path: '/register',
            name: 'register',
             component: () => import('@/views/register/registerUser.vue')
        },
        {
        //由于购物车页面和主页面不是共用头部导航的，所以需要将cart給剥离出来，不在home下面
            path:'/cart',
            name:'cart',
            component:()=>import('@/views/cart/index.vue')
        },{
            path:'/order',
            name:'order',
            component:() => import('@/views/order/index.vue'),
            children:[
                {
                path:'list',
                name:'orderList',
                 component:()=>import('@/views/orderList/index.vue')
            },
                {
                    path:'confirm',
                    name:'orderConfirm',
                     component:()=>import('@/views/orderConfirm/index.vue')
                },
                {
                    path:'pay',
                    name:'orderPay',
                     component:()=>import('@/views/orderPay/index.vue')
                }, {
                    path: 'alipay',
                    name: 'alipay',
                    component: () => import('@/views/alipay/index.vue')
                }
            ]
        }
    ]
})
