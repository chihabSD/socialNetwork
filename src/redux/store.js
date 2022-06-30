import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login";
import errorsReducer from "./reducers/errors";
import loadingReducer from "./reducers/loading";
import successMsgReducer from "./reducers/sucess";
import postReducer from "./reducers/post";
import profileReducer from "./reducers/profile";
import actionReducer from "./reducers/action";
export default configureStore({
  reducer: {
    loginReducer,

    errorsReducer,
    loadingReducer,
    successMsgReducer,
    profileReducer,
    postReducer,
    actionReducer,
  },
});
