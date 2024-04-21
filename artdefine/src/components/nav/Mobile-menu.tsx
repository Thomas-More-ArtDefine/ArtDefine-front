import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pfp from "../../assets/images/mock-profile-pic.png";
import { ReactComponent as MessageIcon } from "../../assets/vectors/message-icon.svg";
import { useAuth } from "../../context/AuthContext";

const MobileMenu: React.FC<{
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ closeMenu }) => {
  const navigate = useNavigate();

  const {user} = useAuth();

  return (
    <div className="mobileNav">
      <div
        className="modalbackground"
        onClick={() => {
          closeMenu(false);
        }}
      ></div>
      <div className="mobileMenu">
        <nav className="mobileNavigation">
          <ul>
            <li className="navprofile">
              <Link
                to="/profile"
                onClick={() => {
                  closeMenu(false);
                }}
              >
                <div className="profile-block">
                  <img src={pfp} alt="profile picture" />
                  <div className="profile-info">
                    <div className="username">{user?.user_name}</div>
                    <div className="profile">Profile</div>
                  </div>
                </div>
              </Link>
              <div className="navmessage">
                <Link to="/messages">
                  <MessageIcon />
                </Link>
              </div>
            </li>
            <li className="navbutton">
              <button
                className="primary has-icon nav"
                onClick={() => {
                  navigate("/feed");
                  closeMenu(false);
                }}
              >
                <span>Discover </span>
                <i className="material-icons">travel_explore</i>
              </button>
            </li>
            <li className="navbutton">
              <button
                className="primary has-icon nav"
                onClick={() => {
                  navigate("/groups");
                  closeMenu(false);
                }}
              >
                <span>Groups </span>
                <i className="material-icons">groups</i>
              </button>
            </li>
            <li className="navbutton">
              <button
                className="primary has-icon nav"
                onClick={() => {
                  navigate("/listpage");
                  closeMenu(false);
                }}
              >
                <span>Upload </span>
                <i className="material-icons">upload</i>
              </button>
            </li>
            <li className="SearchBar">
              <input className="search" type="text" placeholder="Search..." />
              <i className="material-icons">search</i>
            </li>
            <div className="divider" />
            <li className="navbutton">
              <button
                className="secondary has-icon nav"
                onClick={() => {
                  navigate("/settings");
                  closeMenu(false);
                }}
              >
                <span>Settings </span>
                <i className="material-icons">settings</i>
              </button>
            </li>
            <li className="navbutton">
              <button
                className="secondary has-icon nav"
                onClick={() => {
                  navigate("/logout");
                  closeMenu(false);
                }}
              >
                <span>Logout </span>
                <i className="material-icons">logout</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
