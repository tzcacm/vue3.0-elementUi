<template>
  <div class="tabHeader">
    <div class="tabHeader_label">
      <div class="el-icon-menu label_icon" v-on:click="changeTab"></div>
      <div class="label_title">后台管理系统</div>
    </div>
    <div class="tabHeader_tool">
      <div class="label_icon el-icon-rank" v-on:click="zoom"></div>
      <div class="label_icon el-icon-message-solid" v-on:click="goMessage"></div>
      <img class="label_img" src="../assets/images/person.jpg" alt="作者">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">关于作者</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class TabHeader extends Vue {
  isCollapse: boolean = false;
  isZoom: boolean = false;
  docElm = document.documentElement; //W3C
  changeTab() {
    this.isCollapse = !this.isCollapse;
    this.$emit('collapse', this.isCollapse);
  }
  handleCommand(event) {
    event == 'a'
      ? this.$alert('我是高级前端兼CEO唐总')
      : this.$router.replace('login');
  }
  zoom() {
    !this.isZoom ? this.openZoom() : this.closeZoom();
    this.isZoom = !this.isZoom;
  }
  openZoom() {
    this.docElm.requestFullscreen();
  }
  closeZoom() {
    document.exitFullscreen();
  }
  goMessage() {
    this.$router.push('');
  }
}
</script>
<style lang="scss">
.tabHeader {
  width: 96%;
  height: 70px;
  color: #fff;
  background: #242f42;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  .tabHeader_label {
    display: flex;
    align-items: center;
    .label_title {
      font-size: 18px;
    }
  }
  .tabHeader_tool {
    display: flex;
    align-items: center;
    padding-right: 50px;
    .label_img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .label_icon {
    font-size: 30px;
    cursor: pointer;
    margin-right: 20px;
  }
}
</style>

