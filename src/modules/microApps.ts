type microApp = {
    name: string
    entry: string
    container: "#mirco"
    activeRule: string
    port: number | string
  }
  const apps: microApp[] = [
    {
      name: "itnms-business",
      // 带后缀才能访问到 /nms/micro/itnms-business/  ！！！！
      entry: "//localhost:7004/nms/micro/itnms-business",
      container: "#mirco",
      activeRule: "/nms/micro/itnms-business",
      port: "7004"
    }
  ]
  export default apps 