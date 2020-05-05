import Vue from 'vue'
import App from './App.vue'
import setupRouter from './router'
import store from './store'

import './assets/css/main.css'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router: setupRouter(store),
  store,
  render: h => h(App)
}).$mount('#app')
