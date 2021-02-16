// import { from } from 'core-js/fn/array'
import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'

Vue.use(Vuex)

const USER_KEY = 'wx-user'
const USER_INFO = 'wx-userinfo'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY),
    userInfo: getItem(USER_INFO)
  },
  mutations: {
    // 将登录的值 保存在 state的 token中
    setUser(state, data) {
      state.user = data // 将用户登录后的信息 赋值给 vuex 中 的 state中的 user

      // 防止数据丢失
      setItem(USER_KEY, state.user)
    },
    // 将登录的用户信息 保存到 status 的 userInfo中
    setUserInfo(state, data) {
      state.userInfo = data
      // 防止数据丢失
      setItem(USER_INFO, data)
    }
  },
  actions: {},
  modules: {}
})
