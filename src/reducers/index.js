import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';

export const Reducers = combineReducers({
  categories: categoryReducer,
});

export default Reducers;
