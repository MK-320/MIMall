<template>
<div>
  <order-header/>
  cart
  <nav-footer/>
</div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cart",
  components: {NavFooter, OrderHeader}
}
</script>

<style scoped>

</style>
