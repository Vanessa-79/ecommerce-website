import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Category, Product, Testimonial } from '../types';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DreamWearHomepage = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Products data with local images
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Silk Pajama Set",
      price: 89.99,
      image: "/assets/images/night1.jpg",
      category: "Women's Nightwear",
      inStock: true,
      description: "Luxurious silk pajama set for ultimate comfort",
    },
    {
      id: 2,
      name: "Elegant Night Robe",
      price: 69.99,
      image: "/assets/images/night2.jpg",
      category: "Women's Nightwear",
      inStock: true,
      description: "Elegant and comfortable night robe",
    },
    {
      id: 3,
      name: "Cozy Sleep Set",
      price: 79.99,
      image: "/assets/images/night3.jpg",
      category: "Women's Nightwear",
      inStock: true,
      description: "Perfect for a cozy night's sleep",
    },
    {
      id: 4,
      name: "Luxury Night Dress",
      price: 59.99,
      image: "/assets/images/night4.jpg",
      category: "Women's Nightwear",
      inStock: true,
      description: "Luxurious and comfortable night dress",
    },
  ];
  
  const categories: Category[] = [
    { name: "Women's Nightwear", image: "/assets/images/night5.jpg" },
    { name: "Women's Gymwear", image: "/assets/images/night6.jpg" },
    { name: "Children's Clothing", image: "/assets/images/13189.jpg" },
    { name: "Sale Items", image: "/assets/images/31427.jpg" },
  ];
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      text: "The quality of the nightwear is exceptional. So comfortable and stylish!",
      avatar: "/assets/images/products/avatar1.jpg",
    },
    {
      id: 2,
      name: "Emily Davis",
      location: "London",
      text: "My daughter loves her new overalls. The fit is perfect and the material is durable.",
      avatar: "/assets/images/products/avatar2.jpg",
    },
    {
      id: 3,
      name: "Michelle Wong",
      location: "Singapore",
      text: "The gym wear is both functional and fashionable. Highly recommend!",
      avatar: "/assets/images/products/avatar3.jpg",
    },
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
  
  const handleAddToCart = (product: Product) => {
    toast.success(`${product.name} added to cart!`);
    // TODO: Implement actual cart functionality
  };

  const handleAddToWishlist = (product: Product) => {
    toast.success(`${product.name} added to wishlist!`);
    // TODO: Implement actual wishlist functionality
  };

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
  };
  
  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      {showPromo && (
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 relative">
          <div className="container mx-auto text-center">
            <p className="text-sm font-medium">
              🌟 FREE SHIPPING ON ORDERS OVER $75 • USE CODE: DREAMSHIP
            </p>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-2 text-white hover:text-purple-200"
              aria-label="Close promotion"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gray-100">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img src="/assets/images/night1.jpg" alt="Hero 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white max-w-xl ml-20"
                >
                  <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
                  <p className="text-xl mb-8">Discover our latest nightwear collection</p>
                  <button 
                    onClick={() => navigate('/category/womens-nightwear')}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-600 transition transform hover:scale-105"
                  >
                    Shop Now
                </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img src="/assets/images/night2.jpg" alt="Hero 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white max-w-xl ml-20"
                >
                  <h1 className="text-5xl font-bold mb-4">Elegant Comfort</h1>
                  <p className="text-xl mb-8">Experience luxury in every thread</p>
                  <button 
                    onClick={() => navigate('/products')}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-600 transition transform hover:scale-105"
                  >
                    Explore Collection
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
                onClick={() => handleCategoryClick(category.name)}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-500">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
          <p className="text-purple-100 mb-8">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/10 text-white placeholder-purple-200"
              />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition transform hover:scale-105"
            >
                Subscribe
              </button>
          </form>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </div>
  );
};

export default DreamWearHomepage;