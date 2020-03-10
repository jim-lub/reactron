import { Window } from '~types/window.types';

export namespace Payload {

  export interface AddWindowInstance {
    id: string,
    containerType: string,
    alias: string,
    ref: Electron.BrowserWindow,
    bounds: Window.Bounds,
    flags: Window.Flags
  }

  export interface RemoveWindowInstance {
    id: string
  }

  export interface SetWindowProps {
    id: string,
    bounds: Window.Bounds,
    flags: Window.Flags
  }

}
