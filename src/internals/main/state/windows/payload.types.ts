interface Bounds {
  x: number,
  y: number,
  width: number,
  height: number
}

interface Flags {
  isFocused: boolean,
  isVisible: boolean,
  isModal: boolean,
  isMaximized: boolean,
  isMinimized: boolean,
  isFullScreen: boolean,
  isNormal: boolean,

  isResizable: boolean,
  isMovable: boolean,
  isMaximizable: boolean,
  isMinimizable: boolean,
  isClosable: boolean
}

export namespace Payload {

  export interface AddWindowInstance {
    id: string,
    containerType: string,
    alias: string,
    ref: Electron.BrowserWindow,
    bounds: Bounds,
    flags: Flags
  }

  export interface RemoveWindowInstance {
    id: string
  }

  export interface SetWindowProps {
    id: string,
    bounds: Bounds,
    flags: Flags
  }

}
