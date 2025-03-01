import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../../styles/Dashboard.css';
import Crown2 from'../../assets/images/Crown2.jpg';  // Importing the image

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Horizontal Box for Image */}
      <div className="image-box">
        <img src={Crown2}  alt="Accessories" />  {/* Use the imported image */}
      </div>

      <h1>Rent Now Pay Later</h1>
      <p>"From weddings to parties, corporate events to casual outings, our accessories are perfect for every occasion. 
        Elevate your look with our exquisite pieces.</p>
      <div className="box-container">
        {/* Gold Box */}
        <div className="box">
          <Link to="/gold">
            <h2>Gold</h2>
          </Link>
          <p>Browse our collection of gold accessories available for rental.</p>
        </div>

        {/* Pearls Box */}
        <div className="box">
          <Link to="/pearls">
            <h2>Pearls</h2>
          </Link>
          <p>Explore our range of beautiful pearl accessories for rental.</p>
        </div>

        {/* Diamonds Box */}
        <div className="box">
          <Link to="/diamond">
            <h2>Diamonds</h2>
          </Link>
          <p>Check out our premium diamond collection available for rental.</p>
        </div>

        {/* Bags Box */}
        <div className="box">
          <Link to="/bags">
            <h2>Bags</h2>
          </Link>
          <p>View our stylish bag rental collection.</p>
        </div>

        

        
      </div>
    </div>
  );
};

export default Dashboard;
