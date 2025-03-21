import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Heart, Search } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", href: '/' },
    { name: "Products", href: '/products' },
    { name: "Categories", href: '/categories', submenu: [
      { name: "Women's Nightwear", href: '/category/womens-nightwear' },
      { name: "Women's Gymwear", href: '/category/womens-gymwear' },
      { name: "Children's Clothing", href: '/category/childrens-clothing' },
    ]},
    { name: 'Sale', href: '/category/sale' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl text-white hover:text-purple-200 transition">
            DreamWear
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-purple-200 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search, Cart, and User Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-purple-200"
              />
              <Search className="w-5 h-5 text-purple-200 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </form>
            <Link to="/wishlist" className="text-white hover:text-purple-200 transition relative">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            <Link to="/cart" className="text-white hover:text-purple-200 transition relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            <Link to="/login" className="text-white hover:text-purple-200 transition">
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-white">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-indigo-700"
          >
            <div className="px-4 py-2">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-purple-200"
                />
                <Search className="w-5 h-5 text-purple-200 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </form>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-white hover:text-purple-200 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-2 text-white hover:text-purple-200 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </Link>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-white hover:text-purple-200 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}