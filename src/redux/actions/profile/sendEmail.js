import { accountApiHandler } from "../../../api/profile";
import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { accountVerified, getProfile } from "../../reducers/profile";
import { setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";
import { getUserProfile } from "./getUserProfile";

export const _sendEmail = (email) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const {data:{msg}} = await accountApiHandler(names.SEND_EMAIL, email);
      dispatch(setSuccessMsg(msg));
      dispatch(clearLoading());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
      dispatch(clearLoading());
    }
  };
};
