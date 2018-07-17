import { fromJS } from 'immutable';
import conselingPageReducer from '../reducer';

describe('conselingPageReducer', () => {
  it('returns the initial state', () => {
    expect(conselingPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
