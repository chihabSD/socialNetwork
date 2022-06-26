import { authenticate } from "../../reducers/login";
import { names } from "../names";


export const success = token => {
  return dispatch => {

    localStorage.setItem(names.TOKEN_NAME, token)
    dispatch(authenticate());
  };
};