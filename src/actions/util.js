import {
  IS_FETCHING_CATEGORIES,
  IS_FETCHING_MAKERS,
  IS_FETCHING_MAKER,
} from '../constants/action-types';

export const isFetchingCategories = isFething => dispatch => {
  dispatch({
    type: IS_FETCHING_CATEGORIES,
    payload: isFething,
  });
};
export const isFetchingMakers = isFething => dispatch => {
  dispatch({
    type: IS_FETCHING_MAKERS,
    payload: isFething,
  });
};
export const isFetchingMaker = isFething => dispatch => {
  dispatch({
    type: IS_FETCHING_MAKER,
    payload: isFething,
  });
};
