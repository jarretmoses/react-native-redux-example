// @flow

import { FETCH_DATA_REQUEST } from '../../constants/action-types';

export const fetchDataRequest = () => (
  {
    type: FETCH_DATA_REQUEST,
    payload: { isLoading: true },
  }
);
