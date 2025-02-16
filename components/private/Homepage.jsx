import React from "react";
import '../../styles/HomePage.css';
import Necklace from '../../assets/images/Necklace.jpg';
import Ringset from '../../assets/images/Ringset.jpg';
import Earring2 from '../../assets/images/Earring2.jpg';
import Earring from '../../assets/images/Earring.jpg';

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">FAME</h1>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Collections</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative text-center text-white bg-cover bg-center h-[400px] flex flex-col justify-center items-center" style={{ backgroundImage: 'url(Earring2)' }}>
        <h2 className="text-4xl font-bold">SHINE BRIGHTER THAN YOUR DIAMONDS</h2>
        <p className="mt-2">The silent language of self-expression</p>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-full shadow-md">SHOP NOW →</button>
      </div>

      {/* Featured Accessories */}
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="relative">
          <img src={Necklace} alt="Necklace" className="w-full" />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">Dazzling Rings for After Dark Adventures</div>
        </div>
        <div className="relative">
          <img src={Ringset} alt="Ringset" className="w-full" />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">Embark on a Journey of Shimmering Delights</div>
        </div>
        <div className="relative">
          <img src={Earring2} alt="Earring2" className="w-full" />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">Earring Quiz Reveals Your Style Sets</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
