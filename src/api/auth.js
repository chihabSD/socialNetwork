import axios from 'axios';
import {ENDPOINT} from '../config/serverUrl';
import {names} from '../redux/actions/names';
import {getHeader} from './header';
const auth = `${ENDPOINT}/user/account`;

const {LOGIN, SOCIAL_LOGIN_GOOGLE, LOGOUT, LEGACY_LOGIN, REGISTER} = names;

// handle auth
export const authApiHandler = async (name, details) => {
  console.log(details, name);
  const header = await getHeader();
  switch (name) {
    case LOGIN:
      return axios.post(`${auth}/login`, details, header);
    case REGISTER:
      return axios.post(`${auth}/register`, details, header);

    case LOGOUT:
      return axios.post(`${auth}/logout`, details, header);
    default:
      break;
  }
};