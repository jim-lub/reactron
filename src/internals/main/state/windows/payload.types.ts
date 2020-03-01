export namespace Payload {

  export interface AddWindowRef {
    id: string,
    containerType: string,
    alias: string,
    ref: Electron.BrowserWindow
  }

  export interface RemoveWindowRef {
    id: string
  }

}
