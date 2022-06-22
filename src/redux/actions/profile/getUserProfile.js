import {accountApiHandler} from '../../../api/profile';
import {setError} from '../../reducers/errors';
import {clearLoading, setLoading } from '../../reducers/loading';
import {getProfile} from '../../reducers/profile';
import {names} from '../names';

export const getUserProfile = () => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const {data} = await accountApiHandler(names.GET_PROFILE, null);
      dispatch(getProfile(data.user));
      dispatch(clearLoading());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
    }
  };
};