import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile_fetching: false,
  codeVerified: false,
  resetTokenVerified: false,
  passwordChanged: false,
  // legacyContactAdd: false,
  resetEmail: "",
  account: {},
  userInfo: {},
  // profile: {}
};
export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearPasswordChanged: (state, action) => {
      // state.profile_fetching = action.payload;
      state.passwordChanged = false;
    },
    setPasswordChanged: (state, action) => {
      // state.profile_fetching = action.payload;
      state.passwordChanged = true;
    },

    setCodeVerified: (state, action) => {
      // state.profile_fetching = action.payload;
      state.codeVerified = true;
    },
    clearCodeVerified: (state, action) => {
      // state.profile_fetching = action.payload;
      state.codeVerified = false;
    },
    setUserInfo: (state, action) => {
      // state.profile_fetching = action.payload;
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      // state.profile_fetching = action.payload;
      state.userInfo = {};
    },
    getProfile: (state, action) => {
      // state.profile_fetching = action.payload;
      state.account = action.payload;
    },
    clearProfile: (state) => {
      state.account = {};
    },
    accountVerified: (state) => {
      const newState = { ...state.account.verified };
      state.account.verified = true;
    },
  },
});

export const {
  getProfile,
  clearProfile,
  clearCodeVerified,
  setCodeVerified,
  accountVerified,
  setUserInfo,
  clearUserInfo,
  setPasswordChanged,
  clearPasswordChanged,
} = profileReducer.actions;
export default profileReducer.reducer;
