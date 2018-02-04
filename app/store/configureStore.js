// @flow

// Redux Store Configuration
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggingMiddleware from './middleware/logging';

const configureStore = (initialState: Object) => {
  const middleware = applyMiddleware(thunk, loggingMiddleware);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
