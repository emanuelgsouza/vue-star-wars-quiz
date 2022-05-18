import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

import './assets/css/main.css'
import './registerServiceWorker'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
