import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// App Stores
import { loggedIn } from './Layout/store';

const reducer = combineReducers({
  loggedIn,
});

const store = initialState => createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware),
);

export default store;
