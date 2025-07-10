import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-logo">AMSA</h2>
          <p>
            AMSA is a leading IT & SAP development company delivering cutting-edge solutions with professionalism and precision.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Technologies">Technologies</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: contact@amsa.com</p>
          <p>Phone: ‪+91 *********</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amsa Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
