import "./components.sass";

import profile from "../assets/person/person-1.png";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineExplore, MdOutlineTrendingUp } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-profile">
        <img src={profile} alt="profile" />
        <div className="navbar-profile-desc">
          <p>Zidan Haryanto</p>
          <p>@zidan123</p>
        </div>
      </div>
      <div className="navbar-navigation">
        <div className="navbar-navigation-box active">
          <LuLayoutDashboard />
          <p>Feed</p>
        </div>
        <div className="navbar-navigation-box">
          <LiaUserFriendsSolid />
          <p>Friends</p>
        </div>
        <div className="navbar-navigation-box">
          <MdOutlineExplore />
          <p>Explore</p>
        </div>
        <div className="navbar-navigation-box">
          <FaRegBookmark />
          <p>Bookmark</p>
        </div>
        <div className="navbar-navigation-box">
          <PiTelevisionSimpleBold />
          <p>CircleUp TV</p>
        </div>
        <div className="navbar-navigation-box">
          <MdOutlineTrendingUp />
          <p>Trending</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
