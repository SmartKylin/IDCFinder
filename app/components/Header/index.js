import React from 'react';
import PropTypes from 'prop-types';

import { routerData } from 'common/router';
// import { FormattedMessage } from 'react-intl';
// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */

class Header extends React.Component {
  static propTypes = {
    curPath: PropTypes.string,
  };

  render() {
    const { curPath } = this.props;
    return (
      <div>
        <NavBar>
          {routerData.filter(router => router.naved).map(({ name, path }) => (
            <HeaderLink key={path} to={path} selected={curPath === path}>
              {name}
            </HeaderLink>
          ))}
        </NavBar>
      </div>
    );
  }
}

export default Header;
