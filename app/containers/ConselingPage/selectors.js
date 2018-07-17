import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the conselingPage state domain
 */

const selectConselingPageDomain = state =>
  state.get('conselingPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConselingPage
 */

const makeSelectConselingPage = () =>
  createSelector(selectConselingPageDomain, substate => substate.toJS());

export default makeSelectConselingPage;
export { selectConselingPageDomain };
