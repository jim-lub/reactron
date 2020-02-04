import { Types } from '@main/lib/store';

const removeWindowRef = (state: Types.State, action: Types.Action) => {
  const { id: target_id } = action.payload;

  return {
    ...state,
    refs: Object.entries(state.refs).reduce((obj, [id, values]) => {
      if (id !== target_id) {
        obj = {
          ...obj,
          [id]: values
        }
      }
      return obj;
    }, {})
  }
}

export default removeWindowRef;
