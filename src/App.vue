<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Storage  from "@/storage/index";
export default {
  name: 'App',
  data() {
    return {
      res:{}
    }
  },
  components: {},
  mounted() {
    // this.axios.get('/user/login').then(res => {
    //     this.res = res;
    // });
    this.getUser();
    this.getCartCount();
  },methods:{
    getUser(){
      //刷新页面之后获取用户信息
      this.axios.get('/user').then((res={}) => {
        //TODO:存储到VUEX中去
        this.$store.dispatch('saveUserName',res.username);
      });
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0) => {
        //TODO:存储到VUEX中去
        this.$store.dispatch('saveCartCount',res);
      });
    }

  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import './assets/scss/config.scss';
@import './assets/scss/modal.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';
</style>
