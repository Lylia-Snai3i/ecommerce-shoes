import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Online Shopping */}
        <div className="footer-column">
          <h3>Online Shopping</h3>

          <Link to="/men">Men Sneakers</Link>
          <Link to="/women">Women Sneakers</Link>
          <Link to="/kids">Kids Sneakers</Link>
          <Link to="/socks">Socks</Link>
        </div>

        {/* Customer Policies */}
        <div className="footer-column">
          <h3>Customer Policies</h3>

          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/returns">Returns & Refunds</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>support@billysneakers.com</p>
          <p>Algeria</p>
          <p>Customer Support</p>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <h3 className="footer-social-title">Get Social</h3>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <InstagramIcon />
            </a>

            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FacebookIcon />
            </a>

            <a href="https://www.pinterest.com/" aria-label="Pinterest">
              <PinterestIcon />
            </a>

            <a href="https://www.youtube.com/" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Billy Sneakers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;