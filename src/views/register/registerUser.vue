<template>
  <div class="registerUser">  <!-- 添加特定类名以隔离样式 -->
    <!-- Wrapper -->
    <div class="container">

      <!-- Register Area -->
      <div class="register-box">

        <!-- Register Gallery Area -->
        <div class="gallery-box">

          <!-- Gallery Title Area -->
          <div class="gallery-title-box">
            <h1>Hello,New Friends</h1>
            <h2>永远相信美好的事情会发生~</h2>
          </div>
          <!-- Gallery Title Area End -->


          <!-- Gallery Brand Logo Area -->
          <div class="gallery-brand-logo">
            BRAND LOGO.
          </div>
          <!-- Gallery Brand Logo Area End -->

        </div>
        <!-- Register Gallery Area End -->


        <!-- Register User Info Area -->
        <div class="register-user-info-box">

          <!-- User Info Title Area -->
          <div class="user-info-title-box">
            <div>
              <svg width="40px" height="40px" viewBox="0 0 193 193" class="mi-layout__logo"><title>编组</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <polygon id="path-1"
                           points="1.78097075e-14 0.000125324675 192.540685 0.000125324675 192.540685 192.540058 1.78097075e-14 192.540058"></polygon>
                </defs>
                <g id="\u9875\u9762-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="\u7F16\u7EC4">
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Clip-2"></g>
                    <path
                        d="M172.473071,20.1164903 C154.306633,2.02148701 128.188344,-1.78097075e-14 96.2706558,-1.78097075e-14 C64.312237,-1.78097075e-14 38.155724,2.0452987 19.9974318,20.1872987 C1.84352597,38.3261656 1.78097075e-14,64.4406948 1.78097075e-14,96.3640227 C1.78097075e-14,128.286724 1.84352597,154.415039 20.0049513,172.556412 C38.1638701,190.704052 64.3141169,192.540058 96.2706558,192.540058 C128.225942,192.540058 154.376815,190.704052 172.53636,172.556412 C190.694653,154.409399 192.540685,128.286724 192.540685,96.3640227 C192.540685,64.3999643 190.672721,38.2553571 172.473071,20.1164903"
                        id="Fill-1" fill="#FF6900" mask="url(#mask-2)"></path>
                    <path
                        d="M89.1841721,131.948836 C89.1841721,132.594885 88.640263,133.130648 87.9779221,133.130648 L71.5585097,133.130648 C70.8848896,133.130648 70.338474,132.594885 70.338474,131.948836 L70.338474,89.0100961 C70.338474,88.3584078 70.8848896,87.8251513 71.5585097,87.8251513 L87.9779221,87.8251513 C88.640263,87.8251513 89.1841721,88.3584078 89.1841721,89.0100961 L89.1841721,131.948836 Z"
                        id="Fill-3" fill="#FFFFFF" mask="url(#mask-2)"></path>
                    <path
                        d="M121.332896,131.948836 C121.332896,132.594885 120.786481,133.130648 120.121633,133.130648 L104.492393,133.130648 C103.821906,133.130648 103.275491,132.594885 103.275491,131.948836 L103.275491,131.788421 L103.275491,94.9022357 C103.259198,88.4342292 102.889491,81.7863818 99.5502146,78.445226 C96.6790263,75.5652649 91.3251562,74.9054305 85.7557276,74.7669468 L57.4242049,74.7669468 C56.7555977,74.7669468 56.2154484,75.3045896 56.2154484,75.9512649 L56.2154484,128.074424 L56.2154484,131.948836 C56.2154484,132.594885 55.6640198,133.130648 54.9954127,133.130648 L39.3555198,133.130648 C38.6875393,133.130648 38.1498964,132.594885 38.1498964,131.948836 L38.1498964,60.5996188 C38.1498964,59.9447974 38.6875393,59.4121675 39.3555198,59.4121675 L84.4786692,59.4121675 C96.2717211,59.4121675 108.599909,59.9498104 114.680036,66.0380831 C120.786481,72.1533006 121.332896,84.4595571 121.332896,96.2657682 L121.332896,131.948836 Z"
                        id="Fill-5" fill="#FFFFFF" mask="url(#mask-2)"></path>
                    <path
                        d="M153.53056,131.948836 C153.53056,132.594885 152.978505,133.130648 152.316164,133.130648 L136.678778,133.130648 C136.010797,133.130648 135.467515,132.594885 135.467515,131.948836 L135.467515,60.5996188 C135.467515,59.9447974 136.010797,59.4121675 136.678778,59.4121675 L152.316164,59.4121675 C152.978505,59.4121675 153.53056,59.9447974 153.53056,60.5996188 L153.53056,131.948836 Z"
                        id="Fill-7" fill="#FFFFFF" mask="url(#mask-2)"></path>
                  </g>
                </g>
              </svg>
              <h1 class="clearfix">注册小米账户</h1>
            </div>

          </div>
          <!-- User Info Title Area End -->


          <!-- User Info Form Area -->
          <div class="user-info-box">

            <form class="user-info-form" action="#">

              <div class="input-wrapper">
                <label for="name-ipt">NAME</label>
                <input type="text" id="name-ipt" v-model="username" class="name-ipt" @blur="validateUsername" @input="clearUsernameError">
                <div v-if="usernameError" class="error-message">{{ usernameError }}</div>
              </div>

              <div class="input-wrapper">
                <label for="email-ipt">E-MAIL</label>
                <input type="email" id="email-ipt" v-model="email" class="email-ipt" @blur="validateEmail" @input="clearEmailError">
                <div v-if="emailError" class="error-message">{{ emailError }}</div>
              </div>

              <div class="input-wrapper">
                <label for="password-ipt">PASSWORD</label>
                <input type="password" id="password-ipt" v-model="password" class="password-ipt" @blur="validatePassword" @input="clearPasswordError">
                <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
              </div>

              <!--            <div>-->
              <!--              <label for="password-chk-ipt">PASSWORD CHECK</label>-->
              <!--              <input type="password" id="password-chk-ipt" class="password-chk-ipt">-->
              <!--            </div>-->


              <button class="custom-btn btn-3" @click="goRegister(username,password,email)"><span>GET STARED</span>
              </button>
            </form>

          </div>
          <!-- User Info Form Area End -->

        </div>
        <!-- Register User Info Area End -->

      </div>
      <!-- Register Area End -->

    </div>
  </div>
