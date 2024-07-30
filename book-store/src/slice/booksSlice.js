import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    inputValue: '',
    favourites: [],
    basket: [],
    pageValue: 1,
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

        setFavourites: (state, action) => {
            state.favourites.push(action.payload); 
        },

        delFavourites: (state, action) => {
            state.favourites.filter((book, index) => book.isbn13 === action.payload ? state.favourites.splice(index, 1) : '');
        },

        setBasket: (state, action) => {
            state.basket.push(action.payload);
        },

        delBasket: (state, action) => {
            state.basket.filter((book, index) => book.isbn13 === action.payload ? state.basket.splice(index, 1) : '');
        },

        nextPage: (state, action) => {
            state.pageValue += action.payload;
        },

        prewPage: (state, action) => {
            state.pageValue -= action.payload;
        },

        thisPage: (state, action) => {
            state.pageValue = action.payload;        
        },
    },

});

export const {
    setSearchBook, setInputValue, 
    setFavourites, delFavourites, 
    setBasket, delBasket, 
    nextPage, prewPage, thisPage,
    
} = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;

export const selectInputValue = (state) => state.inputValue;

export default booksSlice.reducer;


