import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-box1">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <Link to="/about" className="navlink">
          About
        </Link>
        <NavLink to="/work" className="navlink">
          Work
        </NavLink>
        <Link to="/writing" className="navlink">
          Writing
        </Link>
      </div>
      <div className="nav-box2">
        <a href="/contact" className="navlink">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
