import { authenticate } from "../../reducers/login";
import { names } from "../names";


export const success = (token, username) => {
  console.log('sucess', username);
  return dispatch => {

    localStorage.setItem(names.TOKEN_NAME, token)
    localStorage.setItem('username', username)
    dispatch(authenticate());
  };
};