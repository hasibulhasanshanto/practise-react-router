import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/hire-us">Hire Us</Link>
      </nav>
      <p>Common Header</p>
    </div>
  );
};

export default Header;
