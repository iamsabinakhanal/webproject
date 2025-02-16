// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};


export default Navbar;
