/* eslint-disable no-console */

import { register } from 'register-service-worker'
import store from './store.js'

if (process.env.NODE_ENV === 'production') {
  register(`/service-worker.js`, {
    ready () {
      // console.log(
      //   'App is being served from cache by a service worker.\n' +
      //   'For more details, visit https://goo.gl/AFskqB'
      // )
    },
    cached () {
      // console.log('Content has been cached for offline use.')
    },
    updated () {
      store.dispatch('snackbar', { message: 'New content is available; please refresh.' })
    },
    offline () {
      store.dispatch('snackbar', { message: 'No internet connection found. App is running in offline mode.' })
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
