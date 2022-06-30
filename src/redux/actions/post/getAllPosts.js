import { postApiHandler } from '../../../api/post';
import {setError} from '../../reducers/errors';
import {clearLoading, setLoading } from '../../reducers/loading';
import { getAllPosts } from '../../reducers/post';
import {names} from '../names';

export const _getAllPosts = () => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const {data} = await postApiHandler(names.GET_ALL_POSTS, null);
      dispatch(getAllPosts(data.posts));
      dispatch(clearLoading());
    } catch (e) {
      console.log(e);
      dispatch(setError(e.response.data.error));
    }
  };
};