import { accountApiHandler } from "../../../api/profile";
import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { accountVerified, getProfile, setPasswordChanged } from "../../reducers/profile";
import { setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";
import { getUserProfile } from "./getUserProfile";

export const _changePassword = (details) => {
    console.log(details);
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const {data:{msg}} = await accountApiHandler(names.RESET_PASSWORD, details);
      dispatch(setSuccessMsg(msg));
      dispatch(setPasswordChanged())
      dispatch(clearLoading());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
      dispatch(clearLoading());
    }
  };
};
