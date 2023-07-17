import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    filteredBooks: [],
    categories: ['Fiction', 'Non-Fiction', 'Science', 'Fantasy'],
    selectedCategory: null,
  },
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
      if (state.selectedCategory === null || state.selectedCategory === book.category) {
        state.filteredBooks.push(book);
      }
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter(
        (book) => book.id !== bookId,
      );
      state.filteredBooks = state.filteredBooks.filter(
        (book) => book.id !== bookId,
      );
    },
    setCategoryFilter: (state, action) => {
      const selectedCategory = action.payload;
      state.selectedCategory = selectedCategory;
      state.filteredBooks = state.books.filter(
        (book) => selectedCategory === null || book.category === selectedCategory,
      );
    },
  },
});

export const { addBook, removeBook, setCategoryFilter } = bookSlice.actions;

export default bookSlice.reducer;
