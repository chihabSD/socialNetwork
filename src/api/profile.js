import axios from 'axios';
import { apiBase } from '../helpers/apiUrl';
import {names} from '../redux/actions/names';
// import {getHeader, header} from './setAuthHeader';

const {
  GET_PROFILE,
  RESEND_KEY, 
  SEND_VERIFICATION_TOKEN } = names;
// handle account  api
export const accountApiHandler = async (name, details) => {
  switch (name) {
    case GET_PROFILE:
      return axios.get(`${apiBase}/user/profile`);

    case SEND_VERIFICATION_TOKEN:
      return axios.post(`${apiBase}/user/activateAccount`, details);
      case RESEND_KEY:
        return axios.post(`${apiBase}/user/resendToken`, details);
    default:
      break;
  }
};