import axios from "axios";
import { apiBase, localhost } from "../helpers/apiUrl";

import { names } from "../redux/actions/names";

const { CREATE_POST, UPLOAD_IMAGES, GET_ALL_POSTS } = names;

// handle auth
export const postApiHandler = async (name, details) => {
  switch (name) {
    case UPLOAD_IMAGES:
      return axios.post(`${apiBase}/user/upload/uploadImages`, details, {
        headers: { "content-type": "multipart/form" },
      });
    case CREATE_POST:
      return axios.post(`${apiBase}/user/post/createPost`, details);
    case GET_ALL_POSTS:
      return axios.get(`${apiBase}/user/post/getAllPosts` );
    default:
      break;
  }
};
