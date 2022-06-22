
import { authApiHandler } from "../../../api/auth";

import setAuthHeader from  "../../../api/setAuthHeader";
import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { clearSuccessMsg, setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";
import { getUserProfile } from "../profile/getUserProfile";
import { success } from "./success";
// import { success } from "./success";
export const _login = (details) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const { data } = await authApiHandler(names.LOGIN, details);
      setAuthHeader(data.token)
      dispatch(success(data.token))
      dispatch(getUserProfile())
      setTimeout(() => {
        dispatch(clearLoading());
      }, 4000);
    } catch (e) {
        dispatch(clearSuccessMsg())
      dispatch(
        setError({ type: names.LOGIN, error: e.response.data.error })
      );
      setTimeout(() => {
        dispatch(clearLoading());
      }, 2000);
    }
  };
};
