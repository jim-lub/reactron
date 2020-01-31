import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const App = (props: HelloProps) => <h1>Hello from {props.compiler} and stuff and more stuff and {props.framework}!</h1>;
