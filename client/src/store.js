import Vue from 'vue'
import Vuex from 'vuex'
// import io from 'socket.io-client'
let socket = {}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: '',
    currentRoom: {},
    members: []
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
    }
  },
  actions: {
    newSnackbar({ commit }, text) {
      commit('setSnackbar', text)
    },

    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({})
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
