const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', createWindow)

function createWindow() {
  mainWindow = new BrowserWindow({
    width: '740',
    height: '960',
  })

  mainWindow.loadFile('index.html')
}

