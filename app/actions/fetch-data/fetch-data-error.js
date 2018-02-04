// @flow

import { FETCH_DATA_ERROR } from '../../constants/action-names';

export const fetchDataError = () => (
  {
    type: FETCH_DATA_ERROR,
    payload: { error: true },
  }
);
