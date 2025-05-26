import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  const navigate = useNavigate();

  const { token, setToken } = useContext(AppContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 500); // 500ms delay
  };

  const handleLogout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </div>
        <ul className="pages">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/">
            <li>Contact us</li>
          </NavLink>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
        </ul>
        <div
          className="profile"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {token ? (
            <div className="profile-hover-wrapper">
              <div className="profile-section">
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
                  alt=""
                />
                <FaAngleDown className="down" />
              </div>
              <div className="p-card">
                <div className="p-menu">
                  <label htmlFor="my-profile">
                    <p>
                      <CgProfile />
                    </p>
                    <p onClick={() => navigate("my-profile")} id="my-profile">
                      My profile
                    </p>
                  </label>
                  <label htmlFor="">
                    <p>
                      <MdLogout />
                    </p>
                    <p onClick={handleLogout}>Logout</p>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <button className="btn" onClick={() => navigate("login")}>
              Create Acoount
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
