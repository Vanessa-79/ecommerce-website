import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, category }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 animate-slide-up">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-secondary font-semibold mt-1">{name}</h3>
        <p className="text-lg font-bold text-secondary mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;