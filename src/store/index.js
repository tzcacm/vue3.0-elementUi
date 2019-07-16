import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//全局状态
const state = {
  personInfo: {},
}

//getters 
const getters = {
  personInfo: state => {
    return state.personInfo
  },
}

// const mutations = {
//   [types.SET_PERSONINFO](state, personInfo) {
//     state.personInfo = personInfo
//   },
// }


//全局状态vuex
const store = new Vuex.Store({
  state,
  getters,
  // mutations
})

export default store
