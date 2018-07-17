import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the evaluatePage state domain
 */

const selectEvaluatePageDomain = state =>
  state.get('evaluatePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EvaluatePage
 */

const makeSelectEvaluatePage = () =>
  createSelector(selectEvaluatePageDomain, substate => substate.toJS());

export default makeSelectEvaluatePage;
export { selectEvaluatePageDomain };
