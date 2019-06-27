<template>
  <div class="tabCard">
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >{{tag}}</el-tag>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class TabCard extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: []
  })
  dynamicTags: [];

  handleClose() {}
}
</script>
<style lang="scss">
</style>
