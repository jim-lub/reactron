/*******************************************************************************
* Inter process communication (IPC) // ?
* The channels object holds all channels that reactron uses to communicate
* between it's main process and renderer process.
*******************************************************************************/
const channels = {
  window: {
    open              : "window:open",
    close             : "window:close",
    minimize          : "window:minimize",
    restore           : "window:restore",
    maximize          : "window:maximize",
    unmaximize        : "window:unmaximize",
    focus             : "window:focus",
    reload            : "window:reload"
  },

  store: {
    dispatch          : "store:dispatch",
    get               : "store:get",
    subscribe         : "store:subscribe",
    unsubscribe       : "store:unsubscribe"
  }
}

export default channels;
