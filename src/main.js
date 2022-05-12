import Vue from 'vue'
import router from "@/router/router";
import axios from "axios";
//vue-axios的作用是将axios挂载到Vue的原型上，以便在Vue组件中使用，不然需要每个页面都import axios·
import VueAxios from "vue-axios";

//插件放上面，组件放下面是
import App from './App.vue'

//将axios挂载到Vue实例上去
Vue.use(VueAxios, axios);

Vue.config.productionTip = false
//axios最好封装一下，这里就没有封装，直接写在main.js中有点臃肿
//baseUrl根据跨越的方式进行调整，如果前后端域名不一样时就需要写全 http://www.baidu.com 否则使用vue.config.js代理的方式的话，就只需要写接口地址
//    /api/a/b  => /a/b  /api被pathRewrite了
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 5000;
//接口错误拦截 这里没有做请求拦截
axios.interceptors.response.use(function (response) {
    //用axios的拦截器对所有的返回值（可以得到一个返回值对象）进行拦截，通过之后在进行处理
    let res = response.data//其实是有两个data这里就是解构了一层
    if (res.status === 0) {
        //这个项目中的后端规定返回0 代表成功
        return res.data;//这个data才是真正的接口返回的数据
    } else if (res.status === 10) {
        //这个项目中规定，状态码返回10 代表未登录
        //由于这里在main中，this的指向不是vue实例，而是window，所以使用路由跳转没有用，只有在app.vue或者组件中this的指向才是vue
        window.location.href = "/#/login";
    } else {
        //否则就是错误信息
        alert(res.msg)
    }

})

new Vue({
    router,//封装完路由就在man.js中引入了router，并加载路由
    render: h => h(App),
}).$mount('#app')
