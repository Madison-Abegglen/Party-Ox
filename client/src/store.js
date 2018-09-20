import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

import io from 'socket.io-client'
let socket

Vue.use(Vuex)

const production = !window.location.host.includes('localhost')
const baseURL = production ? '//partyox.herokuapp.com' : '//localhost:3000'

let auth = Axios.create({
  baseURL: `//${baseURL}/auth/`,
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: `//${baseURL}/api/`,
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  // IDAHO
  // (-  _ -)... i see what you did there
  // LOL You're welcome :)
  state: {
    snackbar: {
      open: false,
      text: ''
    },
    parties: [],
    ox: {},
    reroute: undefined,
    loading: false,
    activeParty: {},
    member: {}
  },

  // IF YOURE READY COME AND GET IT
  getters: {
    loggedIn: state => !!state.ox.email,
    memberLoggedIn: state => !!state.member._id
  },

  // SCIENCE EXPERIMENTS HERE
  mutations: {
    setSnackbar(state, snack) {
      state.snackbar = snack
    },
    setOx(state, ox) {
      state.ox = ox
    },
    setParties(state, parties) {
      state.parties = parties
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setActiveParty(state, party) {
      state.activeParty = party
    }
  },

  // TAKE ACTION NOW
  actions: {

    // SNACK BAR STUFF (YUM)
    closeSnackbar({ commit }) {
      commit('setSnackbar', { text: '', open: false })
    },
    async newSnackbar({ commit, dispatch }, data) {
      await dispatch('closeSnackbar')
      if (data instanceof Error) {
        if (data.response && data.response.data && data.response.data.error) {
          data = data.response.data.error
        } else {
          data = data.message
        }
      }
      commit('setSnackbar', { open: true, text: data })
    },

    // AUTHORIZATION FOUND BELOW
    login({ commit, dispatch, state }, creds) {
      commit('setLoading', true)
      auth.post('login', creds)
        .then(res => {
          commit('setOx', res.data)
          dispatch('initSocket')

          router.push(state.reroute || { name: 'ox-home' })
          state.reroute = undefined
          commit('setLoading', false)
        })
        .catch(error => {
          dispatch('newSnackbar', error)
          commit('setLoading', false)
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(() => {
          commit('setOx', {})
          commit('setParties', [])
          commit('setActiveParty', {})
          router.push({ name: 'login' }) // go to login page
        })
        .catch(error => dispatch('newSnackbar', error))
    },
    signup({ commit, dispatch, state }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('setOx', res.data)

          router.push(state.reroute || { name: 'ox-home' })
          state.reroute = undefined
        })
        .catch(error => dispatch('newSnackbar', error))
    },
    authenticate({ commit, dispatch, state }) {
      auth.get('authenticate')
        .then(res => {
          commit('setOx', res.data)

          router.push(state.reroute || { name: 'ox-home' })
          state.reroute = undefined
          dispatch('initSocket')
        })
        .catch(() => { }) // swallows your errors
    },

    // IN CASE YOU HATE OUR APP
    deleteAccount({ commit, dispatch }) {
      api.delete('users/')
        .then(() => {
          commit('setOx', {})
          router.push({ name: 'login' })
        })
        .catch(error => dispatch('newSnackbar', error))
    },

    // SOCKS???
    initSocket({ commit, dispatch, state, getters }) {
      if (!getters.loggedIn) {
        return;
      }
      socket = io(baseURL)

      socket.on('connected', () => {
        // console.log('connected to socket')
        socket.emit('setUser', state.ox)
        // console.log('sent ox to socket')
      })

      socket.on('parties', parties => {
        commit('setParties', parties)
        // console.log('got parties from socket')
      })

      socket.on('party', party => {
        commit('setParties', [...state.parties, party])
        commit('setActiveParty', party)
        router.push({ name: 'party-code' })
        // console.log('got new party from socket')
      })

      socket.on('errorOccurred', error => {
        dispatch('newSnackbar', error)
        // console.log('[SOCKET ERROR]', error)
      })

      socket.on('partyDeleted', partyId => {
        commit('setParties', state.parties.filter(party => party._id !== partyId))
      })
    },

    // THE PARTY DON'T START 'TILL I WALK IN
    newParty(context, partyData) {
      // console.log(partyData)
      let memberLimit = parseInt(partyData.limit)
      if (!memberLimit) {
        memberLimit = Number.MAX_SAFE_INTEGER
      }

      socket.emit('newParty', {
        name: partyData.name,
        memberLimit
      })
    },

    deleteParty(context, partyId) {
      socket.emit('deleteParty', partyId)
    },

    initMemberSocket({ commit, dispatch, state, getters }, partyCode) {
      socket = io(baseURL)

      socket.on('errorOccurred', error => {
        dispatch('newSnackbar', error)
        // console.log('[SOCKET ERROR]', error)
      })

      socket.on('connected', () => {
        socket.emit('getParty', partyCode)
      })

      socket.on('partyGot', party => {
        // console.log(party)
        commit('setActiveParty', party)
        router.push({ name: 'member-lobby', params: { code: partyCode } })
      })

      socket.on('partyJoined', member => {
        commit('setMember', member)
        router.push({ name: 'member-home' })
      })
    },

    joinParty(context, { partyCode, name }) {
      socket.emit('joinParty', { partyCode, name })
    }
  }
})
