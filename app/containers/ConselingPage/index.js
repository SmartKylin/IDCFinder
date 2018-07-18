/**
 *
 * ConselingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectConselingPage from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class ConselingPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ConselingPage</title>
          <meta name="description" content="Description of ConselingPage" />
        </Helmet>
        <div>咨询服务</div>
      </div>
    );
  }
}

ConselingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  conselingpage: makeSelectConselingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'conselingPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConselingPage);
