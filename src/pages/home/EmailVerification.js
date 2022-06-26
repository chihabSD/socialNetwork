import React from "react";
import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
 
      <div className="emailActivation">
        <h1> Great, now verify your email </h1>
        <img src={"/icons/email.png"} />
        <div className="emailActivation_bottom">
          <p> Check your inbox at</p>
          <br />
          <h3>{`<adamchihab@hotmail.com>`}</h3>
          <p>
            and click the verification link inside to complete your
            registration.
          </p>
          <p>This link will expire shortly, so verify soon !</p>
          <h3> Don't see an email ? </h3> Chekc yoru spam folder.
          <h3> Link expired ?</h3>{" "}
          <Link to="/">Resend verification email </Link>.
        </div>
      </div>
  );
};

export default EmailVerification;
