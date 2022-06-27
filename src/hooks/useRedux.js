
   
import {useDispatch, useSelector} from 'react-redux';
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {
    // loginReducer: {authenticated},
    loginReducer: { authenticated},
    errorsReducer: {error},
    loadingReducer: {loading },
    successMsgReducer: { successMsg}, 
    profileReducer : {account, userInfo}
    

  } = state;
  return {
    dispatch,
    authenticated,

    userInfo
    , 
    // errors
    error, 
  loading, 
  //  successMsgReducer
  successMsg, 
  account
  };
};

export {useRedux};