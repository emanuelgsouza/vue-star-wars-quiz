import { createApp } from 'vue'
import App from './App.vue'
import { buildRouter } from './router'
import { store } from './store'

import './assets/css/main.css'
import './registerServiceWorker'

const app = createApp(App)

app.use(store)
app.use(buildRouter(store))

app.mount('#app')
