import React from "react";
import { ipcRenderer } from 'electron';

export interface HelloProps { compiler: string; framework: string; }

export const App = (props: HelloProps) => {
  const handleClick = () => {
      ipcRenderer.send('window.open', 'hello');
  }

  return (
    <div>
      <h1>Hello from {props.compiler} and stuff and more stuff and {props.framework}!</h1>
      <button onClick={handleClick}>send message to main</button>
    </div>
  )
};
