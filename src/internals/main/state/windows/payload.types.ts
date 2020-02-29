export namespace Payload {
  export interface AddWindowRef {
    id: string,
    type: string,
    alias: string,
    ref: Electron.BrowserWindow
  }

  export interface RemoveWindowRef {
    id: string
  }
}
