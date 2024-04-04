import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/images/Logo-home.png";
import "/src/style/nav.css";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {/* <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <Hamburger />
        <ul>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
