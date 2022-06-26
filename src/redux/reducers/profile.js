
 
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
      }, 
      accountVerified: state => {
        const newState = {...state.account.verified}
        state.account.verified =  true 
      }
    },
  });
  
  export const {
    getProfile,
  clearProfile 
  , accountVerified
  } = profileReducer.actions;
  export default profileReducer.reducer;