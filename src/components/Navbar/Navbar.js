import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiSun,
  FiMoon,
  FiChevronDown,
  FiGithub,
  FiMenu,
} from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode, onOpenSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            Code.<span className="logo-highlight">G</span>
          </Link>

          <div className="nav-links-container">
            <button onClick={onOpenSidebar} className="mobile-menu-btn">
              <FiMenu />
            </button>

            <div className="nav-link-wrapper">
              <button
                className="dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("components");
                }}
              >
                Components
                <FiChevronDown
                  className={`dropdown-icon ${
                    activeDropdown === "components" ? "open" : ""
                  }`}
                />
              </button>
              {activeDropdown === "components" && (
                <div className="dropdown-menu">
                  <Link to="/components/buttons">Buttons</Link>
                  <Link to="/components/cards">Cards</Link>
                  <Link to="/components/forms">Forms</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <div className="icon-wrapper">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <a
              href="https://github.com/AmanBisht001/Ui-Library-C_G"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;