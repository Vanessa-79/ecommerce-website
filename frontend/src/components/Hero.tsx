import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613521973937-ed3141c3de44?auto=format&fit=crop&q=80"
          alt="Cozy nightwear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Sweet Dreams in Style
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover our collection of luxurious nightwear for the whole family. 
            Comfort meets elegance in every piece.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;