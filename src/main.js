import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { install as installApollo, apolloProvider } from './support/apollo'

import './assets/css/main.css'
import './registerServiceWorker'

installApollo(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  apolloProvider
}).$mount('#app')
