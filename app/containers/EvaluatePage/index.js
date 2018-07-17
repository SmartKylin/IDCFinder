/**
 *
 * EvaluatePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEvaluatePage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class EvaluatePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>EvaluatePage</title>
          <meta name="description" content="Description of EvaluatePage" />
        </Helmet>
        <div>机房评测</div>
      </div>
    );
  }
}

EvaluatePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  evaluatepage: makeSelectEvaluatePage(),
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

const withReducer = injectReducer({ key: 'evaluatePage', reducer });
const withSaga = injectSaga({ key: 'evaluatePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EvaluatePage);
