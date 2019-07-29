<template>
  <div class="login">
    <div
      class="login_image"
      :style="{backgroundImage: 'url(' + bannerImg + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"
    ></div>
    <div class="container">
      <div class="container_header">tzc管理</div>
      <el-form :model="formData">
        <el-form-item prop="account" :rules="[{ required: true, message: '账号不能为空'}]">
          <div class="container_input">
            <i class="el-icon-user-solid"></i>
            <el-input type="account" v-model="formData.account" autocomplete="off"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="password" :rules="[{ required: true, message: '密码不能为空'}]">
          <div class="container_input">
            <i class="el-icon-s-goods"></i>
            <el-input type="password" v-model="formData.password" autocomplete="off"></el-input>
          </div>
        </el-form-item>
      </el-form>
      <el-button class="container_button" type="primary" @click="confirm" :loading="isLoading">登录</el-button>
    </div>
  </div>
</template>



<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Login extends Vue {
  isLoading: boolean = false;
  formData = {
    account: '',
    password: ''
  };
  banner: string[] = [
    '/static/img/banner_one.jpg',
    '/static/img/banner_two.jpg'
  ];
  bannerImg: string = '';
  // 初始化--随机背景图片
  created() {
    if (this.$store.state.isLogin) {
      let personInfo = this.$store.state.personInfo;
      this.formData.account = personInfo.account;
      this.formData.password = personInfo.password;
      this.$store.commit('SETISLOGIN', false);
    }
    let random = Math.round(Math.random());
    this.bannerImg = this.banner[random];
  }
  // 登录
  confirm() {
    if (this.formData.account == '' || this.formData.password == '') {
      this.$message.warning('请输入账号和密码');
      return;
    }
    this.isLoading = true;
    this.$api
      .getLogin(this.formData.account, this.$md5(this.formData.password))
      .subscribe(
        res => {
          if (res.data.Success) {
            this.$store.commit('SETPERSONINFO', this.formData);
            this.$store.commit('SETISLOGIN', true);
            this.$message.success('登录成功');
            this.$router.push({ path: '/home' });
          } else {
            this.$message.error(res.data.Message);
            this.register();
          }
        },
        err => {
          this.isLoading = false;
          this.$message.error('服务器出现差错');
          this.register();
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  //登记
  register() {
    this.$prompt('请自报家门，方可另开渠道', '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPlaceholder: '含字数2位以上'
    }).then(res => {
      this.$store.commit('SETPERSONINFO', this.formData);
      this.$store.commit('SETISLOGIN', true);
      res['value'] != '' && res['value'].length >= 3
        ? this.$router.push({ path: '/home' })
        : this.$message('不满足要求');
    });
  }
}
</script>


<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
}
.login_image {
  width: 100%;
  height: 100%;
}
.container {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 400px;
  margin-left: -200px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  .container_header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .container_input {
    margin-top: 20px;
    display: flex;
    align-items: center;
    i {
      width: 46px;
      height: 38px;
      display: flex !important;
      justify-content: center;
      align-items: center;
      border: 1px solid #ededed;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    input {
      border-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .el-form-item__content {
    width: 80%;
    margin: 0 auto;
    .el-form-item__error {
      left: 46px;
    }
  }
  .container_button {
    width: 80%;
    margin: 20px auto;
  }
}
@media screen and (max-width: 450px) {
  .container {
    width: 90%;
    margin-left: -45%;
  }
}
</style>

