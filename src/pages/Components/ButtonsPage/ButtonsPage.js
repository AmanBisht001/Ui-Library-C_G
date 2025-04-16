import React, { useState } from "react";
import {
  FiArrowRight,
  FiDownload,
  FiHeart,
  FiStar,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import "./ButtonsPage.css";

const ButtonsPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const buttonTypes = [
    {
      title: "Primary Buttons",
      description:
        "Primary action buttons for the main call-to-action in your application.",
      buttons: [
        { className: "btn btn-primary", text: "Default" },
        { className: "btn btn-primary hover", text: "Hover" },
        { className: "btn btn-primary active", text: "Active" },
        { className: "btn btn-primary focus", text: "Focus" },
        {
          className: "btn btn-primary disabled",
          text: "Disabled",
          disabled: true,
        },
        {
          className: "btn btn-primary loading",
          text: "Loading",
          children: <span className="spinner"></span>,
        },
        {
          className: "btn btn-primary with-icon",
          text: "With Icon",
          children: <FiArrowRight className="btn-icon" />,
        },
      ],
    },
    {
      title: "Secondary Buttons",
      description:
        "Secondary actions or less prominent actions that complement primary buttons.",
      buttons: [
        { className: "btn btn-secondary", text: "Default" },
        { className: "btn btn-secondary hover", text: "Hover" },
        { className: "btn btn-secondary active", text: "Active" },
        { className: "btn btn-secondary focus", text: "Focus" },
        {
          className: "btn btn-secondary disabled",
          text: "Disabled",
          disabled: true,
        },
        {
          className: "btn btn-secondary with-icon",
          text: "Download",
          children: <FiDownload className="btn-icon" />,
        },
      ],
    },
    {
      title: "Ghost Buttons",
      description:
        "Minimal buttons for less intrusive actions, often used in toolbars or as secondary actions.",
      buttons: [
        { className: "btn btn-ghost", text: "Default" },
        { className: "btn btn-ghost hover", text: "Hover" },
        { className: "btn btn-ghost active", text: "Active" },
        {
          className: "btn btn-ghost with-icon",
          text: "Favorite",
          children: <FiHeart className="btn-icon" />,
        },
      ],
    },
    {
      title: "Button Sizes",
      description:
        "Various sizes to fit different contexts and hierarchies in your UI.",
      buttons: [
        { className: "btn btn-primary sm", text: "Small" },
        { className: "btn btn-primary md", text: "Medium" },
        { className: "btn btn-primary lg", text: "Large" },
        { className: "btn btn-primary xl", text: "Extra Large" },
      ],
    },
    {
      title: "Special Buttons",
      description:
        "Specialized buttons for specific use cases and status indicators.",
      buttons: [
        {
          className: "btn btn-success",
          text: "Success",
          children: <FiStar className="btn-icon" />,
        },
        { className: "btn btn-warning", text: "Warning" },
        { className: "btn btn-danger", text: "Danger" },
        { className: "btn btn-gradient", text: "Gradient" },
        { className: "btn btn-outline", text: "Outline" },
        { className: "btn btn-pill", text: "Pill Shape" },
      ],
    },
  ];

  const usageExamples = [
    {
      title: "Basic Button",
      description: "Standard button with primary styling.",
      code: `<button className="btn btn-primary">
  Click Me
</button>`,
    },
    {
      title: "Button with Icon",
      description: "Button that includes an icon from react-icons.",
      code: `import { FiArrowRight } from "react-icons/fi";

<button className="btn btn-primary with-icon">
  <FiArrowRight className="btn-icon" />
  Continue
</button>`,
    },
    {
      title: "Disabled Button",
      description: "Button that is not interactive.",
      code: `<button className="btn btn-primary disabled" disabled>
  Disabled
</button>`,
    },
    {
      title: "Loading Button",
      description: "Button that shows a loading state.",
      code: `<button className="btn btn-primary loading">
  <span className="spinner"></span>
  Loading
</button>`,
    },
  ];

  return (
    <div className="buttons-page">
      <header className="page-header">
        <h1>Button Components</h1>
        <p className="page-description">
          A collection of customizable button components with various styles,
          sizes, and states. Easily integrate into your React applications.
        </p>
      </header>

      <div className="documentation-section">
        <h2 className="section-title">Documentation</h2>
        <div className="docs-content">
          <h3>Getting Started</h3>
          <p>
            To use these button components in your project, first install the
            required dependencies:
          </p>
          <pre className="code-block">
            <code>npm install react-icons</code>
          </pre>

          <h3>Button Variants</h3>
          <p>The button library includes several variants:</p>
          <ul>
            <li>
              <strong>Primary</strong> - Main call-to-action buttons
            </li>
            <li>
              <strong>Secondary</strong> - Supporting actions
            </li>
            <li>
              <strong>Ghost</strong> - Minimal styling for less prominent
              actions
            </li>
            <li>
              <strong>Special</strong> - Status indicators and decorative
              buttons
            </li>
          </ul>

          <h3>Button States</h3>
          <p>Buttons can have different states:</p>
          <ul>
            <li>
              <strong>Default</strong> - Normal state
            </li>
            <li>
              <strong>Hover</strong> - When mouse is over the button
            </li>
            <li>
              <strong>Active</strong> - When button is being clicked
            </li>
            <li>
              <strong>Focus</strong> - When button has keyboard focus
            </li>
            <li>
              <strong>Disabled</strong> - Non-interactive state
            </li>
            <li>
              <strong>Loading</strong> - Shows a spinner for async actions
            </li>
          </ul>
        </div>
      </div>

      {buttonTypes.map((section, sectionIndex) => (
        <section key={sectionIndex} className="button-section">
          <div className="section-header">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
          </div>
          <div className="button-grid">
            {section.buttons.map((button, btnIndex) => (
              <div key={btnIndex} className="button-example">
                <button
                  className={button.className}
                  disabled={button.disabled || false}
                >
                  {button.children}
                  {button.text}
                </button>
                <div className="button-classname">{button.className}</div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="usage-section">
        <h2 className="section-title">Usage Examples</h2>
        <p className="section-description">
          Copy and paste these code snippets directly into your components.
        </p>

        {usageExamples.map((example, index) => (
          <div key={index} className="code-example">
            <div className="example-header">
              <h3>{example.title}</h3>
              <button
                className="btn-copy"
                onClick={() => copyToClipboard(example.code, index)}
              >
                {copiedIndex === index ? <FiCheck /> : <FiCopy />}
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="example-description">{example.description}</p>
            <pre className="code-block">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </section>

      <footer className="page-footer">
        <h3>Customization</h3>
        <p>
          All buttons can be customized by overriding the CSS variables in your
          own stylesheet. The main variables you might want to change are:
        </p>
        <ul>
          <li>
            <code>--primary-color</code> - Primary button color
          </li>
          <li>
            <code>--secondary-color</code> - Secondary button color
          </li>
          <li>
            <code>--success-color</code> - Success button color
          </li>
          <li>
            <code>--warning-color</code> - Warning button color
          </li>
          <li>
            <code>--danger-color</code> - Danger button color
          </li>
          <li>
            <code>--text-color</code> - Button text color
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default ButtonsPage;
