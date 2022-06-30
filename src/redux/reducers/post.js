import { createSlice } from "@reduxjs/toolkit";

export const postReducer = createSlice({
  name: 'post',
  initialState: {
    postCreated: false,
  },
  reducers: {
    setPostCreated: state => {
      state.postCreated = true;
    },
    clearPostCreated: state => {
      state.postCreated = false;
    },
  },
});
export const { setPostCreated, clearPostCreated } = postReducer.actions;
export default postReducer.reducer;