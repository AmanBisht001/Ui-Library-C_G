import React from "react";
import { FiGithub, FiArrowRight } from "react-icons/fi";
import "./HomePage.css";

const HomePage = ({ onOpenSidebar }) => {
  return (
    <div className="home-container">
      <div className="gradient-background"></div>

      <header className="hero-section">
        <h1 className="hero-title">
          <span className="title-line">Modern & Minimal</span>
          <span className="title-line highlight">React UI Library</span>
        </h1>
        <p className="hero-description">
          Beautifully crafted components that are easy to use, customize and
          integrate into your React applications. Responsive, accessible and
          consistent across all devices.
        </p>

        <div className="cta-buttons">
          <button onClick={onOpenSidebar} className="elegant-button primary">
            Get Started
            <FiArrowRight className="button-icon" />
          </button>
          <a
            href="https://github.com/AmanBisht001"
            target="_blank"
            rel="noopener noreferrer"
            className="elegant-button secondary"
          >
            <FiGithub className="button-icon" />
            GitHub
          </a>
        </div>
      </header>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3 className="feature-title">Beautiful Design</h3>
          <p className="feature-text">
            Thoughtfully designed components with attention to detail
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Fast Performance</h3>
          <p className="feature-text">
            Optimized for speed and smooth user experience
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3 className="feature-title">Easy Customization</h3>
          <p className="feature-text">
            Modify styles easily with CSS variables
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
