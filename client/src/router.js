import Vue from 'vue'
import Router from 'vue-router'
import OxHome from './views/OxHome.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OxHome',
      component: OxHome
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
