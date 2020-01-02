<template>
  <div class="tabSlider">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#242f42"
      text-color="#fff"
      router
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
            @click="addMenu(val)"
          >{{val.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :key="index" v-else :index="item.path" @click="addMenu(item)">
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
    }
  },
  methods: {
    addMenu(item) {
      this.$store.commit("setTabs", item);
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
