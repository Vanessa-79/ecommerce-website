import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Silk Pajama Set",
    price: 89.99,
    category: "Adults",
    image: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Kids Unicorn Onesie",
    price: 34.99,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1595034313282-a31ff8060862?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Baby Sleep Sack",
    price: 29.99,
    category: "Baby",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Cotton Nightgown",
    price: 45.99,
    category: "Adults",
    image: "https://images.unsplash.com/photo-1616594092403-fb65629b0a46?auto=format&fit=crop&q=80"
  },
  // Add more products here
];

const ProductList = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProducts = filterCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === filterCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-display font-bold text-secondary mb-4 md:mb-0">
          Our Collections
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="all">All Categories</option>
              <option value="adults">Adults</option>
              <option value="kids">Kids</option>
              <option value="baby">Baby</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;