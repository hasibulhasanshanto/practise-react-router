import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/friends"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Friends
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/hire-us"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Hire Us
        </NavLink>
      </nav>
      <p>Common Header</p>
    </div>
  );
};

export default Header;
