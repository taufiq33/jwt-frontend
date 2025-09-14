import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const appStore = configureStore({
  reducer: authSlice.reducer,
});

export const authSliceAction = authSlice.actions;
