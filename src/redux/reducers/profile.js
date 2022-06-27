
 
  import {createSlice} from '@reduxjs/toolkit';
  
const initialState = {
    profile_fetching: false,
    forgotPassword: false,
    resetTokenVerified: false,
    passwordChanged: false,
    // legacyContactAdd: false,
    resetEmail: '',
    account: {},
    userInfo: {},
    // profile: {}
  };
   export const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {
      setUserInfo: (state, action) => {
        // state.profile_fetching = action.payload;
        state.userInfo = action.payload;
      },
      clearUserInfo: (state ) => {
        // state.profile_fetching = action.payload;
        state.userInfo = {} 
      },
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
  , accountVerified, setUserInfo, clearUserInfo
  } = profileReducer.actions;
  export default profileReducer.reducer;