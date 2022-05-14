<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <!--  遮罩层-->
      <div class="mask"></div>
      <!--  具体内容-->
      <div class="modal-dialog">

        <div class="modal-header">
          <span>标题</span>
          <a href="javascript:;" class="icon-close"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <a href="javascript:;" class="btn">确定</a>
            <a href="javascript:;" class="btn btn-default">取消</a>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "modal",
  data() {
    return {
      isShow: false
    };
  }
  , props: {
    //弹窗类型 :小small，中middle，大large  ，表单 form
    modalSizeType: {
      type: String,
      default: "form"
    },
    //弹窗标题
    title: String,
    //按钮类型  1:确定按钮，2：取消按钮 3：确定取消按钮都有
    btnType: String,
    sureType: {
      type: String,
      default: "确定"
    },
    cancelType: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/modal.scss';
@import '@/assets/scss/mixin.scss';
</style>
