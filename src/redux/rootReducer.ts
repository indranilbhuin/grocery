import {combineReducers} from 'redux';
import allProductsReducer from './slices/allProductsSlice';
import productReducer from './slices/productSlice';

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  product: productReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
