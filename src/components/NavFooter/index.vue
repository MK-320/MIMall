<template>
  <div class="footer">

    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;" target="_blank">Drgeek的主页</a><span>|</span>
      <a href="https://home.miui.com/" target="_blank">MIUI</a><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
      <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
      <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a>
    </div>
    <div class="copyright">Copyright ©2022 <span class="domain">Drgeek</span> All Rights Reserved.</div>
    <div class="copyright">互联网ICP备案号：<a href="http://beian.miit.gov.cn/" style="color: #999999;">豫ICP备2022014464号-1</a>

    </div>
    <div class="copyright">
      <div style="width:300px;margin:0 auto;">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32050602011671" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;" target="_blank">
          <img  src="/imgs/备案图标.png" style="width: 20px;height: 20px;float: left;" /><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备 32050602011671号</p>
        </a>
      </div>
    </div>



  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
.footer {
  //height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;

  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;

    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }

  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }

    span {
      margin: 0 10px;
    }

    margin-bottom: 13px;
  }

  .copyright {
    margin-top: 10px;
    .domain {
      color: #FF6600;
    }
  }
}
</style>
