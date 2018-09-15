import Vue from 'vue'
import Router from 'vue-router'
import OxHome from './views/OxHome.vue'
import Login from './views/Login.vue'
import PartyCode from './views/PartyCode.vue'

import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'ox-home',
      component: OxHome,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/party-code',
      name: 'party-code',
      component: PartyCode,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(route => route.meta.requiresAuth) &&
    !store.getters.loggedIn
  ) {
    if (to.name !== 'login') {
      store.state.reroute = { name: to.name, params: to.params }
    }
    return next({ name: 'login' })
  }
  next()
})

export default router