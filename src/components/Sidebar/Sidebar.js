import React, { useState, useEffect } from "react"; // Added useEffect here
import { Link } from "react-router-dom";
import {
  FiBox,
  FiLayout,
  FiChevronDown,
  FiGrid,
  FiCode,
  FiX,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, darkMode, toggleDarkMode }) => {
  const menuItems = [
    {
      title: "Components",
      icon: <FiBox size={18} />,
      submenu: [
        { title: "Buttons", href: "/components/buttons" },
        { title: "Cards", href: "/components/cards" },
        { title: "Forms", href: "/components/forms" },
      ],
    },
    {
      title: "Layout",
      icon: <FiLayout size={18} />,
      submenu: [
        { title: "Grid System", href: "/layout/grid" },
        { title: "Spacing", href: "/layout/spacing" },
      ],
    },
    {
      title: "Utilities",
      icon: <FiGrid size={18} />,
      submenu: [
        { title: "Text", href: "/utilities/text" },
        { title: "Colors", href: "/utilities/colors" },
      ],
    },
    // {
    //   title: "Documentation",
    //   icon: <FiCode size={18} />,
    //   href: "/doc",
    // },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // ... rest of your component remains the same
  return (
    <div
      className={`sidebar-overlay ${isOpen ? "show" : ""}`}
      onClick={onClose}
    >
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <h3>GridCraft UI</h3>
          <button onClick={onClose} className="close-btn">
            <FiX />
          </button>
        </div>

        <nav className="sidebar-content">
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                submenu={item.submenu}
                href={item.href}
                onClose={onClose}
              />
            ))}
          </ul>

          <div className="sidebar-footer">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

const SidebarItem = ({ title, icon, submenu, href, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (href) {
    return (
      <li className="sidebar-item">
        <Link to={href} className="sidebar-link" onClick={onClose}>
          {icon}
          <span>{title}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="sidebar-item">
      <button
        className="sidebar-link"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {icon}
        <span>{title}</span>
        {submenu && (
          <FiChevronDown
            className={`submenu-icon ${isExpanded ? "expanded" : ""}`}
          />
        )}
      </button>
      {submenu && (
        <ul className={`sidebar-submenu ${isExpanded ? "expanded" : ""}`}>
          {submenu.map((item) => (
            <li key={item.href}>
              <Link to={item.href} onClick={onClose}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
