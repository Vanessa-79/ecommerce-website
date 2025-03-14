import React from 'react';
import ProductCard from './ProductCard';

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
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-secondary text-center mb-12">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
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
    </section>
  );
};

export default CategorySection;