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
      activeRule: "#/designer/micro/designer-interface",
      port: "8002"
    }
  ]
  export default apps 