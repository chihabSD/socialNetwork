
import { success } from "./success";

export const _nativeLogin = (details) => {
  return async (dispatch) => {
    try {
  
      dispatch(success(' the token '));
      console.log(details);
    } catch (e) {
    }
  };
};

