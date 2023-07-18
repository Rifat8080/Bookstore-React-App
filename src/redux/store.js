import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import bookReducer from './books/booksSlice';

const Store = configureStore({
  reducer: {
    booksList: bookReducer,
    categories: categoriesReducer,
  },
});

export default Store;
