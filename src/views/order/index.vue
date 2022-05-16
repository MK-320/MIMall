<template>
  <div>
    <order-header :title="title">
        <template #tip>
          <span>{{tip}}</span>
        </template>
    </order-header>
    <router-view/>
    <service-bar/>
    <nav-footer/>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader/index";
import NavFooter from "@/components/NavFooter/index";
import ServiceBar from "@/components/ServiceBar/ServiceBar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "order",
  components: {ServiceBar, NavFooter, OrderHeader},
  data(){
    return {
      title:'',
      tip:''
    }
  },mounted() {
    let path =this.$route.path;
    if(path==='/order/confirm'){
      this.title='确认订单';
      this.tip='请认真填写收获地址！';
    }else if(path==='/order/list'){
      this.title='订单列表';
      this.tip='请谨防钓鱼链接和诈骗电话！';
    }else if (path==='/order/pay'){
      this.title='支付订单';
      this.tip='请谨防钓鱼链接和诈骗电话！';

    }else{
      this.title='订单支付';
      this.tip='请谨防钓鱼链接和诈骗电话！';
    }
  }
}
</script>

<style scoped>

</style>
