import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arena: 'One',
    username: ''
  },
  mutations: {
    changeArena: function (state, n) {
      state.arena = n
    },
    changeUsername: function (state, name){
      state.username = name
    } 
  },
  actions: {

  }
})
