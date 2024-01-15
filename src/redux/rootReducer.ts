import {combineReducers} from 'redux';
import allProductsReducer from './slices/allProductsSlice';

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
