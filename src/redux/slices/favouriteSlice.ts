import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      const {item} = action.payload;
      if (!state.items.some(favoriteItem => favoriteItem.id === item.id)) {
        state.items.push(item);
      }
    },
    removeFromFavourite: (state, action) => {
      const {id} = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});
export const selectFavouriteData = (state: RootState) => state.favourite.items;

export const {addToFavourite, removeFromFavourite} = favouriteSlice.actions;

export default favouriteSlice.reducer;
