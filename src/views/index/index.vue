<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id:''">
                      <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{ sub ? sub.name : '小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>

        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id"><img v-lazy="item.img" alt=""></a>

          </swiper-slide>
          <!--             控制圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">

        <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img" alt="">
        </a>

      </div>
      <div class="banner">

        <a href="'/#/product/30'">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>

      </div>

    </div>
    <div class="product-box">

      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/:35">
              <img src="/imgs/mix-alpha.jpg" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,index) in phoneList" :key="index">

              <div class="item" v-for="(item ,j ) in arr" :key="j">
                <span :class="[j%2===0?'new-pro':'kill-pro']">{{ j % 2 === 0 ? '新品' : '秒杀' }}</span>
                <div class="item-img">
                  <img
                      v-lazy="item.mainImage"
                      alt=""
                  @click="$router.push('/product/'+item.id)">
                  >
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price"  @click="$router.push('/product/'+item.id)">{{ item.price }}元起
                  <span class="cart-icon"  @click.stop="addCarts(item.id)"></span>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar/>
    <modal
        title="提示"
        sureType="查看购物车"
        cancel-type="取消"
        btnType="3"
        modalType="middle"
        :showModal="showModal"
        @submit="goToCart"
        @cancel="showModal=false"
    >
      <template #body>
        <p>商品添加成功！</p>
      </template>
    </modal>

  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar/ServiceBar'
import Modal from '@/components/Modal/modal'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      //TODO:这里的路径使用相对路径就不行
      slideList: [{
        id: '42',
        img: '/imgs/slider/slide-1.jpg',
      }, {
        id: '45',
        img: '/imgs/slider/slide-2.jpg',
      },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg',
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg',
        }

      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
          id: 31,
          img: '/imgs/item-box-2.png',
          name: '小米8青春版',
        }, {
          id: 32,
          img: '/imgs/item-box-3.jpg',
          name: 'Redmi K20 Pro',
        }, {
          id: 33,
          img: '/imgs/item-box-4.jpg',
          name: '移动4G专区',
        }
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png',
        }, {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [],
      showModal: false,
    }
  },
  mounted() {
    this.getPhoneList()
  }, methods: {
    getPhoneList() {
      this.$http.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(res => {
        //slice方法和splice()方法的区别就是splice 方法会改变原数组，而slice方法不会
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]//TODO:这种写法就是先将原数组分割成数组，然后放入一个数组，也就是二维数组
      })
    },
    addCarts(id)  {
     //TODO:未登录是不能加购物车的
      if(this.$store.state.username===""){
        this.$message.error('请先登录！！！');
      }else{
        this.axios.post('/carts',{
          productId:id,
          selected: true
        }).then((res)=>{
          this.showModal = true;
          this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
        });
      }

    },
    goToCart(){
      this.$router.push('/cart');
    },
    test(item){
      console.log(item);
    }
  }

}

</script>

<style lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';

.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;

          a {
            color: #fff;
            font-size: 16px;
            padding-left: 30px;
            position: relative;
            display: block;

            &:after {
              position: absolute;
              top: 17.5px;
              right: 30px;
              content: ' ';
              @include bgImg(10px, 15px, './../../../public/imgs/icon-arrow.png');
            }
          }

          &:hover {
            background-color: $colorA;

            .children {
              display: block;
            }
          }

          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;

            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }

              a {
                color: $colorB;
                font-size: 14px;
              }

              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }

    .swiper-container {
      height: 451px;

      .swiper-button-prev {
        left: 274px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;

    a {
      width: 296px;
      height: 167px;

    }
  }

  .banner {
    margin-bottom: 50px;
  }

  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;

    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;

    }

    .wrapper {
      display: flex;

      .banner-left {
        margin-right: 16px;

        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;

          &:last-child {
            margin-bottom: 0;
          }

          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;

            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;

              &.new-pro {
                background-color: #7ECF68;
              }

              &.kill-pro {
                background-color: #E82626;
              }
            }

            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }

            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }

              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 6px;
              }

              .price {
                color: #F20A0A;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;

                //&:after {
                //  @include bgImg(22px, 22px, './../../../public/imgs/icon-cart-hover.png');
                //  content: ' ';
                //  margin-left: 5px;
                //  vertical-align: middle;
                //  margin-top: -5px;
                //}
                .cart-icon:after {
                  @include bgImg(22px, 22px, './../../../public/imgs/icon-cart-hover.png');
                  content: ' ';
                  margin-left: 5px;
                  vertical-align: middle;
                  margin-top: -6px;
                }
              }

            }
          }
        }
      }
    }
  }
}
</style>
