import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
    getCategoryStatus: (state) => state.status,
  },
});

export const { checkStatus, getCategoryStatus } = categorySlice.actions;

export default categorySlice.reducer;
