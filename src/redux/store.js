import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer, // Add the bookSlice.reducer to the "books" key
    categories: categoriesReducer,
  },
});

export default store;
