<template>
  <el-row>
    <div class="tabHeader">
      <el-col :span="5">
        <el-col :span="9" :sm="9" :md="5" :xl="5" :xs="24">
          <div class="label_icon">
            <div class="el-icon-menu" v-on:click="changeTab"></div>
          </div>
        </el-col>
        <el-col :span="15" :sm="15" :md="17" :xl="19" :xs="0">
          <div class="label_title">后台管理系统</div>
        </el-col>
      </el-col>
      <el-col :span="19">
        <el-col :span="18" :xl="19" :md="17" :sm="16" :xs="18">
          <div class="label_bank">1</div>
        </el-col>
        <el-col :span="4" :xl="3" :md="5" :sm="5" :xs="0">
          <div class="tabHeader_tool">
            <div class="label_icon el-icon-rank" v-on:click="zoom"></div>
            <!-- <img class="label_img" src="../assets/images/person.jpg" alt="作者" /> -->
          </div>
        </el-col>
        <el-col :span="2" :xl="2" :md="2" :sm="3" :xs="6">
          <div class="tabHeader_list">
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
        </el-col>
      </el-col>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "tabHeader",
  data() {
    return {
      isCollapse: false,
      isZoom: false,
      docElm: document.documentElement //W3C
    };
  },
  methods: {
    changeTab() {
      this.isCollapse = !this.isCollapse;
      this.$emit("collapse", this.isCollapse);
    },
    handleCommand(event) {
      event == "a"
        ? this.$alert("我是高级前端兼CEO唐总")
        : this.$router.replace("/login");
    },
    zoom() {
      !this.isZoom ? this.openZoom() : this.closeZoom();
      this.isZoom = !this.isZoom;
    },
    openZoom() {
      this.docElm.requestFullscreen();
    },
    closeZoom() {
      document.exitFullscreen();
    }
  }
};
</script>
<style lang="scss">
.tabHeader {
  width: 100%;
  height: 70px;
  line-height: 70px;
  color: #fff;
  background: #242f42;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    margin-right: 2%;
    justify-content: flex-end;
    .label_img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .tabHeader_list {
    display: flex;
    justify-content: center;
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .label_icon {
    width: 65px;
    height: 70px;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .label_bank {
    color: #242f42;
  }
}
</style>
