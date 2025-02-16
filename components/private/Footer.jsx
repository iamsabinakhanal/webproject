import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We offer a wide range of accessories for rent, making it easier for you to access high-quality items at affordable rates.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/rentals">Rentals</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@rentaccessories.com</p>
          <p>Phone: +1 (234) 567-890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Rent Accessories | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
