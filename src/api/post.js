import axios from "axios";
import { apiBase, localhost } from "../helpers/apiUrl";

import { names } from "../redux/actions/names";

const { CREATE_POST } = names;

// handle auth
export const postApiHandler = async (name, details) => {
  switch (name) {
    case CREATE_POST:
      return axios.post(`${apiBase}/user/post/createPost`, details);
    default:
      break;
  }
};
