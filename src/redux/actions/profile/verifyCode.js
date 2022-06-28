import { accountApiHandler } from "../../../api/profile";
import { clearError, setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { accountVerified, getProfile, setCodeVerified } from "../../reducers/profile";
import { setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";
import { getUserProfile } from "./getUserProfile";

export const  _verifyCode = (details) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const data = await accountApiHandler(names.VERIFY_TOKEN, details);
      dispatch(setCodeVerified());
      dispatch(clearLoading());
      dispatch(clearError());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
      dispatch(clearLoading());
    }
  };
};
