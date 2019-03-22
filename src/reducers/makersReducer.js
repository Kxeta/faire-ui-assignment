import {
  GET_MAKERS_WITH_FILTERS,
  GET_MAKER_PRODUCTS,
} from '../constants/action-types';

const initialState = {};

function makersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAKERS_WITH_FILTERS:
      return Object.assign({}, state, {
        ...state,
        ...action.payload,
      });
    case GET_MAKER_PRODUCTS:
      return Object.assign({}, state, {
        ...state,
        brandsProducts: {
          ...state.brandsProducts,
          [`${action.payload.brand}`]: action.payload.products,
        },
      });
    default:
      return state;
  }
}
export default makersReducer;
