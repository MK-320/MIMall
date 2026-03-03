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
  async mounted() {
    if(this.$cookie.get('token')){
      await this.getUser();
      await this.getCartCount();
    }
  },
  methods:{
    async getUser(){
      const res = await this.$api.user.getUserInfo()
      this.$store.dispatch('saveUserName', res.username)
    },
    async getCartCount(){
      const res = await this.$api.cart.getCartSum()
      this.$store.dispatch('saveCartCount', res || 0)
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
