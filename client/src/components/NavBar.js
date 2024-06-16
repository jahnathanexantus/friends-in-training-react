import React from "react";
import Logo from "../assets/images/FITlogo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/users/logout", {
        method: "POST",
        headers: { "content-Type": "application/json" },
      });
      if (response.ok) {
        window.location.href = "/";
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="nav">
      <div className="logo-container">
        <img id="logo" src={Logo} alt="logo" />
        <h4 className="name">Friends in training</h4>
      </div>
      <div className="nav-container">
        <Link to="/home">
          <button className="button">Home</button>
        </Link>
        <Link to="/profile">
          <button className="button">Profile</button>
        </Link>
        <Link to="/matchprofiles">
          <button className="button">Matches</button>
        </Link>
        <Link to="/uploadpic">
          <button className="button">Pictures</button>
        </Link>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
