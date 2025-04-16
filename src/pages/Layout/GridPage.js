import React, { useState } from "react";
import "./GridPage.css";

const GridPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("examples");

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const highlightSyntax = (code) => {
    return code
      .replace(/(<\/?[a-z][a-z0-9]*)/gi, '<span class="html-tag">$1</span>')
      .replace(/(className|key)=/g, '<span class="html-attr">$1</span>=')
      .replace(/("[^"]*")/g, '<span class="html-value">$1</span>')
      .replace(/(\{[^}]*\})/g, '<span class="js-brace">$1</span>')
      .replace(/(\/?>)/g, '<span class="html-tag">$1</span>');
  };

  const gridExamples = [
    {
      title: "Basic 12-Column Grid",
      description: "Our foundational grid system with 12 equal-width columns",
      code: `<div className="grid-container">
  {[...Array(12)].map((_, i) => (
    <div key={i} className="grid-col">
      <div className="grid-box">Col {i + 1}</div>
    </div>
  ))}
</div>`,
      demo: (
        <div className="grid-container">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="grid-col">
              <div className="grid-box">Col {i + 1}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Responsive Grid",
      description: "Columns adjust automatically based on screen size",
      code: `<div className="grid-container">
  <div className="grid-col sm-12 md-6 lg-4">
    <div className="grid-box">Mobile Full</div>
  </div>
  <div className="grid-col sm-12 md-6 lg-4">
    <div className="grid-box">Tablet Half</div>
  </div>
  <div className="grid-col sm-12 md-12 lg-4">
    <div className="grid-box">Desktop Third</div>
  </div>
</div>`,
      demo: (
        <div className="grid-container">
          <div className="grid-col sm-12 md-6 lg-4">
            <div className="grid-box">Mobile Full</div>
          </div>
          <div className="grid-col sm-12 md-6 lg-4">
            <div className="grid-box">Tablet Half</div>
          </div>
          <div className="grid-col sm-12 md-12 lg-4">
            <div className="grid-box">Desktop Third</div>
          </div>
        </div>
      ),
    },
    {
      title: "Grid Gaps",
      description: "Control spacing between grid items with gap utilities",
      code: `<div className="grid-container gap-xs">
  <div className="grid-col sm-6">
    <div className="grid-box">Extra Small Gap</div>
  </div>
  <div className="grid-col sm-6">
    <div className="grid-box">Extra Small Gap</div>
  </div>
</div>

<div className="grid-container gap-md">
  <div className="grid-col sm-6">
    <div className="grid-box">Medium Gap</div>
  </div>
  <div className="grid-col sm-6">
    <div className="grid-box">Medium Gap</div>
  </div>
</div>

<div className="grid-container gap-xl">
  <div className="grid-col sm-6">
    <div className="grid-box">Extra Large Gap</div>
  </div>
  <div className="grid-col sm-6">
    <div className="grid-box">Extra Large Gap</div>
  </div>
</div>`,
      demo: (
        <>
          <div className="grid-container gap-xs">
            <div className="grid-col sm-6">
              <div className="grid-box">Extra Small Gap</div>
            </div>
            <div className="grid-col sm-6">
              <div className="grid-box">Extra Small Gap</div>
            </div>
          </div>

          <div className="grid-container gap-md">
            <div className="grid-col sm-6">
              <div className="grid-box">Medium Gap</div>
            </div>
            <div className="grid-col sm-6">
              <div className="grid-box">Medium Gap</div>
            </div>
          </div>

          <div className="grid-container gap-xl">
            <div className="grid-col sm-6">
              <div className="grid-box">Extra Large Gap</div>
            </div>
            <div className="grid-col sm-6">
              <div className="grid-box">Extra Large Gap</div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Nested Grids",
      description: "Create complex layouts with nested grids",
      code: `<div className="grid-container">
  <div className="grid-col sm-12 md-8">
    <div className="grid-box">
      <div className="grid-container nested">
        <div className="grid-col sm-6">
          <div className="grid-box">Nested 1</div>
        </div>
        <div className="grid-col sm-6">
          <div className="grid-box">Nested 2</div>
        </div>
      </div>
    </div>
  </div>
  <div className="grid-col sm-12 md-4">
    <div className="grid-box">Side Content</div>
  </div>
</div>`,
      demo: (
        <div className="grid-container">
          <div className="grid-col sm-12 md-8">
            <div className="grid-box">
              <div className="grid-container nested">
                <div className="grid-col sm-6">
                  <div className="grid-box">Nested 1</div>
                </div>
                <div className="grid-col sm-6">
                  <div className="grid-box">Nested 2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-col sm-12 md-4">
            <div className="grid-box">Side Content</div>
          </div>
        </div>
      ),
    },
    {
      title: "Auto-Fit Columns",
      description: "Automatically fit as many columns as possible",
      code: `<div className="grid-container auto-fit">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="grid-col">
      <div className="grid-box">Auto Column</div>
    </div>
  ))}
</div>`,
      demo: (
        <div className="grid-container auto-fit">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid-col">
              <div className="grid-box">Auto Column</div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const gridUtilities = [
    { class: "grid-container", desc: "Creates a grid container" },
    { class: "grid-col", desc: "Base class for grid columns" },
    { class: "sm-{1-12}", desc: "Small screen column width (≥576px)" },
    { class: "md-{1-12}", desc: "Medium screen column width (≥768px)" },
    { class: "lg-{1-12}", desc: "Large screen column width (≥992px)" },
    { class: "xl-{1-12}", desc: "Extra large screen column width (≥1200px)" },
    { class: "gap-xs", desc: "Extra small gap between items (0.25rem)" },
    { class: "gap-sm", desc: "Small gap between items (0.5rem)" },
    { class: "gap-md", desc: "Medium gap between items (1rem)" },
    { class: "gap-lg", desc: "Large gap between items (1.5rem)" },
    { class: "gap-xl", desc: "Extra large gap between items (2rem)" },
    {
      class: "auto-fit",
      desc: "Automatically fit as many columns as possible",
    },
    { class: "nested", desc: "For nested grids to maintain proper spacing" },
  ];

  return (
    <div className="grid-page">
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">FlexGrid System</h1>
          <p className="page-description">
            A responsive, mobile-first grid system built with CSS Grid for
            modern layouts. Includes flexible column sizing, gap utilities, and
            nested grid support.
          </p>
        </div>
      </header>

      <div className="page-tabs">
        <button
          className={`tab-button ${activeTab === "examples" ? "active" : ""}`}
          onClick={() => setActiveTab("examples")}
        >
          Examples
        </button>
        <button
          className={`tab-button ${activeTab === "utilities" ? "active" : ""}`}
          onClick={() => setActiveTab("utilities")}
        >
          Utilities
        </button>
        <button
          className={`tab-button ${
            activeTab === "implementation" ? "active" : ""
          }`}
          onClick={() => setActiveTab("implementation")}
        >
          Implementation
        </button>
      </div>

      <div className="page-content">
        {activeTab === "examples" && (
          <>
            <section className="features-section card">
              <div className="card-header">
                <h2>Key Features</h2>
              </div>
              <div className="card-body">
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">📱</div>
                    <h3>Responsive</h3>
                    <p>Mobile-first breakpoints with customizable columns</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🧩</div>
                    <h3>Flexible</h3>
                    <p>Mix fixed and fluid columns in the same layout</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Modern</h3>
                    <p>Built with CSS Grid for better performance</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="usage-section card">
              <div className="card-header">
                <h2>Getting Started</h2>
              </div>
              <div className="card-body">
                <div className="usage-card">
                  <h3>How to use FlexGrid</h3>
                  <ol>
                    <li>
                      Wrap your grid items in a{" "}
                      <code className="inline-code">grid-container</code>
                    </li>
                    <li>
                      Use <code className="inline-code">grid-col</code> for each
                      column
                    </li>
                    <li>
                      Add responsive modifiers like{" "}
                      <code className="inline-code">sm-6</code>,{" "}
                      <code className="inline-code">md-4</code>,{" "}
                      <code className="inline-code">lg-3</code>
                    </li>
                    <li>
                      Control gaps with{" "}
                      <code className="inline-code">gap-sm</code>,{" "}
                      <code className="inline-code">gap-md</code>,{" "}
                      <code className="inline-code">gap-lg</code>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {gridExamples.map((example, index) => (
              <section key={index} className="example-section card">
                <div className="card-header">
                  <h2>{example.title}</h2>
                  <p>{example.description}</p>
                </div>
                <div className="card-body">
                  <div className="example-demo">{example.demo}</div>

                  <div className="example-code">
                    <div className="code-header">
                      <span>React JSX</span>
                      <button
                        className={`copy-button ${
                          copiedIndex === index ? "copied" : ""
                        }`}
                        onClick={() => copyToClipboard(example.code, index)}
                      >
                        {copiedIndex === index ? (
                          <>
                            <span className="icon">✓</span> Copied!
                          </>
                        ) : (
                          <>
                            <span className="icon">⎘</span> Copy Code
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="code-block">
                      <code
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(example.code),
                        }}
                      />
                    </pre>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}

        {activeTab === "utilities" && (
          <section className="utilities-section card">
            <div className="card-header">
              <h2>Grid Utilities</h2>
              <p>
                All available utility classes for the FlexGrid system with their
                descriptions
              </p>
            </div>
            <div className="card-body">
              <div className="utilities-grid">
                {gridUtilities.map((util, index) => (
                  <div key={index} className="utility-item">
                    <code className="utility-class">{util.class}</code>
                    <p className="utility-desc">{util.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "implementation" && (
          <section className="implementation-section card">
            <div className="card-header">
              <h2>Implementation</h2>
              <p>How to implement the FlexGrid system in your project</p>
            </div>
            <div className="card-body">
              <div className="implementation-content">
                <div className="code-example">
                  <h3>CSS Variables</h3>
                  <p>
                    The grid system uses these CSS custom properties for
                    consistent spacing and breakpoints:
                  </p>
                  <pre>
                    <code>
                      {`:root {
  --grid-columns: 12;
  --grid-gap: 1rem;
  
  /* Breakpoints */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  
  /* Gap sizes */
  --gap-xs: 0.25rem;
  --gap-sm: 0.5rem;
  --gap-md: 1rem;
  --gap-lg: 1.5rem;
  --gap-xl: 2rem;
}`}
                    </code>
                  </pre>
                </div>

                <div className="code-example">
                  <h3>Base Grid Styles</h3>
                  <p>The core grid container and column styles:</p>
                  <pre>
                    <code>
                      {`.grid-container {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  width: 100%;
}

.grid-col {
  grid-column: span var(--grid-columns);
}

/* Responsive column classes */
@media (min-width: 576px) {
  .sm-1 { grid-column: span 1; }
  /* ... up to sm-12 */
}

/* Auto-fit columns */
.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`}
                    </code>
                  </pre>
                </div>

                <div className="code-example">
                  <h3>SCSS Mixin</h3>
                  <p>
                    For projects using SCSS, you can generate all column classes
                    with this mixin:
                  </p>
                  <pre>
                    <code>
                      {`@mixin generate-grid-columns($prefix, $breakpoint) {
  @media (min-width: $breakpoint) {
    @for $i from 1 through 12 {
      .#{$prefix}-#{$i} {
        grid-column: span #{$i};
      }
    }
  }
}

@include generate-grid-columns('sm', $breakpoint-sm);
@include generate-grid-columns('md', $breakpoint-md);
@include generate-grid-columns('lg', $breakpoint-lg);
@include generate-grid-columns('xl', $breakpoint-xl);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default GridPage;
