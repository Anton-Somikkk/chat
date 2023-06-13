import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import telNumberReducer from "../Slices/telNumberSlice";
import getTokenReducer from "../Slices/getTokenSlice";
import messageReducer from "../Slices/messageSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  telNumber: telNumberReducer,
  getToken: getTokenReducer,
  message: messageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
