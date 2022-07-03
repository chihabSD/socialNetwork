
   
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
    actionReducer: { action}, 
    postReducer: { postCreated,  posts }, 
    profileReducer : {account, userInfo, codeVerified,currentUserPosts,  passwordChanged}
    

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
  account, codeVerified, passwordChanged, postCreated, action,  posts, currentUserPosts
  };
};

export {useRedux};