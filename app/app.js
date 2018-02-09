// @flow

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import WeatherContainer from './containers/weather-container/weather-container';

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <WeatherContainer />
  </Provider>
);

export default app;
