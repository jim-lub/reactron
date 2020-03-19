export const getWindowRef = (state: any, { id }: { id: string }) => state.__.windows.instances[id].ref;
