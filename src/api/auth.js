import axios from 'axios';
import { apiBase, localhost } from '../helpers/apiUrl';
// import {ENDPOINT} from '../config/serverUrl';
import {names} from '../redux/actions/names';
// import {getHeader} from './header';
// const auth = `${ENDPOINT}/user/account`;
const {LOGIN, REGISTER} = names;

// handle auth
export const authApiHandler = async (name, details) => {
  switch (name) {
    case LOGIN:
      return axios.post(`${apiBase}/user/login`, details);
    case REGISTER:
      return axios.post(`${apiBase}/user/register`, details );

    default:
      break;
  }
};