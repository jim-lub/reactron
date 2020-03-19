export namespace Window {
  export interface Instance {
    alias: Alias,
    containerType: ContainerType,
    ref: Ref,
    bounds: Bounds,
    flags: Flags
  }

  export type Alias = string;
  export type ContainerType = string;
  export type Ref = Electron.BrowserWindow;

  export interface Bounds {
    x: number,
    y: number,
    width: number,
    height: number
  }

  export interface Flags {
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
}
