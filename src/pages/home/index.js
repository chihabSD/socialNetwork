import React, { useEffect, useState, useRef } from "react";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import SendVerification from "../../components/home/sendVerification";
import Stories from "../../components/home/stories";
import Post from "../../components/post";
import { useRedux } from "../../hooks/useRedux";
import { _onLogout } from "../../redux/actions/auth/logout";
import { _getAllPosts } from "../../redux/actions/post/getAllPosts";
import "./style.css";
const Home = ({togglePopup}) => {
  const { account, dispatch, posts, loading  } = useRedux();


  const middle = useRef(null);
  const [height, setHeight] = useState();
  useEffect(() => {
    // setHeight(middle.current.clientHeight);
  }, []);


  useEffect(() => {

    dispatch(_getAllPosts())
    }, [])
  return (
          <div className="home" style={{ height: `${height + 150}px` }}>
      <Header page="home"/>
      <LeftHome user={account} />
      <div className="home_middle">
        
        <Stories />
        {!account.verified && <SendVerification user={account} />}
        <CreatePost user={account} togglePopup={togglePopup}/>
        <div className="posts">
          {/* {loading ? <div> Loading </div> :
          
          posts.map((post) => (
            <Post key={post._id} post={post} user={account}/>
          ))
          } */}
        </div>
      </div>
      <RightHome user={account} />
    </div>
  );
};
export default Home;
