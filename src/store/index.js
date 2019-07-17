import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//全局状态
const state = {
  personInfo: {}, //个人信心
  isLogin: false, //是否登录
}

//getters 
const getters = {
  personInfo: state => {
    return state.personInfo
  },
  isLogin: state => {
    return state.isLogin
  }
}

//mutations
const mutations = {
  SETPERSONINFO(state, personInfo) {
    state.personInfo = personInfo
  },
  SETISLOGIN(state, isLogin) {
    state.isLogin = isLogin
  }
}


//全局状态vuex
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
