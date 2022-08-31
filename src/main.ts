import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from './plugins/element'
import start from './modules';
import './mock'
import i18n from "./i18n";


const app = createApp(App)


app.use(router).use(createPinia()).use(ElementPlus).use(i18n).mount('#app')
start({
    sandbox: {
        experimentalStyleIsolation: true
    }
})

