import setAuthHeader from "../../../helpers/setAuthHeader";
import { getUserProfile } from "../profile/getUserProfile";
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
      if (token === null || token === undefined) {
        return dispatch(setError(" You need to login "));
      }


       let decodedToken = jwt_decode(token);
  console.log("Decoded Token", decodedToken);
  let currentDate = new Date();

  // JWT exp is in seconds
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    // console.log("Token expired.");
    return dispatch(setError(" You need to login "));
  } else {

    setAuthHeader(token);
    dispatch(success(token));
    dispatch(getUserProfile());
  }
     
     

        // localStorage.getItem(names.TOKEN_NAME).then(token => {
        //       if (!token) {
        //         return null;
        //       }
        //       let decodedToken = jwt_decode(token);
        //       let currentDate = new Date();

        //       // JWT exp is in seconds
        //       if (decodedToken.exp * 1000 < currentDate.getTime()) {
        //         dispatch(_onLogout());
        //       } else {
        //         setAuthHeader(token);
        //         dispatch(success(token));
        //         dispatch(getUserProfile());
        //         // dispatch(_getFriends());
        //       }
        //     });
    } catch (e) {
      console.error(e);
    }
  };
};
