import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

// import io from 'socket.io-client'
let socket = {}

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    snackbar: '',
    currentRoom: {},
    members: [],
    ox: {}
  },
  mutations: {
    setSnackbar(state, text) {
      state.snackbar = text
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
    newSnackbar({ commit }, text) {
      commit('setSnackbar', text)
    },

    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setOx', res.data)
          router.push({ name: 'OxHome' })
          console.log(res)
        })

    },

    oxSocket({ commit, dispatch }, connectionInformation) {
      // establish connection with socket
      socket = io('//localhost:3000')

      // register socket event listeners
      socket.on('CONNECTED', data => {
        console.log('Connected to server socket')

        // connect to room if opening room
        if (!connectionInformation.newRoom) {
          socket.emit('join', { roomName: connectionInformation.roomName })
        } else {
          socket.emit('create', { roomName: connectionInformation.roomName })
        }
      })

      // save current room
      socket.on('joinedRoom', room => {
        commit('setRoom', room)
      })

      socket.on('updateMembers', member => {
        commit('addMember', member)
      })
    }
  }
})
