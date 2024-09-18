// OrderForm.js
import React, { useState } from 'react';
import './OrderForm.css'; // Add this CSS file for styling

const OrderForm = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true); // Show success message after form submission
  };

  return (
    <div className="order-form-container">
      {!orderPlaced ? (
        <form className="order-form" onSubmit={handleSubmit}>
          <h1>Order Details</h1>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Address:
            <textarea name="address" required />
          </label>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="confirmation-box">
          <h2>Order Placed Successfully!</h2>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
