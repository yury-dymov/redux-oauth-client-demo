import React, { Component, PropTypes }  from 'react';

import OAuthButton                      from 'containers/OAuthButton';
import SignOutButton                    from 'containers/SignOutButton';
import APIRequestContainer              from 'containers/APIRequestContainer';
import UserInfoContainer                from 'containers/UserInfoContainer';
import DevTools                         from './DevTools';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <OAuthButton provider='github'>GitHub</OAuthButton>
        <UserInfoContainer />
        <h2>Sign out</h2>
        <SignOutButton />
        <APIRequestContainer />
        <DevTools />
      </div>
    );
  }
}
