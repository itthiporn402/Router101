import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products'; 
import Product from './pages/Product';    

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
