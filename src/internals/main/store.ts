import { combineReducers, createStore } from '@main/lib/store';
import windowsReducer from '@main/state/windows';

const internalRootReducer = combineReducers({
  windows: windowsReducer
});

const rootReducer = combineReducers({
  __: internalRootReducer
});


let storeInstance;

if (!storeInstance) storeInstance = createStore(rootReducer);

const { dispatch, subscribe, unsubscribe, getState } = storeInstance;

export {
  dispatch,
  subscribe,
  unsubscribe,
  getState
}
