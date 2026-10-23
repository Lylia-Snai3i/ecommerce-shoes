import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span>BILLY</span> SNEAKERS
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/kids">Kids</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Side */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-login">
            Login
          </Link>

          <Link to="/cart" className="navbar-cart" aria-label="Shopping cart">
            <ShoppingBagOutlinedIcon sx={{ fontSize: 24 }} />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;