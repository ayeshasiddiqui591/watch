import React from 'react';
import './AboutPage.css'; // Ensure you create this CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <div className="logo">WATCHES</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/featured">Featured</a>
          <a href="/new">New</a>
        </nav>
      </header>
      
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our store! We specialize in custom-made luxury timepieces designed to last a lifetime.
        </p>
        <h2>Contact Us</h2>
        <p>
          Email: support@watches.com<br />
          Phone: +1-800-123-4567<br />
          Address: 123 Timepiece Lane, Watch City, WC 56789
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
