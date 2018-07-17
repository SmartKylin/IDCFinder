import React from 'react';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */

const routerNameMap = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/search',
    name: '机房速查',
  },
  {
    path: '/evaluate',
    name: '机房评测',
  },
  {
    path: '/news',
    name: '行业新闻',
  },
  {
    path: '/conseling',
    name: '咨询服务',
  },
  {
    path: '/login?type=login',
    name: '登录',
  },
  {
    path: '/login?type=register',
    name: '注册',
  },
];

class Header extends React.Component {
  static propTypes = {
    curPath: PropTypes.string,
  };

  render() {
    const { curPath } = this.props;
    return (
      <div>
        <NavBar>
          {routerNameMap.map(({ name, path }) => (
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
