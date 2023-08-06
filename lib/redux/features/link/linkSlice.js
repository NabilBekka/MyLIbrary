import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    link: ''
};

const linkSlice = createSlice ({
    name: 'link',
    initialState,
    reducers: {
        linkAction: (state, action) => {
            state.link = action.payload;
        }
    }
});

const linkReducer = linkSlice.reducer;

export default linkReducer;
export const { linkAction } = linkSlice.actions;