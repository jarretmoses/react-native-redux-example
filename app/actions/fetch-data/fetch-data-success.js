// @flow

import { FETCH_DATA_SUCCESS } from '../../constants/action-names';

export const fetchDataSuccess = (weatherInfo : Object) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: { weatherInfo },
  }
);
