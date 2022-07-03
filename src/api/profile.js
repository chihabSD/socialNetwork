import axios from 'axios';
import { apiBase } from '../helpers/apiUrl';
import {names} from '../redux/actions/names';
// import {getHeader, header} from './setAuthHeader';

const {
  GET_PROFILE,
  RESEND_KEY, 
  SEARCH_USER,
  SEND_EMAIL,  
  VERIFY_TOKEN, 
  RESET_PASSWORD, 
  SEND_VERIFICATION_TOKEN } = names;
// handle account  api
export const accountApiHandler = async (name, details) => {
  switch (name) {
    case GET_PROFILE:
      return axios.get(`${apiBase}/user/profile/${details}`);

    case SEND_VERIFICATION_TOKEN:
      return axios.post(`${apiBase}/user/activateAccount`, details);
      case RESEND_KEY:
        return axios.post(`${apiBase}/user/resendToken`, details);

      case SEARCH_USER:
        return axios.post(`${apiBase}/user/searchUser`, details);

      case SEND_EMAIL:
        return axios.post(`${apiBase}/user/sendCode`, details);

        case VERIFY_TOKEN:
          return axios.post(`${apiBase}/user/verifyCode`, details);

        case RESET_PASSWORD:
          return axios.post(`${apiBase}/user/changePassword`, details);

    default:
      break;
  }
};