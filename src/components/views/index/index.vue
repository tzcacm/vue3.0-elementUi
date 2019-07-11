<template>
  <div class="index">
    <statistics></statistics>
    <coverage></coverage>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import statistics from '@/components/views/index/statistics.vue';
import coverage from '@/components/views/index/coverage.vue';
@Component({
  components: {
    statistics,
    coverage
  }
})
export default class Index extends Vue {}
</script>
<style lang="scss">
</style>

