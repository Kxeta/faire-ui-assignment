import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import makersReducer from './makersReducer';
import utilsReducer from './utilsReducer';

export const Reducers = combineReducers({
  categories: categoryReducer,
  makers: makersReducer,
  utils: utilsReducer,
});

export default Reducers;
