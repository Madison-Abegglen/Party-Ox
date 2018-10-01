import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueClipboard from 'vue-clipboard2'

Vue.use(Vuetify, {
  theme: {
    primary: '#66fcf1',
    secondary: '#45a29e',
    accent: '#163fd1'
  }
})

Vue.use(VueClipboard)

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get name of component (already in PascalCase)
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

String.prototype.capitalize = function() {
  return this[0].toLocaleUpperCase() + this.slice(1)
}