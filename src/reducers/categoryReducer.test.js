import reducer from './categoryReducer';
import * as types from '../constants/action-types';

describe('Category Reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Should handle GET_ALL_CATEGORIES', () => {
    expect(
      reducer([], {
        type: types.GET_ALL_CATEGORIES,
        payload: ['foo', 'bar'],
      }),
    ).toEqual(['foo', 'bar']);
  });
});
