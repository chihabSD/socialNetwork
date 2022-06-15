import "./style.css";
import LoginForm from "../../components/forms/LoginForm";
import Footer from "../../components/footer";
import RegisterForm from "../../components/forms/RegisterForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}
