import React from 'react';
import Logo from "../assets/images/FITlogo.png";
import {Link, Route, Routes} from 'react-router-dom';
import ProfileItem from './ProfileItems';
import profile from '../pages/profile/Profile';
import Navbar from "./navbar.css"

const NavBar = () => {
  return (
    <div className='nav'>
        <div className='logo-container'>
        <img id="logo"src={Logo} alt="logo" />
        <h4 className="name">Friends in training</h4>
        </div>
      <div className='nav-container'>
        <Link to='/profile'>
        <button className='button'>Profile</button>
        </Link>
        <Link to='/profileItem'>
        <button className='button'>Matches</button>
        </Link>
        <button className='button'>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
