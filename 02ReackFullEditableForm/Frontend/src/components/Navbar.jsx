import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { profile } from "../pages/profile";

export const Navbar = () => {
  const [profiles, setProfiles] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt="" />
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
        <div className="profile">
          {profiles ? (
            <>
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
                alt=""
              />
              <p>profile</p>
            </>
          ):
          <button className="btn" onClick={() => navigate("login") }>Create Acoount</button>
          }
          
        </div>
      </nav>
    </div>
  );
};
