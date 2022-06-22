
 
  import {createSlice} from '@reduxjs/toolkit';
  
const initialState = {
    profile_fetching: false,
    forgotPassword: false,
    resetTokenVerified: false,
    passwordChanged: false,
    // legacyContactAdd: false,
    resetEmail: '',
    account: {},
    // profile: {}
  };
   export const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {
      getProfile: (state, action) => {
        // state.profile_fetching = action.payload;
        state.account = action.payload;
      },
      clearProfile: state => {
        state.account = {};
      }
    },
  });
  
  export const {
    getProfile,
  clearProfile 
  } = profileReducer.actions;
  export default profileReducer.reducer;