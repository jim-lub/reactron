import windowsReducer from '@main/state/windows';
import { combineReducers, createStore } from '@main/lib/store';


const rootReducer = combineReducers({
  _windows: windowsReducer
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
