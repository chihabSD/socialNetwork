import React from 'react'
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from '../../components/home/right';
import { useRedux } from "../../hooks/useRedux";
import { _onLogout } from "../../redux/actions/auth/logout";

const Home = () => {
  const {    account } = useRedux()
  return <div>
    <Header />
   <LeftHome user={account} />
   <RightHome  />
  </div>;
}
export default Home