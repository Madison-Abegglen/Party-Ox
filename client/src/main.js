import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#66fcf1',
    secondary: '#45a29e',
    accent: '#163fd1'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
