import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, ChevronDown, Heart } from 'lucide-react';

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

      {/* Hero Section */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-r from-navy-900 to-transparent">
          <img
            src="https://images.unsplash.com/photo-1581574211280-1c1c1c1c1c1c"
            alt="Dream Wear Collection"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10 bg-secondary ">
          <div className="max-w-lg animate-fadeIn">
            <h2 className="text-5xl font-bold mb-6 text-orange-600">
              Sleep in Luxurious Comfort
            </h2>
            <p className="text-lg mb-8 text-orange-600">
              Experience the perfect blend of style and comfort with our premium
              dreamwear collection. Designed for the perfect night's sleep.
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                Shop Women
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-navy-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                Shop Men
              </button>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-4 right-4 opacity-40 rotate-12">
          <p className="text-xl font-bold">Dream Wear</p>
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