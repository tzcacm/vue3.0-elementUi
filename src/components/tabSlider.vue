<template>
  <div class="tabSlider">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#242f42"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
    >
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu :index="index+1" v-for="(items,index) in menu" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{items.title}}</span>
        </template>
        <el-menu-item-group v-for="(val,key) in items.data" :key="key">
          <el-menu-item index="2-1" @click="addTab(editableTabsValue)">{{val.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class TabSlider extends Vue {
  @Prop({
    type: Boolean, // 父组件传递给子组件的数据类型
    required: true, // 是否必填
    default: false // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  })
  isCollapse: Boolean;
  menu: any[] = this.$menu;
  constructor() {
    super();
    console.log(this.menu);
  }

  addTab() {}
}
</script>
<style lang="scss">
.tabSlider {
  width: 201px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
