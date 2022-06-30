import { postApiHandler } from "../../../api/post";
import { setActionMessage } from "../../reducers/action";

import { setError } from "../../reducers/errors";
import { clearLoading, setLoading } from "../../reducers/loading";
import { setPostCreated } from "../../reducers/post";
import { clearSuccessMsg, setSuccessMsg } from "../../reducers/sucess";
import { names } from "../names";

const createPostSuccess = () => {};

export const _createPost = (type, details) => {
    console.log(details);
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      if (type === null) {
     dispatch(handleCreatePost(details)
      )}

      if (type) {
        const { data } = await postApiHandler(names.UPLOAD_IMAGES, type);

       
        
        dispatch(handleCreatePost({ text: details.text, data }));
      }
    } catch (e) {
      dispatch(createPostError(e));
    }
  };
};
const handleCreatePost = (details) => {
  return async (dispatch) => {
    const { data } = await postApiHandler(names.CREATE_POST, details);
    dispatch(messageCreated());
    // dispatch(clearLoadingTimer(3000));
    setTimeout(() => {
        dispatch(clearLoading());
      }, 300);
  };
};

// when message is created
const messageCreated = () => {
  return (dispatch) => {
    dispatch(
      setActionMessage({
        type: "postCreated",
        message: "Post created successfully",
      })
    );
  };
};
// time to clear loading
const clearLoadingTimer = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(clearLoading());
    }, time);
  };
};

// handle create post erroor
const createPostError = (e) => {
  return (dispatch) => {
    dispatch(clearSuccessMsg());
    dispatch(
      setError({ type: names.CREATE_POST, error: e.response.data.error })
    );
    setTimeout(() => {
      dispatch(clearLoading());
    }, 2000);
  };
};
