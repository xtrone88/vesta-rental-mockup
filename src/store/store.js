import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload
    }
  },
  actions: {
  },
  getters: {
  }
})
