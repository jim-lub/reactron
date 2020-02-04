import { State } from '@main/lib/store/store.types';

const getAllRefIDs = (state: State) => {
  const refs = state.windows.refs;

  if (refs) {
    return Object.keys(refs).map(val => val);
  }
}

export default getAllRefIDs;
