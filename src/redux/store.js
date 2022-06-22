import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './reducers/login';
import errorsReducer from './reducers/errors';
import loadingReducer from './reducers/loading';
import  successMsgReducer  from './reducers/sucess';
import  profileReducer  from './reducers/profile';
export default configureStore({
  reducer: {
    loginReducer,
errorsReducer, 
loadingReducer, successMsgReducer, profileReducer

  },
  
});