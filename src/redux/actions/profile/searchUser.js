import {accountApiHandler} from '../../../api/profile';
import {clearError, setError} from '../../reducers/errors';
import {clearLoading, setLoading } from '../../reducers/loading';
import { setResetEmail, setUserInfo } from '../../reducers/profile';
import { setSuccessMsg } from '../../reducers/sucess';
import {names} from '../names';

export const _searchUser = (data) => {

  return async dispatch => {
    dispatch(setLoading());
    try {
      const {data:{user}} = await accountApiHandler(names.SEARCH_USER, data);
    //   dispatch(getProfile(data.user));

    dispatch(setUserInfo(user))
    dispatch(clearError())
    // dispatch(getUserProfile())
    // dispatch(setSuccessMsg(user))
      setTimeout(() => {
        
      dispatch(clearLoading());
      }, 2000);
    } catch (e) {
        console.log(e);
      dispatch(setError(e.response.data.error));
      dispatch(clearLoading());
    }
  };
};