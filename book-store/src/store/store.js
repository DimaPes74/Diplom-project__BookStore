import { configureStore } from '@reduxjs/toolkit';

import booksReducer from '../slice/booksSlice.js';

export default configureStore({
    reducer: {
        books: booksReducer,
    },
});


