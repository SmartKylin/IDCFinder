/**
 *
 * NewsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

/* eslint-disable react/prefer-stateless-function */
export class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NewsPage</title>
          <meta name="description" content="Description of NewsPage" />
        </Helmet>
        <div>行内新闻</div>
      </div>
    );
  }
}

NewsPage.propTypes = {
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

export default compose(withConnect)(NewsPage);
