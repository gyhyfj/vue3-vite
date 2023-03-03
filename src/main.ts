import { createApp } from 'vue'
import { pinia } from '@/stores'
import { router } from '@/router'
import App from '@/App.vue'
import SvgRaw from './components/SvgRaw/index.vue'
import { i18n } from '@/i18n'
import './styles'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.component('SvgRaw', SvgRaw)
app.mount('#app')
