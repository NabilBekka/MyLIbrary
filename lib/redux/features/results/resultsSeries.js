import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    results: [],
    error: ''
};

export const fetchSeries = createAsyncThunk('resultsSeries/fetchSeries', search => {
    return axios.get(`https://www.omdbapi.com/?apikey=898a97b5&s=${search}&type=series`)
        .then(res => res.data.Search);
});

const resultsSeriesSlice = createSlice({
    name: 'resultsSeries',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchSeries.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchSeries.fulfilled, (state,action) => {
            state.isLoading = false;
            state.results = action.payload;
            state.error = '';
        });
        builder.addCase(fetchSeries.rejected, (state,action) => {
            state.isLoading = false;
            state.results = [];
            state.error = action.error.message;
        });
    }
});

const resultsSeriesReducer = resultsSeriesSlice.reducer;

export default resultsSeriesReducer;