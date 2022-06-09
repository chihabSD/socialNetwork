
   
import {useDispatch, useSelector} from 'react-redux';
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {
    // loginReducer: {authenticated},
    loginReducer: { authenticated},
  
  } = state;
  return {
    dispatch,
    authenticated,

  };
};

export {useRedux};