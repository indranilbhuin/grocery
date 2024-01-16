import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      const existingItem = state.items.find(existingItem => existingItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalPrice += item.price;
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      item.quantity += 1;
      state.totalPrice += item.price;
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      } else {
        state.items = state.items.filter(item => item.id !== id);
        state.totalPrice -= item.price;
      }
    },
  },
});

export const selectCartData = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.totalPrice;

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
