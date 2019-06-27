import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { ApiService } from './providers/apiService'
import { date } from './pipes/date'
import { menu } from './assets/menus/menus'

Vue.use(ElementUI)

Vue.filter('date', date) //时间管道

//typescript需要解析
declare module 'vue/types/vue' {
  interface Vue {
    $api: any
    $menu: []
  }
}

Vue.prototype.$menu = menu;
Vue.prototype.$api = new ApiService();  //全局挂载api

Vue.config.productionTip = false

/* eslint-disable no-new */
const app: Vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default app

