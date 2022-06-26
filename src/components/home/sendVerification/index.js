import React from "react";

import "./style.css";
import { useRedux } from "../../../hooks/useRedux";
import { _resendVerificationToken } from "../../../redux/actions/profile/resendToken";
export default function SendVerification({ user }) {
  const { dispatch, error, successMsg } = useRedux();
  return (
    <div className="send_verification">
      <span>
        Your account is not verified,verify your account before it gets deleted
        after a month from creating.
      </span>
      <a
        onClick={() => {
          dispatch(_resendVerificationToken({ user }));
        }}
      >
        click here to resend verification link
      </a>
      {successMsg && <div className="success_text">{successMsg}</div>}
      {error && <div className="error_text">{error}</div>}
      
    </div>
  );
}
