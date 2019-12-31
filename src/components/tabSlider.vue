<template>
  <div class="tabSlider">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#242f42"
      text-color="#fff"
      :router="true"
      active-text-color="#29aff6"
      :collapse="isCollapse"
    >
      <template v-for="(item,index) in menu">
        <el-submenu :key="index" v-if="item['children']" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item
            :index="val.path"
            v-for="val in item['children']"
            v-bind:key="val.name"
          >{{val.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :key="index" v-else :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "tabSlider",
  props: {
    isCollapse: Boolean
  },
  computed: {
    menu() {
      return this.$menus;
    },
    defaultActive() {
      return window.location.hash.substr(1); //刷新页面时，获取location整体的路径==>'/home/one'
    }
  }
};
</script>
<style lang="scss">
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
