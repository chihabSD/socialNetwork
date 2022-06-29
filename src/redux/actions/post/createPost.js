
import { postApiHandler } from "../../../api/post";

import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { clearSuccessMsg, setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";
export const _createPost = (details) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const { data } = await postApiHandler(names.CREATE_POST, details);
      setTimeout(() => {
        dispatch(clearLoading());
      }, 4000);
    } catch (e) {
        dispatch(clearSuccessMsg())
      dispatch(
        setError({ type: names.CREATE_POST, error: e.response.data.error })
      );
      setTimeout(() => {
        dispatch(clearLoading());
      }, 2000);
    }
  };
};
