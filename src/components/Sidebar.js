import { FaRegPenToSquare } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./components.sass";
import dataUser from "../data/User";

const Sidebar = () => {
  const filteredData = dataUser.slice(1);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p>Messages</p>
        <FaRegPenToSquare />
      </div>
      <div className="sidebar-search">
        <CiSearch />
        <input type="text" placeholder="Search messages" />
      </div>
      <div className="sidebar-filter">
        <p className="active">All</p>
        <p>Unread</p>
        <p>Requests(2)</p>
      </div>
      <div className="sidebar-message">
        {filteredData.map((item, index) => (
          <div key={index} className="sidebar-message-box">
            <img src={item.img} alt="profile" />
            <div className="sidebar-message-box-desc">
              <p className="sidebar-message-box-desc-name">{item.name}</p>
              <p className="sidebar-message-box-desc-last_seen">
                {item.lastseen}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
