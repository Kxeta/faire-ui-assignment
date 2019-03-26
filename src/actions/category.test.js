import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/category';
import * as types from '../constants/action-types';
import { baseURL } from '../constants/utils';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Category Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Should handle IS_FETCHING_CATEGORIES and GET_ALL_CATEGORIES correctly', () => {
    fetchMock.getOnce(`${baseURL}/category/new`, {
      body: { categories: ['Foo Bar'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.IS_FETCHING_CATEGORIES, payload: true },
      { type: types.GET_ALL_CATEGORIES, payload: { categories: ['Foo Bar'] } },
      { type: types.IS_FETCHING_CATEGORIES, payload: false },
    ];
    const store = mockStore({ categories: [] });

    return store.dispatch(actions.getAllCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
