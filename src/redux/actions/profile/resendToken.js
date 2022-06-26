import {accountApiHandler} from '../../../api/profile';
import {setError} from '../../reducers/errors';
import {clearLoading, setLoading } from '../../reducers/loading';
import {accountVerified, getProfile} from '../../reducers/profile';
import { setSuccessMsg } from '../../reducers/sucess';
import {names} from '../names';
import { getUserProfile } from './getUserProfile';

export const _resendVerificationToken = (user) => {

  return async dispatch => {
    dispatch(setLoading());
    try {
      const data = await accountApiHandler(names.RESEND_KEY, user);
    console.log(data);

    //   dispatch(accountVerified())
    // //   dispatch(getProfile(data.user));
    // // dispatch(getUserProfile())
    // dispatch(setSuccessMsg(msg))
    //   dispatch(clearLoading());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
      dispatch(clearLoading());
    }
  };
};