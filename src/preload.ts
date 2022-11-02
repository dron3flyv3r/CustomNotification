// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer, contextBridge } from "electron";


window.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("clickThroughElement");
  el.addEventListener("mouseenter", () => {
    ipcRenderer.send("set-ignore-mouse-events", true, { forward: true });
  });
  el.addEventListener("mouseleave", () => {
    ipcRenderer.send("set-ignore-mouse-events", false);
  });
});

contextBridge.exposeInMainWorld("electron", {
  handelUrl: (url: any) => ipcRenderer.on("api-url", url),
});
