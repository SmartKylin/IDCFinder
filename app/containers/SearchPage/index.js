/**
 *
 * SearchPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

/* eslint-disable react/prefer-stateless-function */
export class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>SearchPage</title>
          <meta name="description" content="Description of SearchPage" />
        </Helmet>
        <div>机房速查</div>
      </div>
    );
  }
}

SearchPage.propTypes = {
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

export default compose(withConnect)(SearchPage);
