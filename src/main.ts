import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app =createApp(App)
app.use(router).use(createPinia()).use(ElementPlus).mount('#app')
app.directive('permiss', {
    // mounted(el, binding) {
    //     if(!permiss.key.includes(String(binding.value))){
    //         el['hidden'] = true;
    //     }
    // }
})

