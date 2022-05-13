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
    this.axios.get('/user/login').then(res => {
        this.res = res;
    });
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import './assets/scss/config.scss';
</style>
