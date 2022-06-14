import { Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from '../inputs/loginInput'
import * as Yup from  'yup'
const LoginForm = () => {
    const loginInfo = {
        email: "",
        password: "",
      };
      const [inputs, setInputs] = useState(loginInfo);
      const { email, password } = inputs;
    
      // Handle login
      const handleLogin = (e) => {
      const {name, value} = e.target
        setInputs({...inputs, [name]:value})
      };
    // Validation schema
    const loginValidation = Yup.object({
      email: Yup.string().required(" Email address is required").email(' Must be a valid email.').max(100), 
      password:Yup.string().required(' Password is required')
    })
  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/facebook.svg" alt="" />
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={loginValidation}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or phone number"
                  onChange={handleLogin}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLogin}
                  bottom
                />
                <button type="submit" className="blue_btn">
                  {" "}
                  Login{" "}
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Forgotten password ?
          </Link>
          <div className="sign_splitter"></div>
          <button className="blue_btn open_signup">Create Account</button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}

export default LoginForm