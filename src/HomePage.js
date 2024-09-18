import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HomePage.css';
import watchImage from './watch.jpg';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const navigateToWatchList = () => {
    navigate('/watchList'); // Use navigate to route to /watchList
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">WATCHES</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/AboutPage">About</a>
          <a href="/featured">Featured</a>
          <a href="/new">New</a>
        </nav>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
        </div>
      </header>

      <div className="banner">
        <div className="banner-content">
          <h1>Baume Custom Timepiece Small Second</h1>
          <p>$620</p>
          <button className="add-to-cart">Add to Cart</button>
          <button className="learn-more">Learn More</button>
          <button className="add-to-cart" onClick={navigateToWatchList}>
            Get Started
          </button>
        </div>
        <div className="banner-image">
          <img src={watchImage} alt="Baume Custom Timepiece Small Second" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
