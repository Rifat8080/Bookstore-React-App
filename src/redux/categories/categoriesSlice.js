import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    getCategoryStatus: (state) => state.status,
  },
});

export const { getCategoryStatus } = categorySlice.actions;

export default categorySlice.reducer;
