// @flow

import config from '../lib/config';

export const fetchWeatherData = () => (
  fetch(config.API_URL)
    .then((res) => res.json())
    .then((data) => data.currently)
    .catch((err) => err)
);
