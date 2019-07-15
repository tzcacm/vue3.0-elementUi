<template>
  <div class="tabCard">
    <ul class="tabContent">
      <template v-for="(item, index) in editableTabs">
        <li :class="{active:item.check}" :key="index" @click="changeTab(item.title,item.path)">
          {{item.title}}
          <i class="el-icon-close icon" @click="removeTab(index)" v-if="index != 0"></i>
        </li>
      </template>
    </ul>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class TabCard extends Vue {
  @Prop() editableTabs: any[];

  changeTab(title, path) {
    this.$router.replace(path);
    this.$emit('changeTab', title, path);
  }
  removeTab(index) {
    this.$emit('removeTab', index);
  }
}
</script>
<style lang="scss">
.tabCard {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
}
.tabContent {
  width: 80%;
  display: -webkit-box;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: scroll;
  border-bottom: 1px solid #dfdfdf;
  padding: 5px;
  li {
    width: 100px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    background: #ecf5ff;
    border: 1px solid #ccc;
    margin-right: 3px;
    position: relative;
    border-radius: 4px;
    cursor: pointer;
  }
  li:hover {
    background: #29aff6;
    color: #fff;
  }
  .icon {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #fff;
    cursor: pointer;
  }
  .icon:hover {
    color: #000;
  }
  .active {
    color: #fff;
    background: #29aff6;
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
</style>
