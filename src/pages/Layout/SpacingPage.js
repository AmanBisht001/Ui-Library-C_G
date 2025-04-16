import React from "react";
import "./SpacingPage.css";

const SpacingPage = () => {
  const spacingSizes = [
    { name: "Extra Small", var: "--space-xs", value: "0.25rem", px: "4px" },
    { name: "Small", var: "--space-sm", value: "0.5rem", px: "8px" },
    { name: "Medium", var: "--space-md", value: "1rem", px: "16px" },
    { name: "Large", var: "--space-lg", value: "1.5rem", px: "24px" },
    { name: "Extra Large", var: "--space-xl", value: "2rem", px: "32px" },
    { name: "2X Large", var: "--space-2xl", value: "3rem", px: "48px" },
    { name: "3X Large", var: "--space-3xl", value: "4rem", px: "64px" },
  ];

  const spacingUtilities = [
    { class: "m-{size}", desc: "Margin on all sides" },
    { class: "mx-{size}", desc: "Margin on left and right" },
    { class: "my-{size}", desc: "Margin on top and bottom" },
    { class: "mt-{size}", desc: "Margin top" },
    { class: "mr-{size}", desc: "Margin right" },
    { class: "mb-{size}", desc: "Margin bottom" },
    { class: "ml-{size}", desc: "Margin left" },
    { class: "p-{size}", desc: "Padding on all sides" },
    { class: "px-{size}", desc: "Padding on left and right" },
    { class: "py-{size}", desc: "Padding on top and bottom" },
    { class: "pt-{size}", desc: "Padding top" },
    { class: "pr-{size}", desc: "Padding right" },
    { class: "pb-{size}", desc: "Padding bottom" },
    { class: "pl-{size}", desc: "Padding left" },
    { class: "gap-{size}", desc: "Gap between flex/grid items" },
  ];

  return (
    <div className="spacing-page">
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">Spacing System</h1>
          <p className="page-description">
            A consistent spacing scale used throughout the design system for
            margins, padding, and gaps. Built with CSS custom properties for
            easy theming and customization.
          </p>
        </div>
      </header>

      <div className="page-content">
        <section className="spacing-section card">
          <div className="card-header">
            <h2>Spacing Scale</h2>
            <p>Our spacing scale is based on a 4px (0.25rem) unit system.</p>
          </div>
          <div className="card-body">
            <div className="spacing-scale">
              {spacingSizes.map((size) => (
                <div key={size.var} className="spacing-item">
                  <div className="spacing-visual-container">
                    <div
                      className="spacing-visual"
                      style={{ width: size.value, height: size.value }}
                    ></div>
                  </div>
                  <div className="spacing-details">
                    <span className="spacing-name">{size.name}</span>
                    <div className="spacing-specs">
                      <span className="spacing-var">{size.var}</span>
                      <span className="spacing-value">{size.value}</span>
                      <span className="spacing-px">{size.px}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="spacing-section card">
          <div className="card-header">
            <h2>Spacing Utilities</h2>
            <p>Utility classes for applying margin and padding.</p>
          </div>
          <div className="card-body">
            <div className="utilities-grid">
              {spacingUtilities.map((util, index) => (
                <div key={index} className="utility-item">
                  <code className="utility-class">{util.class}</code>
                  <p className="utility-desc">{util.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="spacing-section card">
          <div className="card-header">
            <h2>Usage Examples</h2>
            <p>See how spacing utilities work in practice.</p>
          </div>
          <div className="card-body">
            <div className="examples-grid">
              <div className="example-card">
                <h3>Margin Utilities</h3>
                <div className="example-container">
                  <div className="box mt-xs">mt-xs</div>
                  <div className="box ml-sm">ml-sm</div>
                  <div className="box mr-md">mr-md</div>
                  <div className="box mb-lg">mb-lg</div>
                  <div className="box mx-xl">mx-xl</div>
                  <div className="box my-2xl">my-2xl</div>
                </div>
              </div>

              <div className="example-card">
                <h3>Padding Utilities</h3>
                <div className="example-container">
                  <div className="box p-xs">p-xs</div>
                  <div className="box p-sm">p-sm</div>
                  <div className="box p-md">p-md</div>
                  <div className="box p-lg">p-lg</div>
                  <div className="box px-xl">px-xl</div>
                  <div className="box py-2xl">py-2xl</div>
                </div>
              </div>

              <div className="example-card">
                <h3>Gap Utilities</h3>
                <div className="example-container gap-example">
                  <div className="flex-container gap-xs">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-item">
                        gap-xs
                      </div>
                    ))}
                  </div>
                  <div className="flex-container gap-md">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-item">
                        gap-md
                      </div>
                    ))}
                  </div>
                  <div className="flex-container gap-xl">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-item">
                        gap-xl
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="spacing-section card">
          <div className="card-header">
            <h2>Implementation</h2>
            <p>How to use these spacing variables in your project.</p>
          </div>
          <div className="card-body">
            <div className="code-example">
              <h4>CSS Variables</h4>
              <pre>
                <code>
                  {`:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
}`}
                </code>
              </pre>
            </div>

            <div className="code-example">
              <h4>SCSS Mixin</h4>
              <pre>
                <code>
                  {`@mixin spacing-utilities($sizes) {
  @each $name, $value in $sizes {
    .m-#{$name} { margin: $value; }
    .mx-#{$name} { margin-left: $value; margin-right: $value; }
    // More utilities...
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpacingPage;
