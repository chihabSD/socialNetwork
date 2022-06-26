import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoute from "./routes/LoggedInRoute";
import NotLoggedInRoute from "./routes/NotLoggedInRoute";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoute />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
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
