import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close menu when an item is clicked
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">My Portfolio</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                 About Me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#resume" onClick={closeMenu}>
                My Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
