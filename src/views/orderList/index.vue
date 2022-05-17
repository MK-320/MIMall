<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template #tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }}
                <span>|</span>
                {{ order.receiverName }}
                <span>|</span>
                订单号：{{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>

            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money">{{ item.totalPrice + 'X' + item.quantity }}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{ order.statusDesc }}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
              </div>
            </div>
          </div>
          <el-pagination
              class="pagination"
              background
              layout="prev, pager, next"
              :pageSize="pageSize"
              @current-change="handleChange"
              :current-page="pageNum"
              :total="total">
          </el-pagination>
<!--          <div class="load-more" v-if="showNextPage">-->
<!--            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>-->
<!--          </div>-->
<!--          <div class="scroll-more"-->
<!--               v-infinite-scroll="scrollMore"-->
<!--               infinite-scroll-disabled="busy"-->
<!--               infinite-scroll-distance="410"-->
<!--          >-->
<!--            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">-->
<!--          </div>-->
          <no-data v-if="!loading && list.length===0"></no-data>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import loading from '@/components/Loading/Loading.vue';
import orderHeader from '@/components/OrderHeader/index'
import noData from '@/components/NoData/Nodata'
import {Pagination, Button} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: "orderList",
  components: {
    orderHeader,
    loading,
    noData,
    [Pagination.name]: Pagination,//动态加载 element-ui 的组件  Pagination.name 就相当于 el-pagination
    [Button.name]: Button
  },
  data() {
    return {
      list: [],
      loading: false,
      pageSize: 5,//每一页的显示的数据条数
      pageNum: 1, //当前是第几页
      total: 0,
      busy: false,//true是 默认禁用状态，false是启用状态
      showNextPage: true,//加载更多按钮是否显示
    }
  },
  directives: {infiniteScroll}, //插件的指令集
  mounted() {
    this.getOrderList();
  },
  methods: {
    //专门给加载更多按钮使用
    getOrderList() {
      //开始加载
      this.loading = true;
      this.busy= true;
      this.axios.get('/orders', {
        params: {
          pageSize: this.pageSize,//当前的
          pageNum: this.pageNum//当前的页数
        }
      }).then((res) => {
        //数组回来之后关闭加载
        this.loading = false;
        this.list = this.list.concat(res.list)
        this.total = res.total;
        this.showNextPage = res.hasNextPage;
        this.busy = false;
      }).catch(() => {
        this.loading = false;
      })
    },
  //专门给分页器使用
    getOrderListForPagination() {
      //开始加载
      this.loading = true;
      this.axios.get('/orders', {
        params: {
          pageSize: 5,//当前页的数据总数
          pageNum: this.pageNum//当前的页数
        }
      }).then((res) => {
        //数组回来之后关闭加载
        this.loading = false;
        this.list = res.list
        this.total = res.total;
      }).catch(() => {
        this.loading = false;
      })
    }
  ,goPay(orderNo) {
      this.$router.push({name: 'orderPay', query: {orderNo}});
    },
    handleChange(pageNum) {
      //传入当前的页数
      this.pageNum = pageNum;
      this.getOrderListForPagination();
    },
    loadMore() {
      //使用concat 方法拼接数组
      this.pageNum++;
      this.getOrderListForPagination();
    },
    scrollMore() {
      this.busy = true;
      setTimeout(()=>{
        this.pageNum++;
        this.getList();
      },500);
    },
    //专门给滚动使用
    getList(){
      //开始加载
      this.loading = true;
      this.axios.get('/orders', {
        params: {
          pageSize: 10,//当前的
          pageNum: this.pageNum//当前的页数
        }
      }).then((res) => {
        //数组回来之后关闭加载
        this.list = this.list.concat(res.list)
        this.loading = false;
        if(res.hasNextPage){
          this.busy  = false;
        }else{
          this.busy = true;
        }
      }).catch(() => {
        this.loading = false;
      })
    }

  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;

    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;

        &:last-child {
          margin-bottom: 0;
        }

        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;

          .item-info {
            span {
              margin: 0 9px;
            }
          }

          .money {
            font-size: 26px;
            color: $colorB;
          }
        }

        .order-content {
          padding: 0 43px;

          .good-box {
            width: 88%;

            .good-list {
              display: flex;
              align-items: center;
              height: 145px;

              .good-img {
                width: 112px;

                img {
                  width: 100%;
                }
              }

              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }

          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;

            a {
              color: $colorA;
            }
          }
        }
      }

      .pagination {
        text-align: right;
      }

      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #FF6600;
      }

      .el-button--primary {
        background-color: #FF6600;
        border-color: #FF6600;
      }

      .load-more, .scroll-more {
        text-align: center;
      }
    }
  }
}
</style>
