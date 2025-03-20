import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Button from './Button';
import { ProductCardSkeleton } from './LoadingSkeleton';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  discount?: number;
  rating?: number;
  reviews?: number;
  loading?: boolean;
}

export default function ProductCard({ id, name, price, image, discount, rating, reviews, loading }: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount) : price;

  const handleAddToCart = () => {
    toast.success('Added to cart!');
  };

  const handleAddToWishlist = () => {
    toast.success('Added to wishlist!');
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
    >
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <>
          <Link to={`/product/${id}`} className="block aspect-square overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            {discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                -{Math.round(discount * 100)}% OFF
              </div>
            )}
            <Button
              variant="secondary"
              size="sm"
              onClick={handleAddToWishlist}
              className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              leftIcon={<Heart className="w-5 h-5" />}
            />
          </Link>

          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 truncate">{name}</h3>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {discount && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${price.toFixed(2)}
                    </span>
                  )}
                </div>
                {rating && (
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {reviews && (
                      <span className="ml-1 text-sm text-gray-500">({reviews})</span>
                    )}
                  </div>
                )}
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAddToCart}
                leftIcon={<ShoppingCart className="w-5 h-5" />}
              />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}