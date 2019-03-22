import { baseURL } from '../constants/utils';
import {
  GET_MAKERS_WITH_FILTERS,
  GET_MAKER_PRODUCTS,
  IS_FETCHING_MAKERS,
  IS_FETCHING_MAKER,
} from '../constants/action-types';

export const getMakersWithFilters = filters => dispatch => {
  dispatch({
    type: IS_FETCHING_MAKERS,
    payload: true,
  });
  fetch(`${baseURL}/search/makers-with-filters`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(filters),
  })
    .then(res => {
      return res.json();
    })
    .then(json =>
      dispatch({
        type: GET_MAKERS_WITH_FILTERS,
        payload: json,
      }),
    )
    .catch(err => console.error('Failed to fetch makers with filters', err))
    .then(() =>
      dispatch({
        type: IS_FETCHING_MAKERS,
        payload: false,
      }),
    );
};

export const getMakerProducts = brand => dispatch => {
  dispatch({
    type: IS_FETCHING_MAKER,
    payload: true,
  });
  fetch(`${baseURL}/brand/${brand}/products`)
    .then(res => {
      return res.json();
    })
    .then(json => {
      dispatch({
        type: GET_MAKER_PRODUCTS,
        payload: { brand, products: json },
      });
    })
    .catch(err => console.error('Failed to fetch makers with filters', err))
    .then(() =>
      dispatch({
        type: IS_FETCHING_MAKER,
        payload: false,
      }),
    );
};
