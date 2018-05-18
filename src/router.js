import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Lobby from './views/Lobby.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/arena',
      name: 'Home',
      component: Home
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    }
  ]
})
