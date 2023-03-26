import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router/routes'
import './style.css'
import './router/routes'
// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 全局变量，记录用户是移动端还是PC端
app.config.globalProperties.mobile = null

// console.log(router)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
