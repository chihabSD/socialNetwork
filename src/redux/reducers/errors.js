import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  error: null,
};
export const errorsReducer = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
});

export const {clearError, setError} = errorsReducer.actions;
export default errorsReducer.reducer;