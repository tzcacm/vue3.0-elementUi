<template>
  <div class="tabSlider">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#242f42"
      text-color="#fff"
      active-text-color="#29aff6"
      :collapse="isCollapse"
    >
      <template v-for="(items,index) in menu">
        <el-menu-item
          :key="index"
          :index="items.index"
          v-if="index <= 0"
          @click="addMenu(items.index,items.title,items.path)"
        >
          <i :class="items.class"></i>
          <span slot="title">{{items.title}}</span>
        </el-menu-item>
        <el-submenu :key="index" :index="items.index" v-if="index > 0">
          <template slot="title">
            <i :class="items.class"></i>
            <span slot="title">{{items.title}}</span>
          </template>
          <el-menu-item
            v-for="(val,key) in items.data"
            :key="key"
            :index="val.index"
            @click="addMenu(val.index,val.title,val.path)"
          >{{val.title}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class TabSlider extends Vue {
  @Prop() isCollapse: Boolean;
  @Prop() defaultActive: string;
  menu: any[] = this.$menu;

  addMenu(index, title, path) {
    this.$router.replace(path);
    this.$emit('addMenu', index, title, path);
  }
}
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
