import React, { useState } from 'react';
import '../../styles/Signup.css';

const SignupForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
    } else {
      alert('Sign up successful!');
      // Submit logic here (e.g., API request)
    }
  };

  // Render input fields
  const renderInput = (label, type, name, value) => (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src="/assets/images/logo.png" alt="Logo" className="signup-logo" />
        <h2>Signup for Accessories Rental</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {renderInput('Full Name', 'text', 'name', formData.name)}
        {renderInput('Email Address', 'email', 'email', formData.email)}
        {renderInput('Password', 'password', 'password', formData.password)}
        {renderInput('Confirm Password', 'password', 'confirmPassword', formData.confirmPassword)}
        
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
