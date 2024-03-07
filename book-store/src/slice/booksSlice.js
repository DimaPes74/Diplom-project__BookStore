import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    inputValue: '',
    favorits: [],
    basket: [],
    status: 'idle',
    error: null,
};


export const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        setSearchBook: (state, action ) => {
            state.books = action.payload;
        },

        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        },

        setFavorits: (state, action) => {
            state.favorits.push(action.payload);
        },

        delFavorits: (state, action) => {
            state.favorits.filter((book, index) => book.isbn13 === action.payload ? state.favorits.splice(index, 1) : '');
        },

        setBasket: (state, action) => {
            state.basket.push(action.payload);
        },

        delBasket: (state, action) => {
            state.basket.filter((book, index) => book.isbn13 === action.payload ? state.basket.splice(index, 1) : '');
        }
    },

});

export const { setSearchBook, setInputValue, setFavorits, delFavorits, setBasket, delBasket } = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;

export const selectInputValue = (state) => state.inputValue;

export default booksSlice.reducer;


