<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
             <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">慕颖泉主页</a><span>|</span>
        <a href="hhttps://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
        <a href="https://home.miui.com/" target="_blank">MIUI</a><span>|</span>
        <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
        <a href="https://www.mi.com/service/exchange" target="_blank">服务政策</a>
      </div>
      <p class="copyright">Copyright ©2020 慕颖泉 All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'loginUser',
  data(){
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login(){
      //由于data中的数据是挂载再当前的this，也就是当前的组件对象上的，所以可以直接通过es6的解构获取
      let { username,password } = this;
      if(!username || !password){
        this.$message.error('请输入正确的用户名和密码');
        return;
      }
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        console.log(res);
         this.$cookie.set('userId',res.id,{expires:'1M'});
         //TODO:将数据保存到vuex中去
         // this.$store.dispatch('saveUserName',res.username);
         this.saveUserName(res.username);
        // this.$router.push({
        //   name:'index',
        //   params:{
        //     from:'login'
        //   }
        // });
        //this.$router.push('/#/index');
      })
    },
    ...mapActions(['saveUserName']),//将saveUserName方法映射到vuex中去 this.saveUserName 相当于 使用了 this.$store.dispatch('saveUserName')
    register(){
      //this.$message.success('功能暂未开发');
      //return;
      // this.axios.post('/user/register',{
      //   username:'adasddsgfdsagdsfad',
      //   password:'zxcdsfdsafdsagadsavv',
      //   email:'zxcdsadgdfsgfdsav@163.com'
      // }).then(()=>{
      //   this.$message.success('注册成功');
      // })
    }
  }
}
</script>
<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/public/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
