import { fetch, parseResponse } from 'redux-oauth';

export const API_START = 'API_START';
export const API_DONE  = 'API_DONE';
export const API_ERROR = 'API_ERROR';

function apiStart() {
  return { type: API_START };
}

function apiDone(payload) {
  return { type: API_DONE, payload };
}

function apiError(errors) {
  return { type: API_ERROR, errors };
}

export function apiRequest() {
  return dispatch => {
    dispatch(apiStart());

    return dispatch(fetch('https://redux-oauth-backend.herokuapp.com/test/test'))
      .then(parseResponse)
      .then(({ payload }) => dispatch(apiDone(payload)))
      .catch(errors => dispatch(apiError(errors)));
  };
}
