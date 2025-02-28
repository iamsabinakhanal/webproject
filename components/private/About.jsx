import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our accessory rental service. We offer a wide variety of high-quality accessories for rent, perfect for any occasion.</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide an affordable and convenient way for you to access luxury accessories without the high costs of ownership. We believe everyone deserves to feel confident and stylish, whether for a special event or just for everyday life.
        </p>

        <h2>Why Rent From Us?</h2>
        <ul>
          <li>Wide selection of premium accessories</li>
          <li>Affordable prices with flexible rental periods</li>
          <li>Easy online booking and delivery services</li>
          <li>Quality checked and cleaned accessories</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          1. Browse our collection of accessories.
          <br />
          2. Select the items you want to rent and choose your rental period.
          <br />
          3. Get your accessories delivered to your doorstep.
          <br />
          4. Enjoy your accessory and return it at the end of the rental period.
        </p>
      </section>

      <section className="about-footer">
        <h3>Contact Us</h3>
        <p>If you have any questions or need assistance, feel free to reach out to our customer support team!</p>
      </section>
    </div>
  );
};

export default About;
