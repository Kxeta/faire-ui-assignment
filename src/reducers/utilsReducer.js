import {
  IS_FETCHING_CATEGORIES,
  IS_FETCHING_MAKER,
  IS_FETCHING_MAKERS,
} from '../constants/action-types';

const initialState = {
  isFetchingCategories: false,
};

function utilsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING_CATEGORIES:
      return Object.assign({}, state, {
        ...state,
        isFetchingCategories: action.payload,
      });
    case IS_FETCHING_MAKER:
      return Object.assign({}, state, {
        ...state,
        isFetchingMaker: action.payload,
      });
    case IS_FETCHING_MAKERS:
      return Object.assign({}, state, {
        ...state,
        isFetchingMakers: action.payload,
      });
    default:
      return state;
  }
}
export default utilsReducer;
