import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import "./ColorsPage.css";

const ColorsPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const colorPalette = [
    {
      name: "Primary",
      colors: [
        { name: "50", value: "#eff6ff", text: "dark" },
        { name: "100", value: "#dbeafe", text: "dark" },
        { name: "200", value: "#bfdbfe", text: "dark" },
        { name: "300", value: "#93c5fd", text: "dark" },
        { name: "400", value: "#60a5fa", text: "dark" },
        { name: "500", value: "#3b82f6", text: "light" },
        { name: "600", value: "#2563eb", text: "light" },
        { name: "700", value: "#1d4ed8", text: "light" },
        { name: "800", value: "#1e40af", text: "light" },
        { name: "900", value: "#1e3a8a", text: "light" },
      ],
    },
    {
      name: "Gray",
      colors: [
        { name: "50", value: "#f9fafb", text: "dark" },
        { name: "100", value: "#f3f4f6", text: "dark" },
        { name: "200", value: "#e5e7eb", text: "dark" },
        { name: "300", value: "#d1d5db", text: "dark" },
        { name: "400", value: "#9ca3af", text: "dark" },
        { name: "500", value: "#6b7280", text: "light" },
        { name: "600", value: "#4b5563", text: "light" },
        { name: "700", value: "#374151", text: "light" },
        { name: "800", value: "#1f2937", text: "light" },
        { name: "900", value: "#111827", text: "light" },
      ],
    },
    {
      name: "Success",
      colors: [
        { name: "50", value: "#ecfdf5", text: "dark" },
        { name: "100", value: "#d1fae5", text: "dark" },
        { name: "200", value: "#a7f3d0", text: "dark" },
        { name: "300", value: "#6ee7b7", text: "dark" },
        { name: "400", value: "#34d399", text: "dark" },
        { name: "500", value: "#10b981", text: "light" },
        { name: "600", value: "#059669", text: "light" },
        { name: "700", value: "#047857", text: "light" },
        { name: "800", value: "#065f46", text: "light" },
        { name: "900", value: "#064e3b", text: "light" },
      ],
    },
    {
      name: "Warning",
      colors: [
        { name: "50", value: "#fffbeb", text: "dark" },
        { name: "100", value: "#fef3c7", text: "dark" },
        { name: "200", value: "#fde68a", text: "dark" },
        { name: "300", value: "#fcd34d", text: "dark" },
        { name: "400", value: "#fbbf24", text: "dark" },
        { name: "500", value: "#f59e0b", text: "dark" },
        { name: "600", value: "#d97706", text: "light" },
        { name: "700", value: "#b45309", text: "light" },
        { name: "800", value: "#92400e", text: "light" },
        { name: "900", value: "#78350f", text: "light" },
      ],
    },
    {
      name: "Danger",
      colors: [
        { name: "50", value: "#fef2f2", text: "dark" },
        { name: "100", value: "#fee2e2", text: "dark" },
        { name: "200", value: "#fecaca", text: "dark" },
        { name: "300", value: "#fca5a5", text: "dark" },
        { name: "400", value: "#f87171", text: "dark" },
        { name: "500", value: "#ef4444", text: "light" },
        { name: "600", value: "#dc2626", text: "light" },
        { name: "700", value: "#b91c1c", text: "light" },
        { name: "800", value: "#991b1b", text: "light" },
        { name: "900", value: "#7f1d1d", text: "light" },
      ],
    },
  ];

  const semanticColors = [
    {
      name: "Primary",
      value: "#3b82f6",
      var: "--primary",
      usage: "Main brand color",
    },
    {
      name: "Secondary",
      value: "#6b7280",
      var: "--secondary",
      usage: "Secondary elements",
    },
    {
      name: "Success",
      value: "#10b981",
      var: "--success",
      usage: "Positive actions",
    },
    {
      name: "Warning",
      value: "#f59e0b",
      var: "--warning",
      usage: "Cautionary elements",
    },
    {
      name: "Danger",
      value: "#ef4444",
      var: "--danger",
      usage: "Errors/destructive actions",
    },
    {
      name: "Light",
      value: "#f9fafb",
      var: "--light",
      usage: "Light backgrounds",
    },
    {
      name: "Dark",
      value: "#111827",
      var: "--dark",
      usage: "Dark text/backgrounds",
    },
  ];

  const codeExamples = [
    {
      title: "CSS Variables Setup",
      code: `:root {
  /* Primary */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;

  /* Semantic colors */
  --primary: var(--primary-500);
  --success: #10b981;
  --danger: #ef4444;
}`,
      description: "Define your color palette using CSS variables",
    },
    {
      title: "Using Color Variables",
      code: `.primary-button {
  background-color: var(--primary-500);
  color: white;
}

.error-text {
  color: var(--danger);
}

.bg-light {
  background-color: var(--light);
}`,
      description: "How to use the color variables in your CSS",
    },
    {
      title: "React Component Usage",
      code: `function Alert({ type, children }) {
  const colorMap = {
    success: 'var(--success)',
    error: 'var(--danger)',
    warning: 'var(--warning)'
  };

  return (
    <div style={{ backgroundColor: colorMap[type] }}>
      {children}
    </div>
  );
}`,
      description: "Using color variables in React components",
    },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="colors-page">
      <header className="page-header">
        <h1>🎨 Color System</h1>
        <p className="page-description">
          A comprehensive color palette with CSS variables for consistent
          theming
        </p>
      </header>

      <section className="semantic-colors">
        <h2 className="section-title">Semantic Colors</h2>
        <p className="section-description">
          These colors should be used for specific purposes throughout your
          application
        </p>

        <div className="semantic-grid">
          {semanticColors.map((color, index) => (
            <div key={index} className="semantic-color">
              <div
                className="color-box"
                style={{ backgroundColor: color.value }}
              >
                <span
                  className={`color-name ${
                    color.value === "#f9fafb" ? "dark-text" : "light-text"
                  }`}
                >
                  {color.name}
                </span>
              </div>
              <div className="color-details">
                <code>{color.var}</code>
                <span>{color.value}</span>
                <p>{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="color-palette">
        <h2 className="section-title">Color Palette</h2>
        <p className="section-description">
          Full color spectrum with shades for different use cases
        </p>

        {colorPalette.map((palette, index) => (
          <div key={index} className="palette-group">
            <h3 className="palette-name">{palette.name}</h3>
            <div className="palette-colors">
              {palette.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="color-swatch"
                  onClick={() =>
                    copyToClipboard(color.value, `${index}-${colorIndex}`)
                  }
                >
                  <div
                    className="swatch"
                    style={{ backgroundColor: color.value }}
                  >
                    <span className={`swatch-text ${color.text}-text`}>
                      {copiedIndex === `${index}-${colorIndex}` ? (
                        <>
                          <FiCheck /> Copied!
                        </>
                      ) : (
                        color.value
                      )}
                    </span>
                  </div>
                  <div className="swatch-label">
                    <span>
                      {palette.name}-{color.name}
                    </span>
                    <code>{color.value}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="usage-section">
        <h2 className="section-title">Usage Examples</h2>
        <p className="section-description">
          Implementation examples for using the color system
        </p>

        <div className="code-examples">
          {codeExamples.map((example, index) => (
            <div key={index} className="code-example">
              <div className="example-header">
                <h3>{example.title}</h3>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(example.code, index)}
                >
                  {copiedIndex === index ? <FiCheck /> : <FiCopy />}
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="example-description">{example.description}</p>
              <pre className="vs-code-dark">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <h3>Best Practices</h3>
        <ul>
          <li>Use semantic color variables for maintainability</li>
          <li>Test color contrast for accessibility (WCAG AA minimum)</li>
          <li>Limit your palette to 3-5 primary colors</li>
          <li>
            Use shades consistently (e.g., lighter for backgrounds, darker for
            text)
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default ColorsPage;
