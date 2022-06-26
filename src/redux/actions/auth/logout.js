// import setAuthHeader from '../../../helpers/setAuthHeader';
// import {clearError} from '../../reducers/errors';
// import {clearLoading} from '../../reducers/loading';
// import {unauthenticate} from '../../reducers/login';
// import {clearPasswordChanged, clearProfile} from '../../reducers/profile';


import {names} from '../names';
import setAuthHeader from '../../../api/setAuthHeader';
import { unauthenticate } from '../../reducers/login';
import { clearProfile } from '../../reducers/profile';

export const _onLogout = () => {
  return dispatch => {
    setAuthHeader(null);
    localStorage.removeItem(names.TOKEN_NAME)
    dispatch(unauthenticate());
    dispatch(clearProfile());
    // dispatch(clearError());
    // dispatch(clearLoading());
  };
};

