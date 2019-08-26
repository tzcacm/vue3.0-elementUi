<template>
  <div class="home">
    <tabHeader v-on:collapse="collapse"></tabHeader>
    <div class="content">
      <tabSlider :defaultActive="defaultActive" v-on:addMenu="addMenu" :isCollapse="isCollapse"></tabSlider>
      <div class="content_box">
        <tabCard :editableTabs="editableTabs" v-on:changeTab="changeTab" v-on:removeTab="removeTab"></tabCard>
        <div class="tabRouter">
          <router-view></router-view>
        </div>
      </div>
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
  //tab定义
  defaultActive: string = '1';
  editableTabs: any[] = [];
  created() {
    if (!this.editableTabs.length) {
      this.editableTabs = [
        {
          index: '1',
          title: '首页',
          check: true,
          path: '/home/index'
        }
      ];
      this.defaultActive = this.editableTabs[0].index;
      this.$router.replace(this.editableTabs[0].path);
    }
  }

  collapse(event) {
    this.isCollapse = event;
  }

  //点击Menu
  addMenu(index, title, path) {
    let isNext = true;
    this.editableTabs.map(item => {
      item['check'] = false;
    });
    if (this.editableTabs.length > 0) {
      this.editableTabs.map(item => {
        if (item['title'] == title) {
          item['check'] = true;
          isNext = false;
        }
      });
    }
    if (!isNext) return;
    this.editableTabs.push({
      index: index,
      title: title,
      check: true,
      path: path
    });
  }

  //点击tab
  changeTab(title) {
    this.editableTabs.map(item => {
      item['check'] = false;
    });
    this.editableTabs.map(item => {
      if (item['title'] == title) {
        this.defaultActive = item.index;
        item['check'] = true;
      }
    });
  }

  //删除tab
  removeTab(index) {
    console.log(this.$router);
    if (this.editableTabs[index].check) {
      this.editableTabs.splice(index, 1);
      if (this.editableTabs.length == 1) {
        setTimeout(() => {
          this.editableTabs[0].check = true;
          this.defaultActive = this.editableTabs[0].index;
          this.$router.replace('/home/index');
        }, 0);
      } else {
        setTimeout(() => {
          this.editableTabs.map(item => {
            item.check = false;
          });
          this.editableTabs[this.editableTabs.length - 1].check = true;
          this.defaultActive = this.editableTabs[
            this.editableTabs.length - 1
          ].index;
          this.$router.replace(
            this.editableTabs[this.editableTabs.length - 1].path
          );
        }, 0);
      }
    } else {
      let title = this.editableTabs.filter(val => val.check)[0].title;
      this.editableTabs.splice(index, 1);

      setTimeout(() => {
        this.editableTabs.map(item => {
          item.check = false;
        });
        this.editableTabs.map(item => {
          if (item['title'] == title) {
            item['check'] = true;
            this.$router.replace(item.path);
          }
        });
      }, 0);
    }
  }
}
</script>
<style lang="scss">
.home {
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

