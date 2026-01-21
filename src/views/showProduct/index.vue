<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg" ref="bgImg">
        <h2>{{ product.name }}</h2>
        <h3>{{ product.subtitle }}</h3>
        <p>
          <a href="" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥<em>{{ product.price }}</em></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>

      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>

      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div class="video-bg" @click="showSlide = 'slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ProductParam from '@/components/ProductParam/index'
import 'swiper/css/swiper.css' // 添加这行
export default {
  name: 'showProduct',
  components: {
    Swiper,
    SwiperSlide,
    ProductParam
  },
  data() {
    return {
      showSlide: '',//控制动画效果
      product: {},//商品信息
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
    }
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      console.log("路由传过来的商品id是：", id);
      this.axios.get(`/products/${id}`).then((res) => {
        this.product = res;
        console.log("商品信息：", this.product);
        // 动态设置背景图片到伪元素
        this.$nextTick(() => {
          if (this.$refs.bgImg && this.product.mainImage) {
            // 添加一个CSS变量来设置背景图片
            this.$refs.bgImg.style.setProperty('--bg-image', `url(${this.product.mainImage})`);
          }
        });
      })
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/productDetailed/${id}`);
    },
    closeVideo() {
      this.showSlide = 'slideUp';
      let vi = document.getElementsByTagName('video')[0]
      vi.pause();
      setTimeout(() => {
        this.showSlide = '';
      }, 600)
    },

  }
}
</script>
<style lang="scss">
@import '@/assets/scss/mixin.scss';

.product {
  .content {
    .item-bg {
      //background:url('./../../../public/imgs/product/product-bg-1.png') no-repeat center;
      height: 718px;
      text-align: center;
      position: relative;
      z-index: 1;

      >h2,
      >h3,
      >p {
        position: relative;
        z-index: 2; // 确保文字在背景图之上
        color: #333333; // 恢复原始文字颜色
      }

      >.price {
        position: relative;
        z-index: 2; // 确保价格在背景图之上
        margin-bottom: 10px; // 减小价格和背景图之间的间距
      }

      // 使用元素本身作为背景容器，但限制背景图只在下方显示
      &::before {
        content: '';
        position: absolute;
        bottom: 0; // 将背景图固定在底部
        left: 50%;
        transform: translateX(-50%);
        width: 90%; // 增加背景图的宽度
        height: 400px; // 增加背景图的高度，让图片稍大一些
        background-image: var(--bg-image); // 使用CSS变量
        background-size: contain; // 保持原始比例
        background-repeat: no-repeat;
        background-position: center center; // 图片居中显示
        z-index: 0; // 确保背景图在文字之下
      }

      // 确保所有内容在背景图之上
      >* {
        position: relative;
        z-index: 2;
      }

      h2 {
        font-size: 80px;
        padding-top: 55px;
      }

      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }

      p {
        margin-top: 21px;
        margin-bottom: 40px;

        a {
          font-size: 16px;
          color: #333333;
        }

        span {
          margin: 0 15px;
        }
      }

      .price {
        font-size: 30px;
        color: #333333;

        em {
          font-style: normal;
          font-size: 38px;
        }
      }
    }

    .item-bg-2 {
      background: url('./../../../public/imgs/product/product-bg-2.png') no-repeat center;
      height: 480px;
      background-size: 1226px 397px;
    }

    .item-bg-3 {
      background: url('./../../../public/imgs/product/product-bg-3.png') no-repeat center;
      height: 638px;
      background-size: cover;
    }

    .item-swiper {
      margin: 36px auto 52px;
      height: 400px; // 关键：添加固定高度！

      .desc {
        font-size: 18px;
        color: #333333;
        text-align: center;
      }

      img {
        width: 100%;
      }
    }

    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #FFFFFF;
      text-align: center;

      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }

      p {
        font-size: 24px;
        margin-bottom: 58px;
      }

      .video-bg {
        background: url('./../../../public/imgs/product/gallery-1.png') no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }

      .video-box {
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: .4;
          z-index: 10;
        }

        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }

          to {
            top: 50%;
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }

          to {
            top: -50%;
            opacity: 0;
          }
        }

        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          opacity: 1;

          &.slideDown {
            animation: slideDown .6s linear;
            top: 50%;
          }

          &.slideUp {
            animation: slideUp .6s linear;
          }

          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, './../../../public/imgs/icon-close.png');
            cursor: pointer;
            z-index: 11;
          }

          video {
            width: 100%;
            height: 100%;
            object-fit: cover; //覆盖掉video原始的样式
            outline: none; //覆盖掉video原始的样式
          }
        }
      }
    }
  }

  button {
    margin-left: 10px;
  }
}
</style>
