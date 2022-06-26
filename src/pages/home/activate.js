import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import { useRedux } from "../../hooks/useRedux";
import { _activateAccount } from "../../redux/actions/profile/activateAccount";
import ActivateForm from "./ActivateForm";
import "./style.css";
const Activate = () => {
  const { account, loading, successMsg, error, dispatch } = useRedux();
  const { token } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (account.verified) {
      verified();
    } else {
      NotVerified();
    }
    // handleActivation()
  }, [account.verified]);
  const verified = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  const NotVerified = () => {
    dispatch(_activateAccount({ token }));
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  
  return (
    <div className="home">
      {successMsg && (
        <ActivateForm
          type="success"
          header="Account verification succeded."
          text={successMsg}
          loading={loading}
        />
      )}
      {error && (
        <ActivateForm
          type="error"
          header="Account verification failed."
          text={error}
          loading={loading}
        />
      )}
      <Header />
      <LeftHome user={account} />
      <div className="home_middle">
        <Stories />
        <CreatePost user={account} />
      </div>
      <RightHome user={account} />
    </div>
  );
};

export default Activate;
