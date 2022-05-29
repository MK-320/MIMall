<template>

  <!-- Wrapper -->
  <div class="container">

    <!-- Register Area -->
    <div class="register-box">

      <!-- Register Gallery Area -->
      <div class="gallery-box">

        <!-- Gallery Title Area -->
        <div class="gallery-title-box">
          <h1>Hello World</h1>
          <p>注册用户</p>
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

            <div>
              <label for="name-ipt">NAME</label>
              <input type="text" id="name-ipt" v-model="username" class="name-ipt">
            </div>

            <div>
              <label for="email-ipt">E-MAIL</label>
              <input type="email" id="email-ipt" v-model="email" class="email-ipt">
            </div>

            <div>
              <label for="password-ipt">PASSWORD</label>
              <input type="password" id="password-ipt" v-model="password" class="password-ipt">
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
</template>
<script>
export default {
  name: "registerUser",
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  }, methods: {
    goRegister() {
      // let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // if (username === '' || null) {
      //   this.$message.error('用户名不能为空');
      // } else if (password === '' || null) {
      //   this.$message.error('密码不能为空');
      // } else if (email === '' || null) {
      //   this.$message.error('邮箱不能为空');
      // } else if (!reg.test(email)) {
      //   this.$message.error('邮箱格式不正确');
      // } else {
      //   console.log(username, password, email);
      //   this.axios.post('/user/register', {
      //     username, password, email
      //   }).then(() => {
      //     this.$message({
      //       type: 'success',
      //       message: '注册成功',
      //       center: true
      //     });
      //     this.username = ''
      //     this.password = ''
      //     this.email = ''
      //    // console.log(res);
      //     this.$router.push('/login');
      //   })
      //       .catch(() => {
      //     this.$message.error('注册失败')
      //   })
      // }
      let { username,password,email } = this;
      if(!username){
        this.$message.error('用户名不能为空');
        return
      }
      if(username.length<5){
        this.$message.error('用户名长度必须大于5位');
        return;
      }
      if(!password){
        this.$message.error('密码不能为空');
        return
      }
      if(password.length<5){
        this.$message.error('密码长度必须大于5位');
        return;
      }
      if(!/[a-zA-Z0-9_]+@\w+.com/.test(email)){
        this.$message.error('邮箱格式不正确');
        return;
      }
      this.axios.post('/user/register',{
        username,
        password,
        email
      }).then(()=>{
        this.$message.info('注册成功，请去登录');
        this.username = ''
        this.password = ''
        this.email = ''
      })
      // this.$router.push('/login')

    }
  }
}
</script>
<style lang="scss">

/* Style Reset */
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial";
}

body {
  width: 100%;
  height: 100vh;
  //background-color: #212529;
  background-image: -moz-linear-gradient(135deg, rgba(0, 255, 200, 0.46), rgba(0, 153, 255, 0.62));

  background-image: -webkit-linear-gradient(135deg, rgba(0, 255, 200, 0.46), rgba(0, 153, 255, 0.62));

  background-image: linear-gradient(135deg, rgba(0, 255, 200, 0.46), rgba(0, 153, 255, 0.62));
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
.container {
  padding: 100px 0;
  width: 900px;
}

/* Wrapper End */


/* Register Style */
.register-box {
  width: 100%;
  height: 600px;
  background-color: #fff;
  box-shadow: 0 24px 12px -12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
}

.register-box > div {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}

/* Register Style End */


/* Register Gallery Style */
.gallery-box {
  padding: 50px 50px;
  background-size: cover;
  background-position: center;
  background-image: url(https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg);
}

.gallery-title-box {
  width: 100%;
  float: left;
}

.gallery-title-box > * {
  color: #e9e9e9;
}

.gallery-title-box h1 {
  font-size: 48px;
}

.gallery-title-box p {
  margin-top: 10px;
  font-size: 16px;
  line-height: 26px;
}

.gallery-brand-logo {
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
.register-user-info-box {
  width: 100%;
  float: left;
  padding: 60px 50px;
  color: #343a40;
}
.user-info-title-box .mi-layout__logo{
  float: left;
  margin-right: 10px;
}
.user-info-title-box h1 {
  font-size: 30px;
  font-weight: bold;
  color: #343a40;
}

.user-info-title-box p {
  font-size: 14px;
  margin-top: 10px;
  color: #adb5bd;
}

.user-info-title-box p a {
  color: #fcc419;
}

.user-info-form {
  width: 100%;
  margin-top: 30px;
}

.user-info-form > div {
  width: 100%;
}

.user-info-form label {
  width: 100%;
  font-size: 12px;
  color: #adb5bd;
  transition: .2s;
}

.user-info-form input {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #e9e9e9;
  font-size: 16px;
  margin-bottom: 20px;
  transition: .2s;
}


.user-info-form label.active {
  color: #ff922b;
}

.user-info-form input.active {
  border-bottom: solid 1px #ff922b;
}

.user-info-form button {
  width: 100%;
  margin-top: 5px;
  color: #fff;
  height: 50px;
  cursor: pointer;
  transition: .2s;
  //background-color: #ff922b;
  //border-bottom: solid 4px #ab733f;
}

.user-info-form button:hover,
.user-info-form button:focus {
  //background-color: #ab733f;
}

.btn-3 {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  width: 350px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  border: none;
  position: relative;

}

.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.8s ease;
}

.btn-3:before {
  height: 0%;
  width: 2px;
}

.btn-3:after {
  width: 0%;
  height: 2px;
}

.btn-3:hover {
  background: transparent;
  box-shadow: none;
}

.btn-3:hover:before {
  height: 100%;
}

.btn-3:hover:after {
  width: 100%;
}

.btn-3 span:hover {
  color: rgba(2, 126, 251, 1);
}

.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}

.btn-3 span:before {
  width: 2px;
  height: 0%;
}

.btn-3 span:after {
  width: 0%;
  height: 2px;
}

.btn-3 span:hover:before {
  height: 100%;
}

.btn-3 span:hover:after {
  width: 100%;
}

/* Resgister User Info Style End */
</style>
