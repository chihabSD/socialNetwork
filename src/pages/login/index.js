import React from "react";
import "./style.css";
import "./style-media.css";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        {/* Login form  */}
        <LoginForm />
        {/* Register form */}
          <RegisterForm />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
export default Login;
