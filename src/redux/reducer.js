import Immutable                              from 'immutable';
import { createReducer }                      from 'redux-immutablejs';

import { API_START, API_DONE, API_ERROR }     from './actions';

import { SIGN_OUT }                           from 'redux-oauth';

const initialState = Immutable.fromJS({
  loading:  false,
  loaded:   false,
  time:     null,
  errors:   null
});

export default createReducer(initialState, {
  [API_START]: (state) => state.merge({ loading: true, loaded: false, time: null, errors: null }),

  [API_DONE]: (state, { payload }) => state.merge({ loading: false, loaded: true, time: payload.time, errors: null }),

  [API_ERROR]: (state, { errors }) => state.merge({ loading: false, loaded: false, time: null, errors }),

  [SIGN_OUT]: () => initialState
});
