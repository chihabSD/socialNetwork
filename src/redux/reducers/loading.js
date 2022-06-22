import { createSlice } from "@reduxjs/toolkit";

export const loadingReducer = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    clearLoading: state => {
      state.loading = false;
    },
  },
});
export const { setLoading, clearLoading} = loadingReducer.actions;
export default loadingReducer.reducer;