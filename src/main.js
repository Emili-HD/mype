import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import { TroisJSVuePlugin } from 'troisjs'

import './styles.css'

const axiosInstance = axios.create({
  withCredentials: false,
})


const app = createApp(App)
app.config.globalProperties.$axios = axiosInstance
app.use(TroisJSVuePlugin)
app.use(router)

app.mount('#app')
