import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoute from "./routes/LoggedInRoute";
import NotLoggedInRoute from "./routes/NotLoggedInRoute";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import { useRedux } from "./hooks/useRedux";
import CreatePostPopup from "./components/createPostPopup";
import { useEffect, useState } from "react";
import { _getAllPosts } from "./redux/actions/post/getAllPosts";

function App() {
  const {account, posts, loading, error, dispatch} = useRedux()
  const [showPopUp, setShowPop] = useState(false)
  const togglePopup = () => setShowPop(prev => !prev)


  return (
    <div>
      {showPopUp &&
      
       <CreatePostPopup user={account} togglePopup={togglePopup}/>
      }
      <Routes>
        <Route element={<LoggedInRoute />}>
          <Route path="/profile" element={<Profile togglePopup={togglePopup} />} exact />
          <Route path="/profile/:username" element={<Profile  togglePopup={togglePopup}/>} exact />
          <Route path="/" element={<Home togglePopup={togglePopup}/>} exact />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedInRoute />}>
          <Route path="/login" element={<Login />} exact />
          <Route path="/reset" element={<Reset />} exact />
  
          {/* <Route path="/activate/:token" element={<Activate />} exact /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
