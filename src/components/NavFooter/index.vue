<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="" target="_blank">慕颖泉的主页</a><span>|</span>
      <a href="https://home.miui.com/" target="_blank">MIUI</a><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
      <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
      <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">慕颖泉</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
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
    .domain {
      color: #FF6600;
    }
  }
}
</style>
