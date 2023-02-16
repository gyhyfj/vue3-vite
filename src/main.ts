import { createApp } from 'vue'
import { pinia } from '@/stores'
import { router } from '@/router'
import App from '@/App.vue'
import SvgRaw from './components/SvgRaw/index.vue'
import './index.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.component('SvgRaw', SvgRaw)
app.mount('#app')
