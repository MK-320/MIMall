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
          <h1>注册小米账户</h1>
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
    goRegister(username, password, email) {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (username===''||null) {
        this.$message.error('用户名不能为空');
      } else if (password===''||null) {
        this.$message.error('密码不能为空');
      } else if (email===''||null) {
        this.$message.error('邮箱不能为空');
      } else if (!reg.test(email)) {
        this.$message.error('邮箱格式不正确');
      } else {
        console.log(username, password, email);
        this.axios.post('/user/register', {
          username, password, email
        }).then(() => {
          this.$message({
            type: 'success',
            message: '注册成功',
            center: true
          });
          this.$router.push('/login');
        }).catch(() => {
          this.$message.error('注册失败')
        })
      }
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
  background-color: #212529;
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
  background-image: url(https://images.unsplash.com/photo-1532247502237-3ebb6e1770b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baa1ed644817198825fabda7f330e85f&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb);
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
