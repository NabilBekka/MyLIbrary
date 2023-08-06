import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    searchBarActivated: false
};

const searchSlice = createSlice ({
    name: 'search',
    initialState,
    reducers: {
        searchAction: (state, action) => {
            state.search = action.payload;
        },
        searchBarActivatedAction: state => {
            state.searchBarActivated = true;
        }
    }
});

const searchReducer = searchSlice.reducer;

export default searchReducer;
export const { searchAction, searchBarActivatedAction } = searchSlice.actions;