import React from "react";
import './style.css'
import { useRedux } from "../../hooks/useRedux";
import { _nativeLogin } from "../../redux/actions/auth/login";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const { authenticated } = useRedux();
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="'../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you to connect and share with the people in your
              life.
            </span>
          </div>
          {/* LOGIN 2 */}
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik>
                {(formik) => (
                  <form>
                    <input type="text" />
                    <input type="text" />
                    <button className="blue_btn" type="submit"> Log in</button>
                  </form>
                )}
              </Formik>
              <Link className="forgot_password" to="/forgot"> Forgotten your password </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup"> Create Account </button>
            </div>

            <Link to="/" className="sign_extra">
              <b> Create a page</b>
              for a celebrtiy, brand or business.
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
};

export default Login;
