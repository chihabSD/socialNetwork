import { authApiHandler } from "../../../api/auth";
import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { clearSuccessMsg, setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";
import { success } from "./success";
export const _register = (details) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const { data } = await authApiHandler(names.REGISTER, details);
    dispatch(setSuccessMsg(data.msg))
      
      setTimeout(() => {
        dispatch(clearLoading());
      }, 2000);
    } catch (e) {
        dispatch(clearSuccessMsg())
      dispatch(
        setError({ type: names.REGISTER, error: e.response.data.error })
      );
      setTimeout(() => {
        dispatch(clearLoading());
      }, 2000);
    }
  };
};
