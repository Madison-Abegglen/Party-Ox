import Vue from 'vue'
import Router from 'vue-router'
import OxHome from './views/OxHome.vue'
import Login from './views/Login.vue'
import PartyCode from './views/PartyCode.vue'
import Parties from './views/Parties.vue'
import Party from './views/Party.vue'
import PartySettings from './views/PartySettings.vue'
import MemberLobby from './views/MemberLobby.vue'
import MemberHome from './views/MemberHome.vue'

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
    },
    {
      path: '/lobby/:code',
      name: 'member-lobby',
      component: MemberLobby,
      props: true
    },
    {
      path: '/home/:memberId',
      name: 'member-home',
      component: MemberHome,
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(route => route.meta.requiresAuth) &&
    !store.getters.loggedIn &&
    !store.getters.memberLoggedIn
  ) {
    if (to.name !== 'login') {
      store.state.reroute = { name: to.name, params: to.params }
    }
    return next({ name: 'login' })
  }
  next()
})

export default router