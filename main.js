const {app, BrowserWindow} = require('electron')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.loadURL('http://127.0.0.1:5173/')
}

app.on('ready', () => {
  createWindow()
})