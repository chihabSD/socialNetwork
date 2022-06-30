import { createSlice } from "@reduxjs/toolkit";

export const postReducer = createSlice({
  name: 'post',
  initialState: {
    postCreated: false,
    posts:{}
  },
  reducers: {
    getAllPosts: (state, action) => {
      // state.profile_fetching = action.payload;
      state.posts = action.payload;
    },
    
    setPostCreated: state => {
      state.postCreated = true;
    },
    clearPostCreated: state => {
      state.postCreated = false;
    },
  },
});
export const { setPostCreated, clearPostCreated , getAllPosts} = postReducer.actions;
export default postReducer.reducer;