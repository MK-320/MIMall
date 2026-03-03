<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      res:{}
    }
  },
  components: {},
  mounted() {
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }

  },methods:{
    getUser(){
      this.$api.user.getUserInfo().then((res={}) => {
        this.$store.dispatch('saveUserName',res.username);
      });
    },
    getCartCount(){
      this.$api.cart.getCartSum().then((res=0) => {
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
