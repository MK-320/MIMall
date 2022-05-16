<template>
  <div class="order-header">
     <div class="container clearfix">
       <div class="header-logo">
         <a href="/#/index"></a>
       </div>

       <div class="title">
         <h2>{{title}}  <slot name="tip"> </slot>  </h2>

       </div>

       <div class="username">
         <a href="javascript:;">当前用户：{{username}}</a>
       </div>

     </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "OrderHeader",
  props:{
    title:String
  },
  computed: {
    ...mapState(['username'])
  },
}
</script>

<style lang="scss" >
@import "@/assets/scss/config.scss";
@import "@/assets/scss/mixin.scss";
.order-header{
  padding:30px 0;
  border-bottom:2px solid #FF6600;
  .header-logo{
    float:left;
  }

  //TODO:这里的header-logo暂未复用
  .header-logo {
    display: inline-block;
    width: 55px;
    height: 55px;
    background-color: $colorA;

    a {
      display: inline-block;
      width: 110px;
      height: 55px;

      &:before {
        content: ' ';
        @include bgImg(55px,55px,'./../../../public/imgs/mi-logo.png',55px);
        transition: margin .5s;
      }

      &:after {
        content: ' ';
        @include bgImg(55px,55px,'./../../../public/imgs/mi-home.png',55px);
      }

      &:hover:before {
        transition: margin .5s;
        margin-left: -55px;
      }
    }
  }


  .title,.username{
    display:inline-block;
    height:55px;
    line-height:55px;
  }
  .title{
    float:left;
    margin-left:54px;
    h2{
      font-size:28px;
      color:#333333;
    }
    span{
      font-size:14px;
      margin-left:17px;
      color:#999999;
      font-weight:200;
    }
  }
  .username{
    float:right;
    a{
      color:#666666;
      font-size:16px;
    }
  }
}
</style>
