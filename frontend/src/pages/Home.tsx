import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-display font-bold text-secondary text-center mb-12">
          Our Professional Services
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
          We offer a range of professional services to ensure you have the best experience with our products. 
          From personalized consultations to styling advice, we are here to help you find the perfect nightwear.
        </p>
      </div>
    </div>
  );
};

export default Home;