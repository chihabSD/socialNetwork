import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../../hooks/clickOutside";

export default function ErrorPopup() {
  // const dispatch = useDispatch();
  const errorPopup = useRef(null);
  // const { error } = useSelector((state) => ({ ...state }));
  // useClickOutside(errorPopup, () => {});
  return (
    <div className="blur" id="errorPopup">
      <div className="postBox" ref={errorPopup} id="erroPost1">
        <div className="box_header">
          <div className="small_circle">
            <i className="exit_icon"></i>
          </div>
          {/* <span>{error.header}</span> */}
          <span>Errro</span>
        </div>
        {/* <div className="error_body">{error.error}</div> */}
        <div className="error_body">This not working</div>
      </div>
    </div>
  );
}