</template>
<script>
export default {
  name: "registerUser",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    }
  }, methods: {
    // 验证用户名
    validateUsername() {
      if (!this.username) {
        this.usernameError = '用户名不能为空';
      } else if (this.username.length < 5) {
        this.usernameError = '用户名长度至少需要5位';
      } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(this.username)) {
        this.usernameError = '用户名只能包含字母、数字、下划线和中文';
      } else {
        this.usernameError = '';
      }
    },
    // 清除用户名错误提示
    clearUsernameError() {
      if (this.usernameError) {
        this.usernameError = '';
      }
    },
    // 验证邮箱
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.email) {
        this.emailError = '邮箱不能为空';
      } else if (!emailRegex.test(this.email)) {
        this.emailError = '邮箱格式不正确';
      } else {
        this.emailError = '';
      }
    },
    // 清除邮箱错误提示
    clearEmailError() {
      if (this.emailError) {
        this.emailError = '';
      }
    },
    // 验证密码
    validatePassword() {
      if (!this.password) {
        this.passwordError = '密码不能为空';
      } else if (this.password.length < 6) {
        this.passwordError = '密码长度至少需要6位';
      } else {
        this.passwordError = '';
      }
    },
    // 清除密码错误提示
    clearPasswordError() {
      if (this.passwordError) {
        this.passwordError = '';
      }
    },
    goRegister() {
      // 触发所有验证
      this.validateUsername();
      this.validateEmail();
      this.validatePassword();

      // 检查是否有错误
      if (this.usernameError || this.emailError || this.passwordError) {
        this.$message.error('请修正表单中的错误后再提交');
        return;
      }

      // 提交注册请求
      this.axios.post('/user/register', {
        username: this.username,
        password: this.password,
        email: this.email
      }).then((res) => {
        // 由于拦截器处理，这里接收到的是 res.data（后端返回的data部分）
        // 所以直接访问返回的数据
        this.$message({
          message: '注册成功，请去登录',
          type: 'success',
          center: true  // 文字居中
        });
        this.username = '';
        this.password = '';
        this.email = '';
        // 清空错误信息
        this.usernameError = '';
        this.emailError = '';
        this.passwordError = '';
        // 添加延迟跳转，让用户能看到成功消息
        setTimeout(() => {
          // 注册成功后跳转到登录页面
          this.$router.push('/login');
        }, 1500); // 延迟1.5秒跳转
      }).catch((error) => {
        // 错误处理中可以访问完整错误信息
        this.$message.error(error.msg || error.response?.data?.msg || '注册失败，请稍后重试');
      });
    }
  }
}
</script>
<style lang="scss" scoped>

/* 全局消息弹窗样式，确保消息内容居中 */
.el-message {
  .el-message__content {
    text-align: center !important;
    padding-left: 0 !important;
    display: block;
    width: 100% !important;
  }
}

