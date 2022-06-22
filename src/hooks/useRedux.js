
   
import {useDispatch, useSelector} from 'react-redux';
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {
    // loginReducer: {authenticated},
    loginReducer: { authenticated},
    errorsReducer: {error},
    loadingReducer: {loading },
    successMsgReducer: { successMsg}
    

  } = state;
  return {
    dispatch,
    authenticated,


    // errors
    error, 
  loading, 
  //  successMsgReducer
  successMsg
  };
};

export {useRedux};