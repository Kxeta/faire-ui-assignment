import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/makers';
import * as types from '../constants/action-types';
import { baseURL } from '../constants/utils';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Makers Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Should handle IS_FETCHING_MAKERS and GET_MAKERS_WITH_FILTERS correctly', () => {
    fetchMock.postOnce(`${baseURL}/search/makers-with-filters`, {
      body: { makers: ['Foo Bar'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.IS_FETCHING_MAKERS, payload: true },
      { type: types.GET_MAKERS_WITH_FILTERS, payload: { makers: ['Foo Bar'] } },
      { type: types.IS_FETCHING_MAKERS, payload: false },
    ];
    const store = mockStore({ categories: [] });

    return store.dispatch(actions.getMakersWithFilters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
