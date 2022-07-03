import { accountApiHandler } from "../../../api/profile";
import { setActionMessage } from "../../reducers/action";
import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { getProfile, setCurrentUserPosts } from "../../reducers/profile";
import { names } from "../names";

export const _getUserProfile = (username) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const { data } = await accountApiHandler(names.GET_PROFILE, username);
      console.log("get Profile is called  ", data);
      if (data.noProfile === true) {
        console.log('user not found');

        dispatch(
          setActionMessage({
            type: "UserNotFound",
            message: "user not found",
          })
        );
        dispatch(clearLoading());
        return;
      }
      dispatch(getProfile(data.user));
      dispatch(setCurrentUserPosts(data.posts));
      dispatch(clearLoading());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
    }
  };
};
