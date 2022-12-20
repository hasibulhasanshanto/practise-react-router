import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/hire-us">Hire Us</Link>
    </div>
  );
};

export default Header;
