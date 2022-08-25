import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const app =createApp(App)
app.use(router).use(createPinia()).use(ElementPlus).mount('#app')
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.directive('permiss', {
    // mounted(el, binding) {
    //     if(!permiss.key.includes(String(binding.value))){
    //         el['hidden'] = true;
    //     }
    // }
})

