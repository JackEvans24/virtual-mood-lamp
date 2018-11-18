const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron

let mainWindow

// Listen for app to be ready
app.on('ready', function () {
    // Create new window
    mainWindow = new BrowserWindow({ frame: false })
    // Load html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }))
    // Quit all windows on main window quit
    mainWindow.on('closed', function () {
        app.quit()
    })

    mainWindow.setMenu(null)
})
