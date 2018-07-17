/**
 *
 * Asynchronously loads the component for ConselingPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
