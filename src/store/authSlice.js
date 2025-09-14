import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userId: null,
  username: null,
  email: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialAuthState,
  reducers: {
    setAuth(state, action) {
      state = { ...action.payload };
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    clearAuth(state) {
      state.userId = null;
      state.username = null;
      state.email = null;
      state.accessToken = null;
    },
  },
});
