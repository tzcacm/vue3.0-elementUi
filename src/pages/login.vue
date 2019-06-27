<template>
  <div class="login">
    <div
      class="login_image"
      :style="{backgroundImage: 'url(' + bannerImg + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}"
    ></div>
    <div class="container">
      <div class="container_header">tzc管理</div>
      <form action>
        <div class="container_input">
          <i class="el-icon-user-solid"></i>
          <el-input class="container_input_text" v-model="account" placeholder="账号"></el-input>
        </div>
        <div class="container_input">
          <i class="el-icon-s-goods"></i>
          <el-input
            class="container_input_text"
            type="password"
            v-model="password"
            placeholder="密码"
          ></el-input>
        </div>
        <el-button class="container_button" type="primary" v-on:click="confirm">登录</el-button>
      </form>
    </div>
  </div>
</template>



<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Login extends Vue {
  banner: string[] = [
    '/static/img/banner_one.jpg',
    '/static/img/banner_two.jpg'
  ];
  bannerImg: string = '';
  account: string | number = 'admin';
  password: string | number = 'admin';
  // 初始化--随机背景图片
  created() {
    let random = Math.round(Math.random());
    this.bannerImg = this.banner[random];
  }
  // 登录
  confirm() {
    if (this.account == '' || this.password == '') {
      this.$message.warning('请输入账号和密码');
      return;
    }
    let personInfo = { account: this.account, password: this.password };
    localStorage.setItem('personInfo', JSON.stringify(personInfo));
    this.$router.push({ path: '/home' });
  }
}
</script>


<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.login_image {
  min-width: 100vh;
  min-height: 100vh;
}
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  form {
    width: 80%;
    margin: 0 auto;
    padding: 10px 0 30px;
  }
  .container_header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    color: #ffffff;
  }
  .container_input {
    margin-top: 20px;
    display: flex;
    align-items: center;
    input {
      border-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .container_button {
    width: 100%;
    margin-top: 20px;
  }
  i {
    width: 46px;
    height: 38px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}
</style>

