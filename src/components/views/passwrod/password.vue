<template>
  <div class="password">
    <el-image class="image" src="/static/img/person.jpg"></el-image>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-dynamic"
      status-icon
    >
      <el-form-item prop="oldPassword" label="原密码">
        <el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="newPassword" label="新密码">
        <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword" label="确认密码">
        <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="isLoading" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Password extends Vue {
  isLoading: boolean = false;
  ruleForm = {
    oldPassword: '',
    newPassword: '',
    checkPassword: ''
  };
  rules = {
    oldPassword: [
      {
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入原密码'));
          } else {
            callback();
          }
        },
        trigger: 'blur'
      }
    ],
    newPassword: [
      {
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入新密码'));
          } else if (value == this.ruleForm.oldPassword) {
            callback(new Error('新旧密码不能一致!'));
          } else {
            callback();
          }
        },
        trigger: 'blur'
      }
    ],
    checkPassword: [
      {
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.newPassword) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        },
        trigger: 'blur'
      }
    ]
  };
  submitForm() {
    if (
      this.ruleForm.oldPassword == '' ||
      this.ruleForm.newPassword == '' ||
      this.ruleForm.checkPassword == ''
    ) {
      this.$message('请输入完整的信息内容');
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.$message({
        message: '修改成功',
        type: 'success'
      });
      this.isLoading = false;
      this.ruleForm.oldPassword = '';
      this.ruleForm.newPassword = '';
      this.ruleForm.checkPassword = '';
      this.$router.replace('/login');
    }, 1000);
  }
}
</script>
<style lang="scss">
.password {
  .image {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto 30px;
  }
  .button {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

