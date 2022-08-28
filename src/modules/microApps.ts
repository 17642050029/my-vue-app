type microApp = {
    name: string
    entry: string
    container: "#mirco"
    activeRule: string
    port: number | string
  }
  
  const apps: microApp[] = [
    {
      name: "vue-child1",
      entry: "//localhost:3001",
      container: "#mirco",
      activeRule: "#/m1",
      port: "3001"
    },
    {
      name: "vue-child2",
      entry: "//localhost:3002",
      container: "#mirco",
      activeRule: "#/m2",
      port: "3002"
    }
  ]
  export default apps 