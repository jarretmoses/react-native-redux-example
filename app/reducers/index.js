// @flow
import { combineReducers } from 'redux';
import weatherReducer from './weather-reducer';

// Root Reducer
const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
