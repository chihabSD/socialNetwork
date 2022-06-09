import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
  },
  reducers: {
    authenticate: state => {
      state.authenticated = true;
    },
    unauthenticate: state => {
      state.authenticated = false;
    },
  },
});
export const {authenticate, unauthenticate} = loginSlice.actions;
export default loginSlice.reducer;