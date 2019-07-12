<template>
  <formList></formList>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import formList from '@/components/views/list/formList.vue';
@Component({
  components: {
    formList
  }
})
export default class List extends Vue {}
</script>
<style lang="scss">
</style>

