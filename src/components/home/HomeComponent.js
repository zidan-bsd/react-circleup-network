import { FaPlus } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { CiBookmark } from "react-icons/ci";
import { IoChatbubbleOutline, IoShareSocialOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";

import dataUser from "../../data/User";

import "./HomeComponent.sass";

import Me from "../../assets/person/person-1.png";
import post1 from "../../assets/post/post-a1.png";
import post2 from "../../assets/post/post-a2.png";
import post3 from "../../assets/post/post-a3.png";
import najwa from "../../assets/person/person-4.png";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const HomeComponent = () => {
  const filteredData = dataUser.slice(1);
  const lastTwoItems = dataUser.slice(-2);
  return (
    <div className="home_component">
      <div className="home_component-story">
        <div className="home_component-story-box">
          <FaPlus />
          <img src={Me} alt="" />
          <p>Zidan</p>
        </div>
        {filteredData.map((item, index) => (
          <div key={index} className="home_component-story-box">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
        {lastTwoItems.map((item, index) => (
          <div key={index} className="home_component-story-box">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="home_component-post">
        <p className="home_component-post-header">Post Something</p>
        <div className="home_component-post-box">
          <img src={Me} alt="Me" />
          <input type="text" placeholder="What's on Your mind?" />
          <GrAttachment />
        </div>
      </div>
      <div className="home_component-status">
        <div className="home_component-status-post">
          <div className="home_component-status-post-header">
            <div className="home_component-status-post-header-left">
              <img src={najwa} alt="" />
              <div>
                <p>Najwa Haryanti</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="home_component-status-post-header-right">
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          <div className="home_component-status-post-image">
            <img src={post1} alt="" />
            <div>
              <img src={post2} alt="" />
              <img src={post3} alt="" />
            </div>
          </div>
          <div className="home_component-status-post-action">
            <div className="home_component-status-post-action-left">
              <BsHeart />
              <IoChatbubbleOutline />
              <IoShareSocialOutline />
            </div>
            <CiBookmark />
          </div>
          <div className="home_component-status-post-comment">
            <p className="home_component-status-post-comment-like">634 Likes</p>
            <p className="home_component-status-post-comment-author">
              Zidan
              <span className="home_component-status-post-comment-author-comment">
                Wowww, Where is that? a very beautiful view, I really want to
                see it in person
              </span>
            </p>
            <p className="home_component-status-post-comment-total_comment">
              View all 375 comments
            </p>
          </div>
        </div>
        <div className="home_component-status-post">
          <div className="home_component-status-post-header">
            <div className="home_component-status-post-header-left">
              <img src={najwa} alt="" />
              <div>
                <p>Najwa Haryanti</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="home_component-status-post-header-right">
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          <div className="home_component-status-post-image">
            <img src={post1} alt="" />
            <div>
              <img src={post2} alt="" />
              <img src={post3} alt="" />
            </div>
          </div>
          <div className="home_component-status-post-action">
            <div className="home_component-status-post-action-left">
              <BsHeart />
              <IoChatbubbleOutline />
              <IoShareSocialOutline />
            </div>
            <CiBookmark />
          </div>
          <div className="home_component-status-post-comment">
            <p className="home_component-status-post-comment-like">634 Likes</p>
            <p className="home_component-status-post-comment-author">
              Zidan
              <span className="home_component-status-post-comment-author-comment">
                Wowww, Where is that? a very beautiful view, I really want to
                see it in person
              </span>
            </p>
            <p className="home_component-status-post-comment-total_comment">
              View all 375 comments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
