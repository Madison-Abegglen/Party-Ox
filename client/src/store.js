import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

// import io from 'socket.io-client'
// let socket = {}

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    snackbar: {
      open: false,
      text: ''
    },
    currentRoom: {},
    members: [],
    parties: [],
    ox: {},
    reroute: undefined
  },


  getters: {
    loggedIn: state => !!state.ox.email
  },


  mutations: {
    setSnackbar(state, snack) {
      state.snackbar = snack
    },
    setRoom(state, room) {
      state.currentRoom = room
    },
    addMember(state, member) {
      state.members.push(member)
    },
    setOx(state, ox) {
      state.ox = ox
    }
  },


  actions: {
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

    login({ commit, dispatch, state }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setOx', res.data)
          console.log(state.reroute)
          router.push(state.reroute || { name: 'OxHome' })
          console.log(res.data)
          state.reroute = undefined
        })
        .catch(error => dispatch('newSnackbar', error))
    },

    logout({ commit, dispatch }, oxId) {
      auth.delete('logout')
        .then(res => {
          commit('setOx', {})
          router.push({ name: 'login' })

          // go to login page 
        })
        .catch(error => dispatch('newSnackbar', error))
    },

    signup({ commit, dispatch, state }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('setOx', res.data)
          console.log(state.reroute)
          router.push(state.reroute || { name: 'OxHome' })
          console.log(res.data)
          state.reroute = undefined
        })
        .catch(error => dispatch('newSnackbar', error))
    },

    authenticate({ commit, state }) {
      auth.get('authenticate')
        .then(res => {
          commit('setOx', res.data)
          router.push(state.reroute || { name: 'OxHome' })
          state.reroute = undefined
        })
        .catch(() => { }) // swallows your errors
    },

    deleteAccount({ commit, dispatch }, oxId) {
      api.delete('users/')
        .then(() => {
          commit('setOx', {})
          router.push({ name: 'login' })
        })
        .catch(error => dispatch('newSnackbar', error))
    }

    // oxSocket({ commit, dispatch }, connectionInformation) {
    //   // establish connection with socket
    //   socket = io('//localhost:3000')

    //   // register socket event listeners
    //   socket.on('CONNECTED', data => {
    //     console.log('Connected to server socket')

    //     // connect to room if opening room
    //     if (!connectionInformation.newRoom) {
    //       socket.emit('join', { roomName: connectionInformation.roomName })
    //     } else {
    //       socket.emit('create', { roomName: connectionInformation.roomName })
    //     }
    //   })

    //   // save current room
    //   socket.on('joinedRoom', room => {
    //     commit('setRoom', room)
    //   })

    //   socket.on('updateMembers', member => {
    //     commit('addMember', member)
    //   })
    // }

  }
})
