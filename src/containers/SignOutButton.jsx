import React, { PropTypes, Component }  from 'react';
import { connect }                      from 'react-redux';

import ButtonLoader                     from 'react-bootstrap-button-loader';

import classnames                       from 'classnames';

import { signOut }                      from 'redux-oauth';

import omit                             from 'lodash/omit';

@connect(mapStateToProps)
export default class SignOutButton extends Component {
  static propTypes = {
    label:        PropTypes.string,
    children:     PropTypes.node,
    icon:         PropTypes.node,
    dispatch:     PropTypes.func,
    disabled:     PropTypes.bool,
    loading:      PropTypes.bool,
    className:    PropTypes.string
  };

  static defaultProps = {
    children: <span>Sign Out</span>,
    icon:     null
  };

  handleClick = () => {
    const { dispatch } = this.props;

    dispatch(signOut());
  };

  render() {
    const { disabled, loading, icon, className } = this.props;

    const restProps = omit(this.props, ['disabled', 'loading', 'icon', 'className', 'dispatch']);

    const style = {};

    return (
      <ButtonLoader
        loading   = {loading}
        icon      = {icon}
        className = {classnames(className, 'oauth-sign-in-submit')}
        disabled  = {disabled}
        onClick   = {this.handleClick}
        {...restProps}
      />
    );
  }
}

function mapStateToProps({ auth }, ownProps) {
  const disabled  = !auth.getIn(['user', 'isSignedIn']);
  const loading   = auth.getIn(['signOut', 'loading']);

  return { disabled, loading };
}
