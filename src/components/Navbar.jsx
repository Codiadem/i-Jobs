import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/images/Logo-home.png";
import "/src/style/nav.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div
          className="hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="burger"></span>
          <span className="burger"></span>
          <span className="burger"></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/choose">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
