import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  number: null,
  
};

const telNumberSlice = createSlice({
  name: "telNumber",
  initialState,
  reducers: {
    setTelNumber(state, action) {
      state.number = action.payload;
    
    },
    
  },
});

export const { setTelNumber } = telNumberSlice.actions;

export default telNumberSlice.reducer;
