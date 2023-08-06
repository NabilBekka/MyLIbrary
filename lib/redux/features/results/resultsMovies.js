import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    results: [],
    error: ''
};

export const fetchMovies = createAsyncThunk('resultsMovies/fetchMovies', search => {
    return axios.get(`https://www.omdbapi.com/?apikey=898a97b5&s=${search}&type=movie`)
        .then(res => res.data.Search);
});

const resultsMoviesSlice = createSlice({
    name: 'resultsMovies',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state,action) => {
            state.isLoading = false;
            state.results = action.payload;
            state.error = '';
        });
        builder.addCase(fetchMovies.rejected, (state,action) => {
            state.isLoading = false;
            state.results = [];
            state.error = action.error.message;
        });
    }
});

const resultsMoviesReducer = resultsMoviesSlice.reducer;

export default resultsMoviesReducer;