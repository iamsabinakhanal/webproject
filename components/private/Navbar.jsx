import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility using useCallback for optimization
  const toggleDropdown = useCallback(() => {
    setDropdownVisible((prev) => !prev);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Return nothing if on login or signup pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">AccessoryRent</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/browse" className="nav-link">Browse Accessories</Link></li>
        <li><Link to="/product" className="nav-link">My Rentals</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
      <div
        className="navbar-profile"
        onClick={toggleDropdown}
        ref={dropdownRef}
        aria-expanded={isDropdownVisible}
        aria-haspopup="true"
        tabIndex={0}  // Make the dropdown accessible via keyboard
        onKeyDown={(e) => (e.key === 'Enter' ? toggleDropdown() : null)}
      >
        <span className="profile-text">Profile &#9660;</span>
        {isDropdownVisible && <DropdownMenu closeDropdown={() => setDropdownVisible(false)} />}
      </div>
    </nav>
  );
};

// Separate component for dropdown menu for cleaner code
const DropdownMenu = ({ closeDropdown }) => (
  <div className="dropdown-menu">
    <Link to="/login" className="dropdown-link" onClick={closeDropdown}>Login</Link>
    <Link to="/signup" className="dropdown-link" onClick={closeDropdown}>Sign Up</Link>
  </div>
);

export default Navbar;