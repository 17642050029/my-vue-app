import i18n from '../i18n'
type microApp = {
  name: string
  entry: string
  container: "#mirco"
  activeRule: string
  port: number | string,
  props: object
}

import { initGlobalState, MicroAppStateActions } from 'qiankun';

// 初始化 state
const openTab = {}
const actions: MicroAppStateActions = initGlobalState(openTab);

actions.onGlobalStateChange((state, prev) => {
  console.log(12312);

  actions.setGlobalState(state);
})
// actions.offGlobalStateChange();
const apps: microApp[] = [
  {
    name: "itnms-business",
    // 带后缀才能访问到 /nms/micro/itnms-business/  ！！！！
    entry: "//localhost:7004/nms/micro/itnms-business",
    container: "#mirco",
    activeRule: "/nms/micro-itnms-business",
    port: "7004",
    props: {
      microProps: {
        locale: i18n,
        keepAlive:true
      }
    }
  },
  {
    name: "itnms-topo",
    // 带后缀才能访问到 /nms/micro/itnms-business/  ！！！！
    entry: "//localhost:7006/nms/micro/itnms-business",
    container: "#mirco",
    activeRule: "/nms/micro-itnms-topo",
    port: "7004",
    props: {
      microProps: {
        locale: i18n,
        keepAlive:true
      }
    }
  }
]
export default apps 