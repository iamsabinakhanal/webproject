import React from "react";
import '../../styles/Content.css';
import Earring from '../../assets/images/Earring.jpg';
import Necklace from '../../assets/images/Necklace.jpg';
import Ringset from '../../assets/images/Ringset.jpg';
import Earring2 from '../../assets/images/Earring2.jpg';
import Choker from '../../assets/images/Choker.jpg';

const Content = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="navimage"
        style={{ backgroundImage: `url(${Choker})` }}
      >
        <h2 className="text-4xl font-bold">SHINE BRIGHTER THAN YOUR DIAMONDS</h2>
        <p className="mt-2">The silent language of self-expression</p>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-full shadow-md">
          Rent Now →
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="shop-section">
          <div className="box">
            <div className="box-content">
              <div
                className="box-image"
                style={{ backgroundImage: `url(${Earring})` }}
              ></div>
              <p>See more collection</p>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <div
                className="box-image"
                style={{ backgroundImage: `url(${Necklace})` }}
              ></div>
              <p>See more collection</p>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>EARRING QUIZ REVEALS YOUR STYLE SET</h2>
              <div
                className="box-image"
                style={{ backgroundImage: `url(${Ringset})` }}
              ></div>
              <p>Take the quiz</p>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>LUXURY OF LOVE</h2>
              <div
                className="box-image"
                style={{ backgroundImage: `url(${Earring2})` }}
              ></div>
              <p>Shop the collection</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;