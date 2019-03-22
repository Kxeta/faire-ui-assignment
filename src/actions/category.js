import { baseURL } from '../constants/utils';
import {
  GET_ALL_CATEGORIES,
  IS_FETCHING_CATEGORIES,
} from '../constants/action-types';

export const getAllCategories = () => dispatch => {
  dispatch({
    type: IS_FETCHING_CATEGORIES,
    payload: true,
  });
  fetch(`${baseURL}/category/new`)
    .then(res => {
      return res.json();
    })
    .then(json =>
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: json,
      }),
    )
    .catch(err => console.error('Failed to fetch all categories', err))
    .then(() =>
      dispatch({
        type: IS_FETCHING_CATEGORIES,
        payload: false,
      }),
    );
};
