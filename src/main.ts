import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import start from './modules';
import './mock'

const app =createApp(App)

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(createPinia()).use(ElementPlus).mount('#app')
start({
    sandbox: {
        experimentalStyleIsolation : true 
    }
})

