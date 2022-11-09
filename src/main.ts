import { app, BrowserWindow, ipcMain, Menu, Tray } from "electron";
import * as path from "path";
import { createServer } from "http";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

app.disableHardwareAcceleration();

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    alwaysOnTop: true,
  });

  if (process.platform === "darwin") {
    app.dock.hide();
  }

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../static/index.html"));

  // Hide the menu bar
  mainWindow.setMenu(null);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // Make the window fullscreen
  mainWindow.maximize();

  // makes it click through
  mainWindow.setIgnoreMouseEvents(true);

  // create tray
  const tray = new Tray(path.join(__dirname, "../src/assets/icon.png"));
  tray.setToolTip("This is my application.");
  const context = Menu.buildFromTemplate([
    { label: "Quit", type: "normal", click: () => app.quit() },
    {
      label: "Box Test",
      type: "normal",
      click: () => {
        mainWindow.webContents.send("api-url", "/m=hejsa%20dette%20er%20en%20test%20besked&h=test1&t=box");
      },
    },
    {
      label: "Map Test",
      type: "normal",
      click: () => {
        mainWindow.webContents.send("api-url", "/m=hejsafra%20dette%20er%20en%20test&20map%20besked&h=test%20map&t=map&la=55.6412763&lo=12.0595312");
      },
    },
    {
      label: "Img Test",
      type: "normal",
      click: () => {
        mainWindow.webContents.send("api-url", "/m=hejsafra%20dette%20er%20en%20test%20fra%20image%20besked&h=test%20image&t=img&i=http://store-images.s-microsoft.com/image/apps.28293.14416131676512756.84314783-1c86-4403-b991-2e1da8525703.0dbed0c5-75f5-4c15-9b43-ea96f1670b4f");
      },
    },
    { label: "Hide/Show", type: "normal", click: () => (mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()) },
  ]);
  tray.setContextMenu(context);
  tray.setToolTip("This is my application.");

  createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
      if (req.url === "/test") {
        mainWindow.webContents.send("api-url", "/m=hejsa%20dette%20er%20en%20test%20besked&h=test1&t=box");
        res.write("this was a test");
        res.end();
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
app.on("ready", () => {
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
