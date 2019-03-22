import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import makersReducer from './makersReducer';

export const Reducers = combineReducers({
  categories: categoryReducer,
  makers: makersReducer,
});

export default Reducers;
