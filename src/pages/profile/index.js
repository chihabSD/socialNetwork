import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import Header from "../../components/header";
import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import ProfileMenu from "./ProfileMenu";
import PplYouMayKnow from "./PplYouMayKnow";
import CreatePost from "../../components/createPost";
import GridPosts from "./GridPosts";
import Post from "../../components/post";
import { useRedux } from "../../hooks/useRedux";
import { _getUserProfile } from "../../redux/actions/profile/getUserProfile";
import { clearActionMessage } from "../../redux/reducers/action";
export default function Profile({ togglePopup }) {
  const navigate = useNavigate()
  const { username } = useParams();
  const {account, action, posts, loading, currentUserPosts,   dispatch} = useRedux();
  

  const userName = username === undefined ? account.username : username
  useEffect(() => {

    // if(userName === account.username){
    dispatch(_getUserProfile(userName))
    // }

}, [userName])
  
useEffect(() => {

  if(action.message === 'user not found'){
    navigate('/profile')
    dispatch(clearActionMessage())
  }
},[action])
  const visitor = userName === account.username ? false :true 
  console.log(visitor);
  return (
    <div className="profile">
      <Header page="profile" />
      <div className="profile_top">
        <div className="profile_container">
          <Cover cover={account.cover} visitor={visitor} />
          <ProfielPictureInfos profile={account} visitor={visitor} />
          <ProfileMenu />
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
            <div className="profile_grid">
              <div className="profile_left"></div>
              <div className="profile_right">
                  {/* <CreatePost user={account} profile togglePopup={() =>togglePopup()} /> */}
                {!visitor && (
                  // <CreatePost user={account} profile togg} />
                  <CreatePost user={account} profile togglePopup={() =>togglePopup()} />
                )}
                <GridPosts />
                <div className="posts">
                  {currentUserPosts && currentUserPosts.length ? (
                    currentUserPosts.map((post) => (
                      <Post post={post} user={account} key={post._id} />
                    ))
                  ) : (
                    <div className="no_posts">No posts available</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
