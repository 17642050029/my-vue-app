type microApp = {
    name: string
    entry: string
    container: "#mirco"
    activeRule: string
    port: number | string
  }
  const apps: microApp[] = [
    {
      name: "designer-ui-workflow-monitor",
      entry: "//localhost:8002",
      container: "#mirco",
      activeRule: "/micro-itnms-business/data-monitor/index",
      port: "8002"
    }
  ]
  export default apps 