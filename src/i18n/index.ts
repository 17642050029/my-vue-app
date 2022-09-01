import { createI18n } from "vue-i18n";
import zh from "./lang/zh-CN";
import en from "./lang/en-US";

const system = localStorage.getItem('system')?JSON.parse(localStorage.getItem('system')||''):{}

type MessageSchema = typeof zh | typeof en

const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN'>({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  locale: system?.language || 'zh-CN',
  messages: {
    'en-US': en, // 标识:配置对象
    'zh-CN': zh
  },
});

export default i18n