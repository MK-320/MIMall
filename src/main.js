import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
Vue.config.productionTip = false

new Vue({
  router,//封装完路由就在man.js中引入了router，并加载路由
  render: h => h(App),
}).$mount('#app')
