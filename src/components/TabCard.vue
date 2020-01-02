<template>
  <div class="tabCard">
    <el-scrollbar :vertical="false" class="scroll-container">
      <router-link
        v-for="item in editableTabs"
        v-bind:key="item.name"
        :to="item.path"
        :class="isActive(item)?'active':''"
        class="tags-view-item"
      >
        {{item.name}}
        <span
          v-if="!isAffix(item)"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(item)"
        />
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "tabCard",
  computed: {
    editableTabs() {
      return this.$store.state.TabModule.editableTabs;
    }
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(event) {
      return event.meta;
    },
    closeSelectedTag(event) {
      this.$store.dispatch("delTabs", event).then(res => {
        if (!this.$store.state.TabModule.editableTabs.length) {
          this.$router.push("/");
          return;
        }
        if (event["path"] == this.$route.path) {
          let last = this.$store.state.TabModule.editableTabs[
            this.$store.state.TabModule.editableTabs.length - 1
          ];
          this.$router.replace(last.path);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.tabCard {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
  .scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 50px;
      line-height: 50px;
    }
    .tags-view-item {
      text-align: center;
      height: 30px;
      line-height: 30px;
      padding: 0 8px;
      display: inline-block;
      margin: 0 8px;
      font-size: 12px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      cursor: pointer;
      text-decoration: none;
      &.active {
        background-color: #8c8df3;
        color: #fff;
        border-color: #8c8df3;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      span {
        padding: 5px;
      }
    }
  }
}
</style>
