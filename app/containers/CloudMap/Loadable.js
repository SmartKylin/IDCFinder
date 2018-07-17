/**
 *
 * Asynchronously loads the component for CloudMap
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
