import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    incrCount(state) {
      state.count++
    }
  },
  actions: {
    incrCountDelay(store) {
      setTimeout(() => {
        store.commit('incrCount')
      }, 1000)
    }
  }
})
