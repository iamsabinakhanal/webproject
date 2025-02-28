import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/BagGallery'; // Import the corresponding CSS file

const BagGallery = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    // Fetch bag data from the backend
    axios.get('http://localhost:5000/api/bags')
      .then(response => {
        setBags(response.data);
      })
      .catch(error => {
        console.error('Error fetching bag data:', error);
      });
  }, []);

  return (
    <div className="bag-gallery">
      {bags.map(bag => (
        <div key={bag.id} className="bag-item">
          <img src={`http://localhost:5000${bag.imageUrl}`} alt={bag.name} />
          <h3>{bag.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default BagGallery;
