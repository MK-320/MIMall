<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>

        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login()">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span> 购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item ,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage"  :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price|currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>

          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">Redmi智能电视X55 2022</div>
                    <div class="pro-price">3999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">Redmi智能电视X65 2022</div>
                    <div class="pro-price">4599元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视6 65”  OLED</div>
                    <div class="pro-price">4899元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视 大师  77”  OLED</div>
                    <div class="pro-price">5699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米透明电视</div>
                    <div class="pro-price">49999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">小米电视 大师 65英寸OLED</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header',
  data(){
    return{
      username:'慕颖泉',
      phoneList:[]
    }
  },mounted() {
      this.getPhoneList();
  },
  //局部过滤器
  filters:{
    currency(val){
      if(!val)return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  methods:{
    getPhoneList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          // pageSize:6
        }
      }).then(res=>{
         if(res.list.length>=6){
          this.phoneList=res.list.slice(0,6)
        }
        console.log(res.list)
      })
    },
    goToCart(){
      this.$router.push('/cart')
    },
    login(){
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;

    .container {
      @include flex();
      a {
        //为什么要单独设置a的样式？  因为 a有内置样式 它的优先级高于上面div的优先级
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #FFFFFF;
        .icon-cart {
          @include bgImg(16px,12px,'../../../public/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }

    }
  }

  .nav-header {

    .container {
      position: relative;
      height: 112px;
      @include flex();
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
            @include bgImg(55px,55px,'../../../public/imgs/mi-logo.png',55px);
            transition: margin .5s;
          }

          &:after {
            content: ' ';
            @include bgImg(55px,55px,'../../../public/imgs/mi-home.png',55px);
          }

          &:hover:before {
            transition: margin .5s;
            margin-left: -55px;
          }
        }
      }

      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 18px;
          span {
            cursor: pointer;
          }

          &:hover {
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            top: 112px;
            left: 0;
            border-top: 1px solid #E5E5E5;
            box-shadow: 0px 7px 6px 0px rgba(0,0,0,.11);
            z-index: 10;
            transition:all .5s;
            .product{
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              a{
                display:inline-block;
              }
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price{
                color:$colorA;
              }
              &:before{
                content:' ';
                position:absolute;
                top:28px;
                right:0;
                border-left:1px solid $colorF;
                height:100px;
                width:1px;
              }
              &:last-child:before{
                //最后一根线清除
                display:none;
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #E0E0E0;
            width: 264px;
            height: 50px;
            padding-left: 15px;
          }
          a{
            @include bgImg(18px,18px,'../../../public/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

