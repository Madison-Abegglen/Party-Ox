import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: ''
  },
  mutations: {
    setSnackbar(state, text) {
      state.snackbar = text
    }
  },
  actions: {
    newSnackbar({ commit }, text) {
      commit('setSnackbar', text)
    }
  }
})
