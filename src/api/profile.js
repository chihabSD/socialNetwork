import axios from 'axios';
import { apiBase } from '../helpers/apiUrl';
import {names} from '../redux/actions/names';
// import {getHeader, header} from './setAuthHeader';

const {
  GET_PROFILE,
} = names;

// handle account  api
export const accountApiHandler = async (name, details) => {
  switch (name) {
    case GET_PROFILE:
      return axios.get(`${apiBase}/user/profile`);

    default:
      break;
  }
};