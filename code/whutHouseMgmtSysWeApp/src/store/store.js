// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    API_URL: 'http://118.126.117.96:8080/whutHouseMgmtReposity',
    access_token: '',
    unionID:'',
    count: 0,
    userinfo:[]
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    login: (state, data) => {
      const obj = state
      obj.access_token = data
    }
  }
})

export default store
