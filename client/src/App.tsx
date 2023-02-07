import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Mailing } from './components/Mailing/Mailing';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './pages/Main';
import { ProductsPage } from './pages/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
