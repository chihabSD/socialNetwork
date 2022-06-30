import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  action: {
    message: "",
    type: "",
  },
};
export const actionReducer = createSlice({
  name: "action",
  initialState,
  reducers: {
    setActionMessage: (state, action) => {
        const {type, message} = action.payload
      state.action = { ...state.action, type, message  };
    },
    clearActionMessage: (state) => {
      state.action = initialState
    },
  },
});

export const { setActionMessage, clearActionMessage } = actionReducer.actions;
export default actionReducer.reducer;
