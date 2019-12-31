<template>
  <div class="login">
    <div class="container">
      <div class="container_header">欢迎登录 - 系统管理</div>
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

<script>
import Vue from "vue";
export default {
  name: "login",
  data() {
    return {
      isLoading: false
    };
  },
  // 初始化
  created() {
    if (this.$store.state.isLogin) this.$store.commit("setIsLogin", false);
  },
  computed: {
    formData() {
      return this.$store.state.LoginModule.personInfo;
    }
  },
  methods: {
    // 登录
    confirm() {
      if (this.formData.account == "" || this.formData.password == "") {
        this.$message.warning("请输入账号和密码");
        return;
      }
      this.isLoading = true;
      this.$api["LoginService"]
        .loginApi({
          account: this.formData.account,
          password: this.$md5(this.formData.password)
        })
        .then(res => {
          this.isLoading = false;
          if (res.data.Success) {
            this.$store.commit("setPersonInfo", this.formData);
            this.$store.commit("setIsLogin", true);
            localStorage.setItem('isLogin', 'true');
            this.$message.success("登录成功");
            this.$router.push('/');
          } else {
            this.$message.error(res.data.Message);
          }
        })
        .catch(err => {
          this.isLoading = false;
          localStorage.setItem('isLogin', 'true');
          this.$router.push('/');
          this.$message.error("服务器出现差错");
        });
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100vw;
  height: 70vh;
  padding-top: 30vh;
  background: #ccc;
}
.container {
  width: 500px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  .container_header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    color: #000;
    background: #fff;
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

