import { State, Action } from '~types/store';

const addWindowRef = (state: State, action: Action) => {
  const { id, type, alias, ref } = action.payload;

  return {
    ...state,
    refs: {
      ...state.refs,
      [id]: {
        type,
        alias,
        ref
      }
    }
  }
}

export default addWindowRef;
