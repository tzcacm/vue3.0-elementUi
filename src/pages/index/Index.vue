<template>
  <div class="index">
    <TabHeader v-on:collapse="collapse"></TabHeader>
    <div class="content">
      <tabSlider :isCollapse="isCollapse"></tabSlider>
      <div class="content_box">
        <!-- <tabCard :editableTabs="editableTabs" v-on:changeTab="changeTab" v-on:removeTab="removeTab"></tabCard> -->
        <div class="tabRouter">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabHeader from "@/components/TabHeader.vue";
import TabSlider from "@/components/TabSlider.vue";
export default {
  name: "index",
  components: {
    TabHeader,
    TabSlider
  },
  data() {
    return {
      isCollapse: false,
      editableTabs: []
    };
  },
  methods: {
    collapse(event) {
      this.isCollapse = event;
    },
  }
};
</script>

<style lang="scss">
.index {
  position: fixed;
  width: 100%;
  height: 100%;
}
.content {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
}
.content_box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.content_box::-webkit-scrollbar {
  width: 0;
}
.tabCard {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
}
.tabRouter {
  position: absolute;
  width: 90%;
  top: 60px;
  left: 50%;
  margin-left: -45%;
  margin-bottom: 100px;
}
</style>

