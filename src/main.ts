import './assets/styles/index.css'
import { router } from '@/router'
import { pinia } from '@/stores'

import App from './App.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
