type microApp = {
    name: string
    entry: string
    container: "#mirco"
    activeRule: string
    port: number | string
  }
  const apps: microApp[] = [
    {
      name: "itnms-ui-business",
      entry: "//localhost:7004",
      container: "#mirco",
      activeRule: "/Performance/micro-itnms-business/data-monitor/index",
      port: "7004"
    }
  ]
  export default apps 