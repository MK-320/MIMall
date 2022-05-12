<template>
  <div>
    <order-header/>
    <router-view/>
    <nav-footer/>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader/index";
import NavFooter from "@/components/NavFooter/index";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "order",
  components: {NavFooter, OrderHeader}
}
</script>

<style scoped>

</style>
