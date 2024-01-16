import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductRequest: (state, _productId) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchProductError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectProductData = (state: RootState) => state.product.data;
export const selectProductLoading = (state: RootState) =>
  state.product.isLoading;
export const selectProductError = (state: RootState) => state.product.error;

export const {fetchProductRequest, fetchProductSuccess, fetchProductError} =
  productSlice.actions;

export default productSlice.reducer;
