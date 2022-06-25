import React from 'react'
import CreatePost from '../../components/createPost';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from '../../components/home/right';
import Stories from '../../components/home/stories';
import { useRedux } from "../../hooks/useRedux";
import { _onLogout } from "../../redux/actions/auth/logout";
import './style.css'
const Home = () => {
  const {    account } = useRedux()
  return <div className='home'>
    <Header />
   <LeftHome user={account} />
   <div className='home_middle'>
    <Stories />
    <CreatePost user={account} />
   </div>
   <RightHome user={account} />
  </div>;
}
export default Home