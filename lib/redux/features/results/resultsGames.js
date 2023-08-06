import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    results: [],
    error: ''
};

export const fetchGames = createAsyncThunk('resultsGames/fetchGames', search => {
    return axios.get(`https://www.omdbapi.com/?apikey=898a97b5&s=${search}&type=game`)
        .then(res => res.data.Search);
});

const resultsGamesSlice = createSlice({
    name: 'resultsGames',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchGames.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchGames.fulfilled, (state,action) => {
            state.isLoading = false;
            state.results = action.payload;
            state.error = '';
        });
        builder.addCase(fetchGames.rejected, (state,action) => {
            state.isLoading = false;
            state.results = [];
            state.error = action.error.message;
        });
    }
});

const resultsGamesReducer = resultsGamesSlice.reducer;

export default resultsGamesReducer;