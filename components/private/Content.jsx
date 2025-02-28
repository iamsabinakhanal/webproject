import React from 'react';
import Earring from '../../assets/images/Earring.jpg';
import Choker from '../../assets/images/Choker.jpg';
import Ringset from '../../assets/images/Ringset.jpg';
import Crown2 from '../../assets/images/Crown2.jpg';
import Gold1 from '../../assets/images/Gold1.jpg';
import Temple from '../../assets/images/Temple1.jpg';
import Necklace from '../../assets/images/Necklace.jpg';
import Bags from '../../assets/images/Bag2.jpg';

const items = [
  { image: Earring, text: "See more collection" },
  { image: Choker, text: "See more collection" },
  { image: Ringset, text: "See more collection" },
  { image: Crown2, text: "See more collection" },
  { image: Gold1, text: "See more collection" },
  { image: Temple, text: "See more collection" },
  { image: Necklace, text: "See more collection" },
  { image: Bags, text: "See the collection" },
];

const Content = () => {
  console.log(Necklace, Earring, Choker, Ringset, Crown2, Gold1, Temple, Bags); // Debugging

  return (
    <div>
      {/* Hero Section */}
      <div className="navimage" style={{ backgroundImage: `url(${Necklace})` }}>
        <h2 className="button">RENT NOW PAY LATER</h2>
        <p className="mt-2">The silent language of self-expression</p>
        <button className="button">
          Rent Now →
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="shop-section">
          {items.map((item, index) => (
            <div key={index} className="box">
              <div className="box-content">
                <div
                  className="box-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                  alt="product image" // Adding alt attribute for accessibility
                ></div>
                <p className="box-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
