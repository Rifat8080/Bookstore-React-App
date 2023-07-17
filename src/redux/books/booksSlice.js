import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    filteredBooks: [],
    categories: ['Fiction', 'Non-Fiction', 'Science', 'Fantasy'], // Hardcoded list of categories
    selectedCategory: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      if (
        state.selectedCategory === null
        || state.selectedCategory === action.payload.category
      ) {
        state.filteredBooks.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload,
      );
      if (bookIndex !== -1) {
        const bookToRemove = state.books[bookIndex];
        state.books.splice(bookIndex, 1);
        if (
          state.selectedCategory === null
          || state.selectedCategory === bookToRemove.category
        ) {
          const filteredBookIndex = state.filteredBooks.findIndex(
            (book) => book.id === action.payload,
          );
          if (filteredBookIndex !== -1) {
            state.filteredBooks.splice(filteredBookIndex, 1);
          }
        }
      }
    },
    setCategoryFilter: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === null) {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(
          (book) => book.category === action.payload,
        );
      }
    },
  },
});

export const { addBook, removeBook, setCategoryFilter } = bookSlice.actions;

export default bookSlice.reducer;