.registerUser {  /* 注册页面特定的容器 */
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;  /* 确保容器相对定位 */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Style Reset - 只在注册页面内部生效 */
.registerUser * {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial";
}

.registerUser li {
  list-style: none;
}

.registerUser input,
.registerUser button {
  outline: none;
  border: 0;
  padding: 0;
}

.registerUser h1,
.registerUser h2,
.registerUser h3,
.registerUser h4 {
  font-weight: normal;
}

li {
  list-style: none;
}

input,
button {
  outline: none;
  border: 0;
  padding: 0;
}

h1,
h2,
h3,
h4 {
  font-weight: normal;
}

/* Style Reset End */


/* Wrapper */
.registerUser .container {
  width: 900px;
  margin: 0 auto;  /* 确保容器居中 */
}

/* Wrapper End */


/* Register Style */
.registerUser .register-box {
  width: 100%;
  height: 600px;
  background-color: #fff;
  box-shadow: 0 24px 12px -12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
}

.registerUser .register-box > div {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}

/* Register Style End */


/* Register Gallery Style */
.registerUser .gallery-box {
  padding: 50px 50px;
  background-size: cover;
  background-position: center;
  background-image: url(https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg);
}

.registerUser .gallery-title-box {
  width: 400px;
  float: left;
}

.registerUser .gallery-title-box > * {
  color: #e9e9e9;
}

.registerUser .gallery-title-box h1 {
  font-size: 48px;
}

.registerUser .gallery-title-box p {
  margin-top: 10px;
  font-size: 16px;
  line-height: 26px;
}

.registerUser .gallery-brand-logo {
  position: absolute;
  left: 50px;
  bottom: 60px;
  font-size: 18px;
  color: #fff;
  padding: 10px;
  border: solid 1px #e9e9e9;
}

/* Register Gallery Style End */


/* Resgister User Info Style */
.registerUser .register-user-info-box {
  width: 100%;
  float: left;
  padding: 60px 50px;
  color: #343a40;
}
.registerUser .user-info-title-box .mi-layout__logo{
  float: left;
  margin-right: 10px;
}
.registerUser .user-info-title-box h1 {
  font-size: 30px;
  font-weight: bold;
  color: #343a40;
}

.registerUser .user-info-title-box p {
  font-size: 14px;
  margin-top: 10px;
  color: #adb5bd;
}

.registerUser .user-info-title-box p a {
  color: #fcc419;
}

.registerUser .user-info-form {
  width: 100%;
  margin-top: 30px;
}

.registerUser .user-info-form > div {
  width: 100%;
}

.registerUser .user-info-form label {
  width: 100%;
  font-size: 12px;
  color: #adb5bd;
  transition: .2s;
}

.registerUser .user-info-form input {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #e9e9e9;
  font-size: 16px;
  margin-bottom: 20px;
  transition: .2s;
}


.registerUser .user-info-form label.active {
  color: #ff922b;
}

.registerUser .user-info-form input.active {
  border-bottom: solid 1px #ff922b;
}

.registerUser .user-info-form button {
  width: 100%;
  margin-top: 5px;
  color: #fff;
  height: 50px;
  cursor: pointer;
  transition: .2s;
  //background-color: #ff922b;
  //border-bottom: solid 4px #ab733f;
}

.registerUser .user-info-form button:hover,
.registerUser .user-info-form button:focus {
  //background-color: #ab733f;
}

.registerUser .btn-3 {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  width: 350px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  border: none;
  position: relative;

}

.registerUser .btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.registerUser .btn-3:before,
.registerUser .btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.8s ease;
}

.registerUser .btn-3:before {
  height: 0%;
  width: 2px;
}

.registerUser .btn-3:after {
  width: 0%;
  height: 2px;
}

.registerUser .btn-3:hover {
  background: transparent;
  box-shadow: none;
}

.registerUser .btn-3:hover:before {
  height: 100%;
}

.registerUser .btn-3:hover:after {
  width: 100%;
}

.registerUser .btn-3 span:hover {
  color: rgba(2, 126, 251, 1);
}

.registerUser .btn-3 span:before,
.registerUser .btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}

.registerUser .btn-3 span:before {
  width: 2px;
  height: 0%;
}

.registerUser .btn-3 span:after {
  width: 0%;
  height: 2px;
}

.registerUser .btn-3 span:hover:before {
  height: 100%;
}

.registerUser .btn-3 span:hover:after {
  width: 100%;
}

/* Input wrapper and error message styles */
.registerUser .input-wrapper {
  width: 100%;
  margin-bottom: 25px; /* 增加间距以容纳错误信息 */
  position: relative;
}

.registerUser .error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  min-height: 16px; /* 确保即使没有错误信息也有固定高度 */
  padding-left: 2px;
  text-align: left;
}

.registerUser .user-info-form input {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #e9e9e9;
  font-size: 16px;
  margin-bottom: 5px; /* 减少底部边距，因为错误信息会占用空间 */
  transition: .2s;
  padding: 0 2px;
}

/* Highlight input field when there's an error */
.registerUser .user-info-form input.error {
  border-bottom: solid 1px #e74c3c !important;
}

.registerUser .user-info-form input.success {
  border-bottom: solid 1px #2ecc71 !important;
}

/* Resgister User Info Style End */
</style>
