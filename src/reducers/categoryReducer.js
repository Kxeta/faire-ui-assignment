import { GET_ALL_CATEGORIES } from '../constants/action-types';

const initialState = [];

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return Object.assign([], state, [...action.payload]);
    default:
      return state;
  }
}
export default categoryReducer;
