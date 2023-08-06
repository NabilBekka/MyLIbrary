import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    results: [],
    error: ''
};

export const fetchBooks = createAsyncThunk('resultsGames/fetchBooks', search => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(res => res.data.items);
});

const resultsBooksSlice = createSlice({
    name: 'resultsBooks',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchBooks.fulfilled, (state,action) => {
            state.isLoading = false;
            state.results = action.payload;
            state.error = '';
        });
        builder.addCase(fetchBooks.rejected, (state,action) => {
            state.isLoading = false;
            state.results = [];
            state.error = action.error.message;
        });
    }
});

const resultsBooksReducer = resultsBooksSlice.reducer;

export default resultsBooksReducer;