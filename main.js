const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    resizable: false,
    title: "Music App 💖",
    alwaysOnTop: true,
    webPreferences: { nodeIntegration: true }
  });

  win.loadFile('index.html'); 
});
