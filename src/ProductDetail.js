import React from 'react';
import './ProductDetail.css'; // You'll create this CSS file for styling
import w5 from './w5.jpg';
import { useNavigate } from 'react-router-dom';
const ProductDetail = () => {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate('/OrderForm'); // Navigate to the order form page
  };
  return (
  
    <div className="product-detail-container">
      <div className="image-section">
        <img 
          src={w5}
          alt="Product Name" 
          className="product-image"
        />
      </div>
      <div className="details-section">
        <h1>Timex Ironman Main Line Digital Round Dial Men Quartz Digital - TW5M57900UJ</h1>
        <div className="price-section">
          <span className="mrp">MRP ₹8,397</span>
          <span className="discounted-price">₹11,995</span>
          <span className="discount">30% Off</span>
        </div>
        <p>Inclusive of all taxes</p>
        <div className="payment-options">
          Or 3 interest free payments of ₹2,799 <span className="simpl">Simpl</span>
        </div>
        <div className="availability">
          <span className="status">In Stock</span>
        </div>
        <div className="size-section">
          <label>Size</label>
          <div className="size-box">46.5 mm</div>
        </div>
        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
        <div className="offers-section">
          <h3>Available Offer</h3>
          <ul>
            <li>Rs. 500/- off, only applicable for Prepaid orders above 3k. Pay using Simpl</li>
            <li>Use code <b>JWAD20</b> to enjoy a 20% discount on all non-discounted products</li>
            <li>Extra 10% off on your first purchase use code - <b>WELCOME10</b></li>
          </ul>
        </div>
        <div className="product-features">
          <h3>Product Features :</h3>
          <p>List the product features here...</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
