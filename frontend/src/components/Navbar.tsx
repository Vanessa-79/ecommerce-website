import React from 'react';
import { ShoppingCart, Moon, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Moon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-display font-bold text-secondary">DreamWear</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-secondary hover:text-primary transition-colors">Products</Link>
            <Link to="/login" className="text-secondary hover:text-primary transition-colors">Login</Link>
            <Link to="/register" className="text-secondary hover:text-primary transition-colors">Register</Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">About Us</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-secondary hover:text-primary cursor-pointer transition-colors" />
            <ShoppingCart className="h-6 w-6 text-secondary hover:text-primary cursor-pointer transition-colors" />
            <Menu className="h-6 w-6 md:hidden text-secondary cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;