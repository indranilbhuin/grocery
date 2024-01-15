import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    fetchAllProductsRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    fetchAllProductsSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchAllProductsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectAllProductsData = (state: RootState) =>
  state.allProducts.data;
export const selectAllProductsLoading = (state: RootState) =>
  state.allProducts.isLoading;
export const selectAllProductsError = (state: RootState) =>
  state.allProducts.error;

export const {
  fetchAllProductsRequest,
  fetchAllProductsSuccess,
  fetchAllProductsError,
} = allProductsSlice.actions;

export default allProductsSlice.reducer;
