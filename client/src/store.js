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

export default new Vuex.Store({
  state: {
    snackbar: {
      open: false,
      text: ''
    },
    currentRoom: {},
    members: [],
    ox: {}
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
    },

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

    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setOx', res.data)
          router.push({ name: 'OxHome' })
          console.log(res.data)
        })
        .catch(error => {
          dispatch('newSnackbar', error)
        })
    },
    signup({ commit, dispatch }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('setOx', res.data)
          router.push({ name: 'OxHome' })
          console.log(res.data)
        })
        .catch(error => console.log(error))
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
