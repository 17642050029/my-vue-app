import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import i18n from "../i18n";

export default (app: any) => {
    // 注册elementplus图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(ElementPlus, {
        locale: i18n.global.locale === 'zh-CN' ? zhCn : ''
    })
}