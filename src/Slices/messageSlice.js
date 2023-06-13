import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  message: [],
  
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages(state, action) {
      state.message.push(action.payload);
    
    },
    
  },
});

export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
