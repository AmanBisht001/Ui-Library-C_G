import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
  FiCopy,
  FiCalendar,
  FiUpload,
  FiChevronDown,
} from "react-icons/fi";
import "./FormsPage.css";

// Reusable Form Components
const FormInput = ({
  type = "text",
  icon,
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`form-group ${error ? "has-error" : ""} ${className}`}>
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input-field ${error ? "error" : ""}`}
          {...props}
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

const PasswordInput = ({
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`form-group ${error ? "has-error" : ""} ${className}`}>
      <div className="input-wrapper">
        <FiLock className="input-icon" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input-field ${error ? "error" : ""}`}
          {...props}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

const RadioGroup = ({
  label = "",
  options = [],
  name,
  selectedValue,
  onChange,
  error,
  className = "",
}) => {
  return (
    <div className={`form-group ${error ? "has-error" : ""} ${className}`}>
      {label && <label>{label}</label>}
      <div className="radio-group">
        {options.map((option) => (
          <label key={option.value} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
            />
            <span className="radio-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

const Checkbox = ({
  label = "",
  name,
  checked = false,
  onChange,
  className = "",
}) => {
  return (
    <div className={`form-group checkbox-group ${className}`}>
      <label className="checkbox-option">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="checkbox-custom"></span>
        {label}
      </label>
    </div>
  );
};

const SelectInput = ({
  label = "",
  options = [],
  value,
  onChange,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`form-group ${error ? "has-error" : ""} ${className}`}>
      {label && <label>{label}</label>}
      <div className="select-wrapper">
        <select
          value={value}
          onChange={onChange}
          className="select-field"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FiChevronDown className="select-arrow" />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

const TextareaInput = ({
  label = "",
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  rows = 4,
  ...props
}) => {
  return (
    <div className={`form-group ${error ? "has-error" : ""} ${className}`}>
      {label && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`textarea-field ${error ? "error" : ""}`}
        {...props}
      ></textarea>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// Demo Form Page Component
const FormsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    subscription: "basic",
    comments: "",
    remember: false,
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const subscriptionOptions = [
    { value: "basic", label: "Basic" },
    { value: "pro", label: "Pro" },
    { value: "enterprise", label: "Enterprise" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      title: "Text Input with Icon",
      code: `<FormInput
  type="text"
  icon={<FiUser />}
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  error={errors.name}
/>`,
    },
    {
      title: "Password Input with Toggle",
      code: `<PasswordInput
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  error={errors.password}
/>`,
    },
    {
      title: "Radio Button Group",
      code: `const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
];

<RadioGroup
  label="Gender"
  options={genderOptions}
  name="gender"
  selectedValue={gender}
  onChange={handleChange}
  error={errors.gender}
/>`,
    },
  ];

  return (
    <div className="forms-page">
      <header className="page-header">
        <h1>Form Components</h1>
        <p className="page-description">
          Interactive form elements with validation, various input types, and
          submission states.
        </p>
      </header>

      <section className="form-section">
        <h2 className="section-title">Registration Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          {submitSuccess && (
            <div className="form-success">
              <FiCheck className="success-icon" />
              Form submitted successfully!
            </div>
          )}

          <FormInput
            type="text"
            icon={<FiUser />}
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormInput
            type="email"
            icon={<FiMail />}
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <PasswordInput
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <RadioGroup
            label="Gender"
            options={genderOptions}
            name="gender"
            selectedValue={formData.gender}
            onChange={handleChange}
            error={errors.gender}
          />

          <SelectInput
            label="Subscription Plan"
            options={subscriptionOptions}
            name="subscription"
            value={formData.subscription}
            onChange={handleChange}
          />

          <TextareaInput
            label="Additional Comments"
            placeholder="Your comments here..."
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />

          <div className="form-row">
            <Checkbox
              label="Remember me"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <Checkbox
              label="I agree to terms and conditions"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              error={errors.agree}
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Processing...
                </>
              ) : (
                "Submit Form"
              )}
            </button>
            <button type="button" className="reset-btn">
              Reset
            </button>
          </div>
        </form>
      </section>

      <section className="form-section">
        <h2 className="section-title">Input Types</h2>
        <div className="input-types-grid">
          <FormInput type="text" label="Text Input" placeholder="Enter text" />
          <FormInput
            type="email"
            label="Email Input"
            placeholder="Enter email"
          />
          <PasswordInput label="Password Input" placeholder="Enter password" />
          <FormInput
            type="number"
            label="Number Input"
            placeholder="Enter number"
          />
          <FormInput type="date" label="Date Input" icon={<FiCalendar />} />
          <FormInput type="time" label="Time Input" />
          <div className="form-group">
            <label>Color Picker</label>
            <input type="color" className="input-color" />
          </div>
          <div className="form-group">
            <label>Range Slider</label>
            <input type="range" min="0" max="100" className="input-range" />
          </div>
          <div className="form-group">
            <label>File Upload</label>
            <div className="file-upload-wrapper">
              <label className="file-upload-label">
                <FiUpload className="upload-icon" />
                <span>Choose file</span>
                <input type="file" className="input-file" />
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="usage-section">
        <h2 className="section-title">Usage Examples</h2>
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
            <pre className="vs-code-dark">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FormsPage;
