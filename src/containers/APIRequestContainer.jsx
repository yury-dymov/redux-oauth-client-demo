import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';

import { apiRequest }                   from 'redux/actions';

import ButtonLoader                     from 'react-bootstrap-button-loader';

@connect(mapStateToProps)
export default class APIRequestContainer extends Component {
  static propTypes = {
    loading:  PropTypes.bool,
    time:     PropTypes.number,
    errors:   PropTypes.array
  }

  handleClick = () => this.props.dispatch(apiRequest());

  render() {
    const { loading, time, errors } = this.props;

    let widget = null;

    if (time) {
      widget = <div>Server time: {new Date(time * 1000).toString()}</div>
    }

    if (errors) {
      widget = <div>Errors: {errors.map((err, idx) => <span key={idx}>{err}</span>)}</div>
    }

    return (
      <div>
        <h2>Secured API Request</h2>
        <ButtonLoader
          loading   = {loading}
          className = 'oauth-sign-in-submit'
          onClick   = {this.handleClick}
        >
          API Request
        </ButtonLoader>
        {widget}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const loading   = state.test.getIn([ 'loading' ]);
  const time      = state.test.getIn([ 'time' ]);
  const errorMap  = state.test.getIn([ 'errors' ]);

  let errors = null;

  if (errorMap) {
    errors = [];
    errorMap.forEach(err => errors.push(err));
  }

  return { loading, time, errors };
}
