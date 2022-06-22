import "./style.css";
import LoginForm from "../../components/forms/LoginForm";
import Footer from "../../components/footer";
import RegisterForm from "../../components/forms/RegisterForm";
import { useState } from "react";
import { useRedux } from "../../hooks/useRedux";
import { clearSuccessMsg } from "../../redux/reducers/sucess";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const { dispatch,   successMsg } = useRedux()

  const toggleRegister = () => {
    if(successMsg ){
      dispatch(clearSuccessMsg())
    }
    setIsRegister(!isRegister)
  }
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm isRegister={isRegister} toggleRegister={toggleRegister}/>
     {isRegister &&    <RegisterForm isRegister={isRegister} toggleRegister={toggleRegister} /> }
        <Footer />
      </div>
    </div>
  );
}
