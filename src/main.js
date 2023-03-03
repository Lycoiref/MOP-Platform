import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router/routes'
import './style.css'
import './router/routes'

const app = createApp(App)

// console.log(router)
app.use(router)
app.mount('#app')
