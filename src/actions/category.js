import { baseURL } from '../constants/utils';
import { GET_ALL_CATEGORIES } from '../constants/action-types';

export const getAllCategories = () => dispatch => {
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
    .catch(err => console.error('Failed to fetch all categories', err));
};
