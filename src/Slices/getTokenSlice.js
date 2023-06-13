/* eslint no-param-reassign: "error" */
import { createSlice } from "@reduxjs/toolkit";

const getTokenSlice = createSlice({
    name: "getToken",
    initialState: { token: "" },
    reducers: {
        search: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { search } = getTokenSlice.actions;

export default getTokenSlice.reducer;
