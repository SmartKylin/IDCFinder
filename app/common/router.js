import HomePage from 'containers/HomePage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import NewsPage from 'containers/NewsPage/Loadable';
import ConselingPage from 'containers/ConselingPage/Loadable';
import EvaluatePage from 'containers/EvaluatePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RoomDetailPage from 'containers/RoomDetailPage/Loadable';
import CloudMap from 'containers/CloudMap/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

export const routerData = [
  {
    path: '/',
    name: '首页',
    exact: true,
    component: HomePage,
    naved: true,
  },
  {
    path: '/search',
    name: '机房速查',
    component: SearchPage,
    naved: true,
  },
  {
    path: '/evaluate',
    name: '机房评测',
    component: EvaluatePage,
    naved: true,
  },
  {
    path: '/news',
    name: '行业新闻',
    component: NewsPage,
    naved: true,
  },
  {
    path: '/conseling',
    name: '咨询服务',
    component: ConselingPage,
    naved: true,
  },
  {
    path: '/login?type=login',
    name: '登录',
    component: LoginPage,
    naved: true,
  },
  {
    path: '/map',
    name: 'IDC云图',
    component: CloudMap,
  },
  {
    path: '/detail',
    name: '机房详情',
    component: RoomDetailPage,
  },
];