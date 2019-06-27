<template>
  <div class="home">
    <tabHeader v-on:collapse="collapse"></tabHeader>
    <div class="content">
      <tabSlider :isCollapse="isCollapse"></tabSlider>
      <dir class="content_box">
        <tabCard :dynamicTags="dynamicTags"></tabCard>
        <router-view></router-view>
      </dir>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import tabHeader from '@/components/tabHeader.vue';
import tabSlider from '@/components/tabSlider.vue';
import tabCard from '@/components/tabCard.vue';
@Component({
  components: {
    tabHeader,
    tabSlider,
    tabCard
  }
})
export default class Home extends Vue {
  // 初始化--随机背景图片
  isCollapse: boolean = false;
  dynamicTags: string[] = [];
  created() {
    if (JSON.parse(localStorage.getItem('personInfo'))) {
      localStorage.removeItem('personInfo');
    }
  }
  collapse(event) {
    this.isCollapse = event;
  }
}
</script>
<style lang="scss">
.content {
  display: flex;
}
.content_box {
  padding: 5%;
}
</style>

