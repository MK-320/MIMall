<template>
  <div class="ali-pay">
    <order-header>
      <template #tip>
        <span>正在跳转中请稍后~~</span>
      </template>
    </order-header>>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from '@/components/Loading/Loading'
import OrderHeader from "@/components/OrderHeader";
export default{
  name:'aliPay',
  components:{
    OrderHeader,
    Loading
  },
  data(){
    return {
      orderId:this.$route.query.orderId,
      content:'',
      loading:true
    }
  },
  mounted(){
    this.paySubmit();
  },
  methods:{
    async paySubmit(){
      const res = await this.$api.pay.pay({
        orderId:this.orderId,
        orderName:'小米商城订单',
        amount:0.01,
        payType:1
      })
      this.content = res.content;
      setTimeout(() => {
        document.forms[0].submit();
      },100)
    }
  }
}
</script>
