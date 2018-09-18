import Vue from 'vue'
import Router from 'vue-router'
import OxHome from './views/OxHome.vue'
import Login from './views/Login.vue'
import PartyCode from './views/PartyCode.vue'
import Parties from './views/Parties.vue'
import Party from './views/Party.vue'
import PartySettings from './views/PartySettings.vue'

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
    },
    {
      path: '/parties',
      name: 'parties',
      component: Parties,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/party/:id',
      name: 'party',
      props: true,
      component: Party,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/party/:id/settings',
      name: 'party-settings',
      props: true,
      component: PartySettings,
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