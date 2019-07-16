import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRx from 'vue-rx'
//引入elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//api服务
import { ApiService } from './providers/apiService'
//管道
import { date } from './pipes/date'
//导入导航栏目
import { menu } from './assets/menus/menus'
//引入echarts主模块（基础模块）
import ECharts from 'vue-echarts/components/ECharts.vue'
// 引入需要的echarts如表
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
//引入中国地图
import 'echarts/map/js/china';
// 引入需要的 echarts的交互组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/toolbox';



Vue.use(ElementUI)
Vue.use(VueRx)

Vue.component('chart', ECharts);

Vue.filter('date', date) //时间管道

//typescript需要解析
declare module 'vue/types/vue' {
  interface Vue {
    $api: any
    $menu: []
  }
}

Vue.prototype.$menu = menu;//全局挂载导航栏
Vue.prototype.$api = new ApiService();  //全局挂载api

Vue.config.productionTip = false

/* eslint-disable no-new */
const app: Vue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

export default app

