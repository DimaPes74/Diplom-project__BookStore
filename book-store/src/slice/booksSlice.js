import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    status: 'idle',
    error: null,
};

// export const fetchBooks = createAsyncThunk(
//     'fetchBooks/books',
//     async function() {
//         const response = await fetch('https://api.itbook.store/1.0/new', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'aplication/json',
//             }
//         });

//         const data = await response.json();
//         return data;
//     }
// )

export const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        setSearchBook: (state, action ) => {
            state.books = action.payload;
        },
    },

    // extraReducers(builder) {
    //     builder
    //     .addCase(fetchBooks.pending, (state) => {
    //         state.status = 'loading';
    //     })

    //     .addCase(fetchBooks.fulfilled, (state, action) => {
    //         state.status = 'resolved';
    //         state.books = action.payload;
    //     })

    //     .addCase(fetchBooks.rejected, (state) => {
    //         state.status = 'rejected';
    //     })
    // }
});

export const { setSearchBook } = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;

export default booksSlice.reducer;


