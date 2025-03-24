import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const deals = [
  {
    id: '1',
    name: 'Summer Collection Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    discount: 0.4,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Designer Handbag',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    discount: 0.35,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Premium Sneakers',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    discount: 0.3,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Leather Jacket',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    discount: 0.45,
    rating: 4.6,
    reviews: 73,
  },
];

const dealCategories = [
  { name: 'Flash Sale', icon: Clock, color: 'bg-red-100 text-red-600' },
  { name: 'Clearance', icon: Tag, color: 'bg-blue-100 text-blue-600' },
  { name: 'Bundle Deals', icon: Tag, color: 'bg-green-100 text-green-600' },
];

export default function Deals() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Deals</h1>
          <p className="text-lg text-gray-600">
            Don't miss out on these amazing offers - limited time only!
          </p>
        </motion.div>

        {/* Deal Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dealCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.color} rounded-lg p-6 flex items-center justify-between`}
            >
              <div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm opacity-75">Shop Now</p>
              </div>
              <category.icon className="w-8 h-8" />
            </motion.div>
          ))}
        </div>

        {/* Featured Deals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </motion.div>

        {/* Deal Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-indigo-600 rounded-lg p-8 text-center text-white"
        >
          <h3 className="text-2xl font-semibold mb-4">Flash Sale Ends In</h3>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 rounded-lg p-4">
              <span className="text-3xl font-bold">24</span>
              <p className="text-sm mt-1">Hours</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <span className="text-3xl font-bold">45</span>
              <p className="text-sm mt-1">Minutes</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <span className="text-3xl font-bold">30</span>
              <p className="text-sm mt-1">Seconds</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 