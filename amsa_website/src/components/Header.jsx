import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          AMSA
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/career" className="nav-link">Career</Link>
          <Link to="/blogs" className="nav-link">Blogs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/Technologies" className="nav-link">Technologies</Link>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
