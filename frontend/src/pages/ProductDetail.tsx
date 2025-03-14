import React, { useState } from 'react';
import { Heart, ShoppingCart, Minus, Plus, Star } from 'lucide-react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('m');

  const sizes = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?auto=format&fit=crop&q=80"
            alt="Silk Pajama Set"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-secondary">Silk Pajama Set</h1>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">(24 reviews)</span>
            </div>
          </div>

          <p className="text-2xl font-bold text-secondary">$89.99</p>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">
              Luxurious silk pajama set designed for ultimate comfort. Features a classic collar,
              button-up front, and elastic waistband. Made from 100% pure mulberry silk.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {sizes.map(size => (
                <button
                  key={size.value}
                  className={`py-2 text-sm font-medium rounded-md ${
                    selectedSize === size.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(size.value)}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center mt-2">
              <button
                className="p-2 border rounded-l-md hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-16 text-center border-t border-b"
              />
              <button
                className="p-2 border rounded-r-md hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;