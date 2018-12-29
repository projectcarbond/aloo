import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initializeSession = () => ({
  type: 'INITIALIZE_SESSION',
});

const sessionReducer = (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZE_SESSION':
      return true;
    default: return state;
  }
};

const reducer = combineReducers({
  loggedIn: sessionReducer,
});

const store = (initialState) => {
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );
};

export default store;
export {
  initializeSession,
};
