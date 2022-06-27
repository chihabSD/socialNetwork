import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import ChangePassword from "./ChangePassword";
import Footer from "../../components/footer";
import { useRedux } from "../../hooks/useRedux";
import { clearError } from "../../redux/reducers/errors";
// import { clearUserInfo } from "../../redux/reducers/profile";
import { _searchUser } from "../../redux/actions/profile/searchUser";
import { _sendEmail } from "../../redux/actions/profile/sendEmail";
export default function Reset() {
  const { dispatch, account, error, authenticated, loading, userInfo, successMsg } =
    useRedux();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");

  const handleUserSearch = (user) => {
    dispatch(_searchUser({ email: user }));
  };
  const stepThree = () => {
    console.log(" step 3" );
    dispatch(_sendEmail({email:userInfo.email}));
    setVisible(2);
  };
  const isResetEmail = () => {
    if (userInfo._id) {
      setVisible(1);
      // dispatch(clearUserInfo())
    }
  };
  const handleCode = (d) => {
    console.log("send Code");
    console.log(d);
    // dispatch(_sendEmail(email))
  };
  const logout = () => {};

  useEffect(() => {
    dispatch(clearError());
  }, []);

  useEffect(() => {
    isResetEmail();
  }, [userInfo]);

  return (
    <div className="reset">
      <div className="reset_header">
        <img src="../../../icons/facebook.svg" alt="" />
        {authenticated ? (
          <div className="right_reset">
            <Link to="/profile">
              <img src={account.picture} alt="" />
            </Link>
            <button
              className="blue_btn"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="blue_btn">Login</button>
          </Link>
        )}
      </div>

      <div className="reset_wrap">
        {visible === 0 && (
          <SearchAccount
            loading={loading}
            email={email}
            setEmail={setEmail}
            error={error}
            handleUserSearch={handleUserSearch}
          />
        )}
        {visible === 1 && (
          <SendEmail account={userInfo} user={userInfo} stepThree={stepThree} />
        )}
        {visible === 2 && (
          <CodeVerification
            user={account}
            code={code}
            handleCode={handleCode}
            setCode={setCode}
            error={error}
            successMsg={successMsg}
          />
        )}
        {visible === 3 && (
          <ChangePassword
            password={password}
            conf_password={conf_password}
            setConf_password={setConf_password}
            setPassword={setPassword}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
