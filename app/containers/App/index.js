/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import NewsPage from 'containers/NewsPage/Loadable';
import ConselingPage from 'containers/ConselingPage/Loadable';
import EvaluatePage from 'containers/EvaluatePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RoomDetailPage from 'containers/RoomDetailPage/Loadable';
import CloudMap from 'containers/CloudMap/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { makeSelectPathname } from './selectors';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname()
});
@connect(mapStateToProps, null)
export default class App extends React.Component {
  static propTypes = {
    pathname: PropTypes.string,
  };
  render() {
    const { pathname } = this.props;
    return (
      <AppWrapper>
        <Helmet titleTemplate="%s - 找机房" defaultTitle="找机房">
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Header curPath={pathname} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/features" component={FeaturePage} /> */}
          <Route path="/search" component={SearchPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/conseling" component={ConselingPage} />
          <Route path="/evaluate" component={EvaluatePage} />
          <Route path="/detail" component={RoomDetailPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/map" component={CloudMap} />
          <Route path="/detail" component={RoomDetailPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </AppWrapper>
    );
  }
}
