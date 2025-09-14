import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const appStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authSliceAction = authSlice.actions;
