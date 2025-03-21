import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../types';
import { toast } from 'react-hot-toast';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Simulated data
        const mockProduct: Product = {
          id: 1,
          name: "Silk Pajama Set",
          price: 89.99,
          image: "/assets/products/pajama-set.jpg",
          category: "Women's Nightwear",
          inStock: true,
          description: "Luxurious silk pajama set for ultimate comfort. Made with 100% pure silk, this set includes a long-sleeve top and matching pants. Perfect for a comfortable night's sleep.",
        };
        setProduct(mockProduct);

        // Fetch related products
        const mockRelatedProducts: Product[] = [
          // Add mock related products
        ];
        setRelatedProducts(mockRelatedProducts);
      } catch (error) {
        toast.error('Failed to load product details. Please try again later.');
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!product) return;
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    toast.success(`${product.name} added to cart!`);
    // TODO: Implement actual cart functionality
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    toast.success(`${product.name} added to wishlist!`);
    // TODO: Implement actual wishlist functionality
  };

  if (loading) {
  return (
      <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg h-96 animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-100 rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-gray-100 rounded w-1/4 animate-pulse" />
              <div className="h-24 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <button
            onClick={() => navigate('/products')}
            className="text-indigo-600 hover:text-indigo-500"
          >
            Return to products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={handleAddToWishlist}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
            </button>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-gray-600">(4.8/5)</span>
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Size</h3>
              <div className="flex gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                  }`}
                >
                    {size}
                </button>
              ))}
            </div>
          </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black"
              >
                  -
              </button>
                <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black"
              >
                  +
              </button>
            </div>
          </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Product Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-gray-600" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span className="text-sm">30 Day Returns</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}