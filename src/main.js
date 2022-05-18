import Vue from 'vue'
import router from "@/router/router";
import axios from "axios";
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //引入默认的elementui样式，有时候可以不用引入
//vue-axios的作用是将axios挂载到Vue的原型上，以便在Vue组件中使用，不然需要每个页面都import axios·
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";
//插件放上面，组件放下面是
import App from './App.vue'
import store from './store' //index.js可以省略，因为默认读取index.js
//一定要加 ./ 表示当前的目录，不加的话，他会默认认为是一个插件
// import env from "./env"
//将axios挂载到Vue实例上去
/*
*axios不是Vue的插件， 不需要挂载，import了就能直接用。
VueAxios才是Vue的插件，他依赖axios， 挂载这个插件是需要传递axios作为他的参数。
Vue.use(VueAxios, axios)， 第一个参数是插件名， 第二个参数是这个插件的配置项， 对于VueAxios来说， axios是它唯一依赖的参数。  */
Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie);
Vue.config.productionTip = false
Vue.prototype.$message=Message;

//axios最好封装一下，这里就没有封装，直接写在main.js中有点臃肿
//baseUrl根据跨越的方式进行调整，如果前后端域名不一样时就需要写全 http://www.baidu.com 否则使用vue.config.js代理的方式的话，就只需要写接口地址
//    /api/a/b  => /a/b  /api被pathRewrite了
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 5000;
//根据不同的环境变量获取不同的接口地址np
// axios.defaults.baseURL = env.baseURl
//接口错误拦截 这里没有做请求拦截
axios.interceptors.response.use(function (response) {
    //用axios的拦截器对所有的返回值（可以得到一个返回值对象）进行拦截，通过之后在进行处理
    let res = response.data//其实是有两个data这里就是解构了一层
    let path =location.hash//由于使用的是hash路由
    if (res.status == 0) {
        //这个项目中的后端规定返回0 代表成功
        if(res.msg=='注册成功'){
            return res.msg
        }
        return res.data//这个data才是真正的接口返回的数据
    } else if (res.status == 10) {

        if(path!='#/index'){
            // eslint-disable-next-line no-debugger
            window.location.href = "/#/login";//另外这里用的是hash，所以要加 #
        }
        //这个项目中规定，状态码返回10 代表未登录
        //由于这里在main中，this的指向不是vue实例，而是window，所以使用路由跳转没有用，只有在app.vue或者组件中this的指向才是vue
        return Promise.reject(res);
    } else {
        //否则就是错误信息
        Message.error(res.msg);

        return Promise.reject(res)
    }
//第一个function是拦截业务正常的请求，第二个是http 状态码错误拦截，比如订单已经支付，但是再次点击支付，此时业务的处理已经通过，但是服务器会返回一个错误的状态码 比如 500 ，将他拦截下来，将错误信息输出，该订单已支付，请不要重复发起支付
}, (error)=>{
    let res = error.response
    Message.error(res.data.message)
    return Promise.reject(error)
})

//mock开关，这里这么写是因为 ，如果直接在main.js中import 导入，那么由于是预编译的，所以每次发请求都会被mockjs拦截，但是我们不想要这么做，只有需要时才开启mock
const mock =false ;
if(mock){
    //require是运行时加载，import 是预编译时加载，所以，require 不运行到当前行是不会执行的
    require("./mock/api");
}

new Vue({
    store,
    router,//封装完路由就在man.js中引入了router，并加载路由
    render: h => h(App),
}).$mount('#app')
