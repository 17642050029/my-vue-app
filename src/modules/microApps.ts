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
      entry: "//localhost:7004/Performance/micro-itnms-business",
      container: "#mirco",
      activeRule: "/Performance/micro-itnms-business",
      port: "7004"
    },
    {
      name: "vue-child1",
      entry: "//localhost:3001",
      container: "#mirco",
      activeRule: "/dashboard/m1",
      port: "3001"
    }
  ]
  export default apps 