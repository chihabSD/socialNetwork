import { authenticate } from "../../reducers/login";


export const success = token => {
  return dispatch => {

    dispatch(authenticate());
  };
};