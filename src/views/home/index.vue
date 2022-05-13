<template>
  <div>
    <nav-header/>
    <router-view/>
    <nav-footer/>
  </div>

</template>

<script>
import NavHeader from "@/components/NavHeader/index";
import NavFooter from "@/components/NavFooter/index";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {NavFooter, NavHeader}
}
</script>

<style scoped>

</style>
