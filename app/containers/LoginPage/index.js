/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div>登录</div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withSaga,
  withConnect,
)(LoginPage);
