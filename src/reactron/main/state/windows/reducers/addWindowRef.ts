import { Types } from '@main/lib/store';

const addWindowRef = (state: Types.State, action: Types.Action) => {
  const { id, alias, ref } = action.payload;

  return {
    ...state,
    refs: {
      ...state.refs,
      [id]: {
        alias,
        ref
      }
    }
  }
}

export default addWindowRef;
