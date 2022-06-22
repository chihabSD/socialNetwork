import React from "react";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import {
    ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from "../../svg";
import "./style.css";
const Header = () => {
  // hooks
  const { account } = useRedux()
  console.log(account);
  const color = "#65676b";
  return (
    <header>
      <div className="header_left">
        <Link className="header_logo" to="/">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1">
          <Search color={color} />
          <input
            className="hide_input"
            placeholder="Search Facebook"
            type="text"
          />
        </div>
      </div>
      <div className="header_middle">
        <Link to="/" className="middle_icon active">
          <HomeActive />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Friends color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Watch color={color} />
           <div className="middle_notification">
            9+
           </div>
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Market color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Gaming color={color} />
        </Link>
      </div>
      <div className="header_right">
        <Link className="profile_link hover1" to="/profile" >
        <img  src={account?.picture} alt=""/>
        <span >{account?.first_name}</span>
        </Link>
        <div className="circle_icon hover1">
            <Menu />
        </div>
        <div className="circle_icon hover1">
            <Messenger />
        </div>
        <div className="circle_icon hover1">
            <Notifications/>
            <div className="right_notification">5</div>
        </div>
        <div className="circle_icon hover1">
            <ArrowDown />
        </div>
       
      </div>
    </header>
  );
};
export default Header;
