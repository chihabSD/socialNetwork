import React from "react";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import SendVerification from "../../components/home/sendVerification";
import Stories from "../../components/home/stories";
import { useRedux } from "../../hooks/useRedux";
import { _onLogout } from "../../redux/actions/auth/logout";
import "./style.css";
const Home = ({togglePopup}) => {
  const { account } = useRedux();
  return (
    <div className="home">
      <Header />
      <LeftHome user={account} />
      <div className="home_middle">
        <Stories />
        {!account.verified && <SendVerification user={account} />}
        <CreatePost user={account} togglePopup={togglePopup}/>
      </div>
      <RightHome user={account} />
    </div>
  );
};
export default Home;
