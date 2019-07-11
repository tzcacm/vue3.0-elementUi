<template>
  <div class="index">
    <statistics></statistics>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import statistics from '@/components/views/index/statistics.vue';
@Component({
  components: {
    statistics
  }
})
export default class Index extends Vue {}
</script>
<style lang="scss">
</style>

