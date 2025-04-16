import React, { useState } from "react";
import {
  FiHeart,
  FiShare2,
  FiBookmark,
  FiEye,
  FiCopy,
  FiCheck,
  FiStar,
  FiUser,
  FiShoppingCart,
  FiMessageSquare,
} from "react-icons/fi";
import "./CardsPage.css";

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button className="copy-btn" onClick={handleCopy}>
      {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied!" : "Copy Code"}
    </button>
  );
};

const CardWithCode = ({ title, children, code }) => {
  return (
    <div className="card-component">
      <div className="card-preview">{children}</div>
      <div className="card-code">
        <div className="code-toolbar">
          <span className="code-language">JSX</span>
          <CopyButton code={code} />
        </div>
        <pre className="vs-code-dark">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const CardsPage = () => {
  return (
    <div className="cards-page">
      <header className="page-header">
        <h1>✨ React Card Components</h1>
        <p className="page-description">
          Beautiful, responsive card components with copy-paste ready code
        </p>
      </header>

      <div className="cards-container">
        {/* Profile Card */}
        <CardWithCode
          title="Profile Card"
          code={`<div className="card profile-card">
  <img 
    src="https://picsum.photos/400/300?person=1" 
    className="card-image"
    alt="Profile"
  />
  <div className="card-body">
    <h3>Alex Johnson</h3>
    <p className="role">UI/UX Designer</p>
    <div className="social-stats">
      <div>
        <strong>542</strong>
        <span>Followers</span>
      </div>
      <div>
        <strong>87</strong>
        <span>Projects</span>
      </div>
    </div>
    <button className="btn follow-btn">
      <FiUser /> Follow
    </button>
  </div>
</div>`}
        >
          <div className="card profile-card">
            <img
              src="https://picsum.photos/400/300?person=1"
              className="card-image"
              alt="Profile"
            />
            <div className="card-body">
              <h3>Alex Johnson</h3>
              <p className="role">UI/UX Designer</p>
              <div className="social-stats">
                <div>
                  <strong>542</strong>
                  <span>Followers</span>
                </div>
                <div>
                  <strong>87</strong>
                  <span>Projects</span>
                </div>
              </div>
              <button className="btn follow-btn">
                <FiUser /> Follow
              </button>
            </div>
          </div>
        </CardWithCode>

        {/* Product Card */}
        <CardWithCode
          title="Product Card"
          code={`<div className="card product-card">
  <div className="badge">-20%</div>
  <img
    src="https://picsum.photos/400/300?product=1"
    className="card-image"
    alt="Product"
  />
  <div className="card-body">
    <div className="product-header">
      <h3>Wireless Headphones</h3>
      <div className="rating">
        <FiStar className="star filled" />
        <FiStar className="star filled" />
        <FiStar className="star filled" />
        <FiStar className="star filled" />
        <FiStar className="star" />
        <span>4.2</span>
      </div>
    </div>
    <div className="price">
      <span className="current-price">$89.99</span>
      <span className="original-price">$112.99</span>
    </div>
    <button className="btn add-to-cart">
      <FiShoppingCart /> Add to Cart
    </button>
  </div>
</div>`}
        >
          <div className="card product-card">
            <div className="badge">-20%</div>
            <img
              src="https://picsum.photos/400/300?product=1"
              className="card-image"
              alt="Product"
            />
            <div className="card-body">
              <div className="product-header">
                <h3>Wireless Headphones</h3>
                <div className="rating">
                  <FiStar className="star filled" />
                  <FiStar className="star filled" />
                  <FiStar className="star filled" />
                  <FiStar className="star filled" />
                  <FiStar className="star" />
                  <span>4.2</span>
                </div>
              </div>
              <div className="price">
                <span className="current-price">$89.99</span>
                <span className="original-price">$112.99</span>
              </div>
              <button className="btn add-to-cart">
                <FiShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </CardWithCode>

        {/* Testimonial Card */}
        <CardWithCode
          title="Testimonial Card"
          code={`<div className="card testimonial-card">
  <div className="quote-icon">"</div>
  <p className="testimonial-text">
    This component library saved me countless hours of development time. 
    The cards are beautifully designed and easy to customize.
  </p>
  <div className="testimonial-author">
    <img
      src="https://picsum.photos/100/100?person=2"
      alt="Sarah Miller"
    />
    <div>
      <h4>Sarah Miller</h4>
      <p>Frontend Developer</p>
    </div>
  </div>
</div>`}
        >
          <div className="card testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              This component library saved me countless hours of development
              time. The cards are beautifully designed and easy to customize.
            </p>
            <div className="testimonial-author">
              <img
                src="https://picsum.photos/100/100?person=2"
                alt="Sarah Miller"
              />
              <div>
                <h4>Sarah Miller</h4>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </CardWithCode>

        {/* Blog Card */}
        <CardWithCode
          title="Blog Card"
          code={`<div className="card blog-card">
  <img
    src="https://picsum.photos/400/300?blog=1"
    className="card-image"
    alt="Blog Post"
  />
  <div className="card-body">
    <span className="category">Technology</span>
    <h3>10 React Patterns You Should Know</h3>
    <p className="excerpt">
      Learn the most useful React patterns to improve your code quality...
    </p>
    <div className="card-footer">
      <div className="author">
        <img
          src="https://picsum.photos/40/40?person=3"
          alt="Author"
        />
        <span>David Chen</span>
      </div>
      <div className="actions">
        <button className="icon-btn">
          <FiBookmark />
        </button>
        <button className="icon-btn">
          <FiShare2 />
        </button>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="card blog-card">
            <img
              src="https://picsum.photos/400/300?blog=1"
              className="card-image"
              alt="Blog Post"
            />
            <div className="card-body">
              <span className="category">Technology</span>
              <h3>10 React Patterns You Should Know</h3>
              <p className="excerpt">
                Learn the most useful React patterns to improve your code
                quality...
              </p>
              <div className="card-footer">
                <div className="author">
                  <img
                    src="https://picsum.photos/40/40?person=3"
                    alt="Author"
                  />
                  <span>David Chen</span>
                </div>
                <div className="actions">
                  <button className="icon-btn">
                    <FiBookmark />
                  </button>
                  <button className="icon-btn">
                    <FiShare2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CardWithCode>
      </div>
    </div>
  );
};

export default CardsPage;
