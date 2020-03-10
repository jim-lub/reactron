declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export { ReactComponent };
}

declare module "*.json" {
  const value: any;
  export default value;
}
