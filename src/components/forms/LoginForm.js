import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/loginInput";
import { useState } from "react";
import { useRedux } from "../../hooks/useRedux";
import { _login } from "../../redux/actions/auth/login";
import { BeatLoader } from "react-spinners";
const loginInfos = {
  email: "",
  password: "",
};
export default function LoginForm({isRegister, toggleRegister}) {
  // hooks
  const { dispatch, error, loading , authenticated } = useRedux()
  const navigate = useNavigate()
  // state
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),

  });
  const handleLogin = () => {
    
dispatch(_login({...login}))
  setTimeout(() => {
if(authenticated){

  navigate('/')
}

  }, 1000)
  }
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
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
            onSubmit={() => {
              
                handleLogin()
            }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or phone number"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  bottom
                />
                <button type="submit" className="blue_btn">
                  Log In
                </button>
                {loading ? <>
                
                <br />
                <BeatLoader  color="#18762f" loading={loading} size={10}  />
                </>: null}
              </Form>
            )}
          </Formik>
          {error &&  <div className="error_text">{ error.error }</div> }
          <Link to="/forgot" className="forgot_password">
            Forgotten password?
          </Link>
          <div className="sign_splitter"></div>
          <button className="blue_btn open_signup" onClick={toggleRegister}>Create Account</button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}
