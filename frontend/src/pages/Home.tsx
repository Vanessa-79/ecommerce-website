import React, { useState, useEffect } from 'react';
import {  Heart } from 'lucide-react';

const DreamWearHomepage = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Products data with local images
  const featuredProducts = [
    { id: 1, name: 'Silk Dream Pajama Set', price: 89.99, rating: 4.8, image: '/assets/images/night1.jpg' },
    { id: 2, name: 'Cloud Cotton Nightgown', price: 65.99, rating: 4.7, image: '/assets/images/night2.jpg' },
    { id: 3, name: 'Luxury Sleep Mask', price: 24.99, rating: 4.9, image: '/assets/images/night3.jpg' },
    { id: 4, name: 'Cozy Fleece Robe', price: 79.99, rating: 4.6, image: '/assets/images/night4.jpg' },
  ];
  
  const categories = [
    { name: "Women", image: "/assets/images/night5.jpg" },
    { name: "Men", image: "/assets/images/night6.jpg" },
    { name: "Kids", image: "/assets/images/night4.jpg" },
    { name: "Accessories", image: "/assets/images/night4.jpg" },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="font-sans">
      {/* Promo Banner */}
      {showPromo && (
        <div className="bg-orange-500 text-white py-2 relative">
          <div className="container mx-auto text-center">
            <p className="text-sm font-medium">
              FREE SHIPPING ON ORDERS OVER $75 • USE CODE: DREAMSHIP
            </p>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-2 text-white"
              aria-label="Close promotion"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Dynamic Elements and Right Side Image */}
      <section className="relative min-h-[80vh] bg-navy-800 text-white overflow-hidden">
        {/* Base Background Layer */}
        <div className="absolute inset-0 bg-navy-900"></div>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-purple-800 to-navy-800 opacity-80 animate-pulse-slow"></div>

        {/* Dynamic Pattern Overlay */}
        <div className="absolute inset-0 bg-pattern-dots bg-dots-lg opacity-20"></div>

        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Star Elements */}
          <div className="absolute top-1/4 right-1/4 animate-float-slow">
            <div className="w-24 h-24 rounded-full bg-orange-500 opacity-10 blur-xl"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/5 animate-float-medium">
            <div className="w-48 h-48 rounded-full bg-orange-400 opacity-5 blur-xl"></div>
          </div>

          {/* Animated Text Watermarks */}
          <div className="absolute top-1/6 right-1/6 text-white text-opacity-5 font-bold text-8xl transform rotate-12 animate-float-slow">
            Dream
          </div>
          <div className="absolute bottom-1/6 left-1/6 text-white text-opacity-5 font-bold text-8xl transform -rotate-12 animate-float-medium">
            Wear
          </div>

          {/* Particle Effect */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-particle"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Main Content Container - Changed to grid for side-by-side layout */}
        <div className="container mx-auto px-4 py-16 relative z-10 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side Content */}
            <div className="backdrop-blur-sm bg-navy-800/40 p-8 rounded-lg border border-white/10 shadow-glow animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 text-orange-500">
                Sleep in Luxurious Comfort
              </h2>
              <p className="text-lg mb-8 text-white">
                Experience the perfect blend of style and comfort with our
                premium dreamwear collection. Designed for the perfect night's
                sleep.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-300">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-glow-orange">
                  Shop Women
                </button>
                <button className="bg-transparent border border-white hover:bg-white hover:text-navy-800 text-white px-8 py-3 rounded-md font-medium transition-all duration-300">
                  Shop Men
                </button>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative hidden md:block animate-fade-in">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <img
                  src="/assets/images/night1.jpg"
                  alt="Luxury Sleepwear"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-50"></div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 p-4 rounded-full shadow-lg animate-float-slow">
                <div className="text-white font-bold">NEW</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-navy-700 p-6 rounded-lg shadow-lg border border-white/10 animate-float-medium">
                <div className="text-orange-500 font-bold text-lg">PREMIUM</div>
                <div className="text-white text-sm">COLLECTION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image with Overlay (z-index adjusted to be behind content) */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-transparent opacity-90"></div>
          <img
            src="/assets/images/night1.jpg"
            alt="Dream Wear Collection"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Animated Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent"></div>

        {/* Styled Watermark */}
        <div className="absolute bottom-4 right-4 opacity-60 rotate-12 animate-float-slow">
          <p className="text-2xl font-bold font-display text-orange-500/30">
            Dream Wear
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-navy-800">
            Shop by Category
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find your perfect style in our curated collections
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Collection →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-navy-800">
            Trending Now
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our most popular and highly rated products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-navy-800 px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-500 hover:text-white">
                    Add to Cart
                  </button>
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-500 hover:text-white">
                    <Heart size={16} />
                  </button>
                </div>
                <h3 className="font-medium text-navy-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-orange-500">${product.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-md rounded-lg transition-shadow duration-300 bg-white">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-800">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                We use only the finest materials for ultimate comfort and
                durability.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-md rounded-lg transition-shadow duration-300 bg-white">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-800">
                Easy Returns
              </h3>
              <p className="text-gray-600">
                Not satisfied? Return within 30 days for a full refund, no
                questions asked.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-md rounded-lg transition-shadow duration-300 bg-white">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-800">
                Free Shipping
              </h3>
              <p className="text-gray-600">
                Enjoy free standard shipping on all orders over $75 worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the Dream Wear Family
            </h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter for exclusive offers, early access to
              new collections, and sleep tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow bg-navy-700 border border-navy-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DreamWearHomepage;