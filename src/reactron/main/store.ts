import windowsReducer from '@main/state/windows';
import { combineReducers, createStore } from '@main/lib/store';


const rootReducer = combineReducers({
  windows: windowsReducer
});

let storeInstance;

if (!storeInstance) storeInstance = createStore(rootReducer);

const { dispatch, getState } = storeInstance;

export {
  dispatch,
  getState
}
