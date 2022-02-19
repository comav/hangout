import {createStore, combineReducers} from 'redux';

import userDataReducer from './reducers';

const rootReducer = combineReducers({
  userData: userDataReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;