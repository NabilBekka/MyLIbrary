import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ''
};

const searchSlice = createSlice ({
    name: 'search',
    initialState,
    reducers: {
        search: state => {
            state.search = 'nabil'
        }
    }
});

const searchReducer = searchSlice.reducer;

export default searchReducer;
export const { search } = searchSlice.actions;