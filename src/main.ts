import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ElementPlus from './plugins/element'
import i18n from "./i18n";
import start from './modules';
import './mock'
import 'normalize.css'


const app = createApp(App)


app.use(router).use(pinia).use(ElementPlus).use(i18n).mount('#app')
start({
    sandbox: {
        experimentalStyleIsolation: true
    }
})

