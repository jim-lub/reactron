import { createReducer, Types } from '@lib/store';

const initialState = {
  refs: {}
}

export default createReducer(initialState)({
  [ 'windows:addRef' ]: (state, action) => doSomething(state, action),
  [ 'windows:removeRef' ]: (state, action) => doSomething2(state, action),
});

const doSomething = (state: Types.State, action: Types.Action) => {
  const { uid, alias } = action.payload;

  console.log(action);

  return {
    ...state,
    [uid]: {
      ...state.uid,
      alias
    }
  };
}

const doSomething2 = (state: any, action: any) => {
  console.log(action);

  return state;
}
