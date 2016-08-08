import React                                              from 'react';
import ReactDOM                                           from 'react-dom';

import { initialize, authStateReducer }                   from 'redux-oauth';
import { createStore, applyMiddleware, combineReducers }  from 'redux';
import thunk                                              from 'redux-thunk';
import { Provider }                                       from 'react-redux';

import test                                               from 'redux/reducer';

import App                                                from 'componets/App';

const store         = createStore(
  combineReducers({
    auth: authStateReducer,
    test
  }),
  {},
  applyMiddleware(thunk)
);

const reduxOauthConfig = {
  backend: {
    apiUrl:       'http://redux-oauth-backend.herokuapp.com',
    signOutPath:  null,
    authProviderPaths: {
      github: '/auth/github'
    }
  },
  cookies: document.cookie,
  currentLocation: document.URL
};

store.dispatch(initialize(reduxOauthConfig)).then(
  () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('react-view')
    );
  }
);
