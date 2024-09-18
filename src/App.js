import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WatchList from './WatchList';
import ProductDetail from './ProductDetail';
import AboutPage from './AboutPage';
import OrderForm from './OrderForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/OrderForm" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
