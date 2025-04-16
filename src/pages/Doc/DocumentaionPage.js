import React, { useState } from "react";
import "./DocumentationPage.css";

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState("buttons");
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, exampleName) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(exampleName);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const components = {
    buttons: [
      {
        name: "Primary Button",
        description: "Main call-to-action button for important actions",
        code: `<button className="btn btn-primary">Submit</button>`,
        demo: <button className="btn btn-primary">Submit</button>,
      },
      {
        name: "Secondary Button",
        description: "Secondary action button",
        code: `<button className="btn btn-secondary">Cancel</button>`,
        demo: <button className="btn btn-secondary">Cancel</button>,
      },
      {
        name: "Disabled Button",
        description: "Button in disabled state",
        code: `<button className="btn" disabled>Disabled</button>`,
        demo: (
          <button className="btn" disabled>
            Disabled
          </button>
        ),
      },
    ],
    cards: [
      {
        name: "Basic Card",
        description: "Simple card with title and content",
        code: `<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>`,
        demo: (
          <div className="card demo-card">
            <h3>Card Title</h3>
            <p>Card content goes here</p>
          </div>
        ),
      },
    ],
    forms: [
      {
        name: "Text Input",
        description: "Standard text input field",
        code: `<div className="form-group">
  <label>Username</label>
  <input type="text" placeholder="Enter username" />
</div>`,
        demo: (
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
          </div>
        ),
      },
    ],
  };

  return (
    <div className="documentation-page">
      <header className="doc-header">
        <h1>Component Library</h1>
        <p>Beautiful, responsive UI components for your React applications</p>
      </header>

      <div className="doc-container">
        <aside className="sidebar">
          <h3>Components</h3>
          <ul>
            <li
              className={activeTab === "buttons" ? "active" : ""}
              onClick={() => setActiveTab("buttons")}
            >
              Buttons
            </li>
            <li
              className={activeTab === "cards" ? "active" : ""}
              onClick={() => setActiveTab("cards")}
            >
              Cards
            </li>
            <li
              className={activeTab === "forms" ? "active" : ""}
              onClick={() => setActiveTab("forms")}
            >
              Forms
            </li>
          </ul>
        </aside>

        <main className="content">
          <section className="component-section">
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p className="section-description">
              {activeTab === "buttons" &&
                "Interactive elements for user actions"}
              {activeTab === "cards" &&
                "Flexible containers for displaying content"}
              {activeTab === "forms" &&
                "Input elements for user data collection"}
            </p>

            <div className="component-grid">
              {components[activeTab].map((component, index) => (
                <div key={index} className="component-card">
                  <div className="component-demo">{component.demo}</div>
                  <div className="component-info">
                    <h3>{component.name}</h3>
                    <p>{component.description}</p>
                  </div>
                  <div className="component-code">
                    <button
                      className={`copy-btn ${
                        copiedCode === component.name ? "copied" : ""
                      }`}
                      onClick={() =>
                        copyToClipboard(component.code, component.name)
                      }
                    >
                      {copiedCode === component.name ? "Copied!" : "Copy Code"}
                    </button>
                    <pre>
                      <code>{component.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
