declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const ReactComponent = content;
  export {
    ReactComponent
  }
}
