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
    maximize          : "window:maximize",
  },

  state: {
    get               : "state:get",
    listen            : "state:listen",
    subscribe         : "state:subscribe"
  },

  store: {
    get               : "store:get",
    listen            : "store:listen",
    subscribe         : "store:subscribe",
    unsubscribe       : "store:unsubscribe"
  }
}

export default channels;
