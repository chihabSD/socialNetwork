import setAuthHeader from "../../../helpers/setAuthHeader";
import { _getUserProfile } from "../profile/getUserProfile";
// import { _logUserOut } from "./logout";
import { success } from "./success";
import { names } from "../names";
import { setError } from "../../reducers/errors";
import jwt_decode from "jwt-decode";
import { _onLogout } from "./logout";
export const checkToken = () => {
  return (dispatch) => {
    try {
      const token = localStorage.getItem(names.TOKEN_NAME);
      const username = localStorage.getItem('username');
      console.log('User name from lS', username);
      if (token === null || token === undefined) {
        return dispatch(setError(" You need to login "));
      }

      let decodedToken = jwt_decode(token);
      let currentDate = new Date();

      // JWT exp is in seconds
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        // console.log("Token expired.");
        return dispatch(setError(" You need to login "));
      } else {
        setAuthHeader(token);
        dispatch(success(token, username));
        dispatch(_getUserProfile(username));
      }
    } catch (e) {
      console.error(e);
    }
  };
};
