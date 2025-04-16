import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import "./TextPage.css";

const TextPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const textUtilities = [
    {
      name: "Text Alignment",
      classes: [
        { class: ".text-left", description: "Left aligned text" },
        { class: ".text-center", description: "Center aligned text" },
        { class: ".text-right", description: "Right aligned text" },
        { class: ".text-justify", description: "Justified text" },
      ],
    },
    {
      name: "Font Weight",
      classes: [
        { class: ".font-light", description: "Light (300) font weight" },
        { class: ".font-normal", description: "Normal (400) font weight" },
        { class: ".font-medium", description: "Medium (500) font weight" },
        { class: ".font-semibold", description: "Semibold (600) font weight" },
        { class: ".font-bold", description: "Bold (700) font weight" },
      ],
    },
    {
      name: "Text Transformation",
      classes: [
        {
          class: ".normal-case",
          description: "Normal case (no transformation)",
        },
        { class: ".uppercase", description: "UPPERCASE text" },
        { class: ".lowercase", description: "lowercase text" },
        { class: ".capitalize", description: "Capitalized Text" },
      ],
    },
    {
      name: "Text Decoration",
      classes: [
        { class: ".underline", description: "Underlined text" },
        { class: ".line-through", description: "Strikethrough text" },
        { class: ".no-underline", description: "No text decoration" },
      ],
    },
    {
      name: "Text Colors",
      classes: [
        { class: ".text-primary", description: "Primary brand color" },
        { class: ".text-secondary", description: "Secondary brand color" },
        { class: ".text-success", description: "Success state color" },
        { class: ".text-danger", description: "Error/danger color" },
        { class: ".text-warning", description: "Warning state color" },
        { class: ".text-info", description: "Informational color" },
        { class: ".text-muted", description: "Muted/gray text" },
      ],
    },
    {
      name: "Text Sizing",
      classes: [
        { class: ".text-xs", description: "Extra small text (0.75rem)" },
        { class: ".text-sm", description: "Small text (0.875rem)" },
        { class: ".text-base", description: "Base text (1rem)" },
        { class: ".text-lg", description: "Large text (1.125rem)" },
        { class: ".text-xl", description: "Extra large text (1.25rem)" },
        { class: ".text-2xl", description: "2X large text (1.5rem)" },
      ],
    },
  ];

  const codeExamples = [
    {
      title: "CSS Variables Setup",
      code: `:root {
  /* Text colors */
  --text-primary: #3490dc;
  --text-secondary: #6c757d;
  --text-success: #38c172;
  --text-danger: #e3342f;
  --text-warning: #f6993f;
  --text-info: #6cb2eb;
  --text-muted: #6c757d;

  /* Font sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
}`,
      description:
        "Define these CSS variables in your :root or component scope",
    },
    {
      title: "Utility Classes Implementation",
      code: `/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Font weight */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Text colors */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
/* ...other color classes */`,
      description: "Implementation of utility classes using CSS",
    },
    {
      title: "Component Usage Examples",
      code: `<h1 className="text-2xl font-bold text-primary">Heading</h1>
<p className="text-base text-muted">Secondary text content</p>
<div className="text-center">
  <button className="font-semibold uppercase">Submit</button>
</div>
<span className="text-danger font-medium">Error message</span>`,
      description: "Examples of using text utilities in your components",
    },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="text-page">
      <header className="page-header">
        <h1>Text Utilities</h1>
        <p className="page-description">
          A comprehensive collection of text styling utilities for consistent
          typography
        </p>
      </header>

      <section className="utilities-section">
        <h2 className="section-title">Text Utility Classes</h2>
        <p className="section-description">
          Quickly style text with these utility classes. Combine them as needed.
        </p>

        <div className="utilities-grid">
          {textUtilities.map((category, catIndex) => (
            <div key={catIndex} className="utility-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="utility-classes">
                {category.classes.map((util, utilIndex) => (
                  <div key={utilIndex} className="utility-item">
                    <code>{util.class}</code>
                    <span>{util.description}</span>
                    <div
                      className={`utility-demo ${util.class.replace(".", "")}`}
                    >
                      Example text
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="examples-section">
        <h2 className="section-title">Usage Examples</h2>

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
                  {copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
              <p className="example-description">{example.description}</p>
              <pre className="vs-code-dark">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>

        <div className="visual-examples">
          <h3>Visual Examples</h3>
          <div className="examples-grid">
            <div className="example-card">
              <h4 className="text-xl font-bold text-primary">Heading Text</h4>
              <p className="text-base text-muted">
                Supporting content with muted text
              </p>
              <p className="text-sm font-medium uppercase text-success">
                Success message
              </p>
            </div>
            <div className="example-card">
              <div className="text-center">
                <h4 className="text-lg font-semibold">Centered Content</h4>
                <p className="text-sm italic">With centered alignment</p>
              </div>
            </div>
            <div className="example-card">
              <p className="font-light">Light weight text</p>
              <p className="font-normal">Normal weight text</p>
              <p className="font-bold">Bold weight text</p>
              <p className="uppercase">uppercased text</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextPage;
