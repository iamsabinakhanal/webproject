import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation to track the current route
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();  // Get the current path using useLocation

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Check if the current path is either signup or login page
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;  // Return nothing if on login or signup pages
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">AccessoryRent</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/browse">Browse Accessories</a></li>
        <li><a href="/Product">My Rentals</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-profile" onClick={toggleDropdown}>
        <a href="#">Profile <span>&#9660;</span></a>
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
