import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import CategorySection from './components/CategorySection';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;