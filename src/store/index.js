import Vuex from 'vuex'
import Vue from 'vue'
import LoginModule from '../pages/login/store'
import HomeModule from '../pages/home/store'
import TabModule from '../components/store'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    LoginModule,
    HomeModule,
    TabModule
  }
});
