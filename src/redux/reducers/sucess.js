import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  successMsg: null,
};
export const successMsgReducer = createSlice({
  name: 'sucessMsg',
  initialState,
  reducers: {
   setSuccessMsg: (state, action) => {
      state.successMsg= action.payload;
    },
    clearSuccessMsg: state => {
      state.successMsg= null;
    },
  },
});

export const {setSuccessMsg, clearSuccessMsg} = successMsgReducer.actions;
export default successMsgReducer.reducer;