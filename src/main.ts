import { app, BrowserWindow, Menu, Tray } from "electron";
import * as path from 'path';
import { createServer } from "http";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    fullscreen: true,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
    alwaysOnTop: true,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../src/index.html'));

  // Hide the menu bar
  mainWindow.setMenu(null);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // Make the window fullscreen
  mainWindow.maximize();

  // makes it click through
  mainWindow.setIgnoreMouseEvents(true);

  // create tray
  const tray = new Tray(path.join(__dirname, '../src/assets/icon.png'));
  tray.setToolTip('This is my application.');
  const context = Menu.buildFromTemplate([
    { label: 'Quit', type: 'normal', click: () => app.quit() },
    {
      label: 'test', type: 'normal', click: () => {
        mainWindow.webContents.send("api-url", "/m=hejsa%20dette%20er%20en%20test%20besked&h=test1&t=box");
      }
    },
    { label: 'Hide/Show', type: 'normal', click: () => mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show() },
  ])
  tray.setContextMenu(context)
  tray.setToolTip('This is my application.')

  createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
      if (req.url === "/test") {
        mainWindow.webContents.send("api-url", "/m=hejsa%20dette%20er%20en%20test%20besked&h=test1&t=box");
        res.write("this was a test");
        res.end();
        console.log("test");
      
      } else {
        mainWindow.webContents.send("api-url", req.url);
        res.write("you wrote: " + req.url);
        res.end();
      }
    }
  }).listen(3000, "0.0.0.0", () => { 
    console.log("Server started on port 3000");  
  });


};



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.