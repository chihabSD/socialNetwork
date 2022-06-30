import React from "react";
import { useRedux } from "../../hooks/useRedux";
import { clearError } from "../../redux/reducers/errors";

export default function PostError({ error}) {
  const {dispatch} = useRedux()
  return (
    <div className="postError">
      <div className="postError_error">{error}</div>
      <button
        className="blue_btn"
        onClick={() => {
        dispatch(clearError())
        }}
      >
        Try again
      </button>
    </div>
  );
}
