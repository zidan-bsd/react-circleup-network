import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

import "./components.sass";

import logo from "../assets/logo.png";
import Profile from "../assets/person/person-1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-search">
        <CiSearch />
        <input type="text" placeholder="search" />
      </div>
      <div className="header-action">
        <IoIosNotificationsOutline />
        <div className="header-action-profile">
          <img src={Profile} alt="profile" />
          <IoChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
