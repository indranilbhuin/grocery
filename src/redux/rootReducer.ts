import {combineReducers} from 'redux';
import allProductsReducer from './slices/allProductsSlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  product: productReducer,
  cart: cartReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
