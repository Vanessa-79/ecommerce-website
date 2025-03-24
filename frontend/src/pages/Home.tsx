import React, { useState, useEffect, useRef } from 'react';
import { Heart, ShoppingBag, ChevronRight, Star, ChevronDown, ChevronDownIcon, Mail, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Category, Product, Testimonial } from '../types';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const DreamWearHomepage = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("new");
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showCollection, setShowCollection] = useState(false);

  const heroRef = useRef(null);
  const navigate = useNavigate();

  // Set loaded state after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Featured products by category
  const productsByCategory = {
    new: [
      {
        id: 1,
        name: "Silk Pajama Set",
        price: 89.99,
        image: "../../src/assets/images/night1.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.8,
        reviewCount: 124,
        description: "Luxurious silk pajama set for ultimate comfort",
        isFeatured: true,
        isNew: true,
        discount: 0,
      },
      {
        id: 2,
        name: "Elegant Night Robe",
        price: 69.99,
        image: "../../src/assets/images/night2.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.7,
        reviewCount: 98,
        description: "Elegant and comfortable night robe",
        isFeatured: true,
        isNew: true,
        discount: 0,
      },
      {
        id: 3,
        name: "Cozy Sleep Set",
        price: 79.99,
        image: "../../src/assets/images/night3.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.5,
        reviewCount: 87,
        description: "Perfect for a cozy night's sleep",
        isFeatured: true,
        isNew: true,
        discount: 0,
      },
      {
        id: 4,
        name: "Luxury Night Dress",
        price: 59.99,
        image: "../../src/assets/images/night4.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.6,
        reviewCount: 115,
        description: "Luxurious and comfortable night dress",
        isFeatured: true,
        isNew: true,
        discount: 0,
      },
    ],
    popular: [
      {
        id: 5,
        name: "Cotton Nightgown",
        price: 49.99,
        image: "../../src/assets/images/night5.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.9,
        reviewCount: 205,
        description: "Breathable cotton nightgown for warm nights",
        isFeatured: false,
        isNew: false,
        discount: 0,
      },
      {
        id: 6,
        name: "Satin Sleep Mask",
        price: 19.99,
        image: "../../src/assets/images/night6.jpg",
        category: "Accessories",
        inStock: true,
        rating: 4.8,
        reviewCount: 163,
        description: "Luxurious satin sleep mask for uninterrupted sleep",
        isFeatured: false,
        isNew: false,
        discount: 0,
      },
      {
        id: 7,
        name: "Fleece Pajama Set",
        price: 64.99,
        image: "../../src/assets/images/night1.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.7,
        reviewCount: 178,
        description: "Warm and cozy fleece pajama set for winter",
        isFeatured: false,
        isNew: false,
        discount: 0,
      },
      {
        id: 8,
        name: "Silk Sleeping Bonnet",
        price: 29.99,
        image: "../../src/assets/images/night2.jpg",
        category: "Accessories",
        inStock: true,
        rating: 4.6,
        reviewCount: 142,
        description: "Silk bonnet to protect your hair while sleeping",
        isFeatured: false,
        isNew: false,
        discount: 0,
      },
    ],
    sale: [
      {
        id: 9,
        name: "Lace Trim Camisole",
        originalPrice: 54.99,
        price: 39.99,
        image: "../../src/assets/images/night3.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.5,
        reviewCount: 88,
        description: "Elegant lace trim camisole with adjustable straps",
        isFeatured: false,
        isNew: false,
        discount: 27,
      },
      {
        id: 10,
        name: "Velvet Robe",
        originalPrice: 89.99,
        price: 69.99,
        image: "../../src/assets/images/night4.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.7,
        reviewCount: 76,
        description: "Luxurious velvet robe with belt",
        isFeatured: false,
        isNew: false,
        discount: 22,
      },
      {
        id: 11,
        name: "Cotton Shorts Set",
        originalPrice: 59.99,
        price: 44.99,
        image: "../../src/assets/images/night5.jpg",
        category: "Women's Nightwear",
        inStock: true,
        rating: 4.4,
        reviewCount: 93,
        description: "Comfortable cotton shorts set for summer nights",
        isFeatured: false,
        isNew: false,
        discount: 25,
      },
      {
        id: 12,
        name: "Satin Pillowcase",
        originalPrice: 34.99,
        price: 24.99,
        image: "../../src/assets/images/night6.jpg",
        category: "Accessories",
        inStock: true,
        rating: 4.8,
        reviewCount: 132,
        description: "Satin pillowcase for hair and skin protection",
        isFeatured: false,
        isNew: false,
        discount: 29,
      },
    ],
  };

  const categories: Category[] = [
    {
      name: "Women's Nightwear",
      image: "../../src/assets/images/night5.jpg",
      count: 42,
    },
    {
      name: "Women's Gymwear",
      image: "../../src/assets/images/night6.jpg",
      count: 36,
    },
    {
      name: "Children's Clothing",
      image: "../../src/assets/images/13189.jpg",
      count: 28,
    },
    {
      name: "Sale Items",
      image: "../../src/assets/images/31427.jpg",
      count: 64,
    },
  ];

  const collections = [
    {
      name: "Summer Dream",
      image: "/assets/images/night1.jpg",
      description: "Light and airy nightwear for warm summer nights",
      itemCount: 24,
    },
    {
      name: "Cozy Winter",
      image: "../../src/assets/images/night2.jpg",
      description: "Warm and comfortable nightwear for cold winter nights",
      itemCount: 18,
    },
    {
      name: "Luxury Silk",
      image: "../../src/assets/images/night3.jpg",
      description: "Premium silk nightwear for the ultimate luxury experience",
      itemCount: 16,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      text: "The quality of the nightwear is exceptional. So comfortable and stylish! I've ordered several pieces and each one exceeds my expectations. The attention to detail is impressive.",
      avatar: "../../src/assets/images/products/avatar1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Emily Davis",
      location: "London",
      text: "My daughter loves her new overalls. The fit is perfect and the material is durable. Even after multiple washes, they look as good as new. Will definitely be ordering more!",
      avatar: "../../src/assets/images/products/avatar2.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Michelle Wong",
      location: "Singapore",
      text: "The gym wear is both functional and fashionable. Highly recommend! The fabric is breathable yet supportive, and the designs are flattering. Perfect for my yoga sessions.",
      avatar: "../../src/assets/images/products/avatar3.jpg",
      rating: 5,
    },
  ];

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (product: Product) => {
    toast.success(`${product.name} added to cart!`, {
      icon: "🛍️",
      style: {
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #e2e8f0",
        padding: "16px",
        color: "#4b5563",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      },
    });
    // TODO: Implement actual cart functionality
  };

  const handleAddToWishlist = (product: Product) => {
    toast.success(`${product.name} added to wishlist!`, {
      icon: "❤️",
      style: {
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #e2e8f0",
        padding: "16px",
        color: "#4b5563",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      },
    });
    // TODO: Implement actual wishlist functionality
  };

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast.success("Thank you for subscribing!", {
        icon: "✉️",
        style: {
          background: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #e2e8f0",
          padding: "16px",
          color: "#4b5563",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        },
      });
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Animated Loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-3xl font-bold text-yellow-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              DreamWear
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Quick Cart Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 shadow-lg rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full flex items-center shadow-lg transform transition hover:scale-105"
          onClick={() => navigate("/cart")}
        >
          <ShoppingBag size={24} />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            3
          </span>
        </button>
      </motion.div>

      {/* Promo Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            className="bg-gradient-to-r from-yellow-500 to-teal-600 text-white py-3 relative"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto text-center">
              <p className="text-sm font-medium">
                🌟 FREE SHIPPING ON ORDERS OVER $75 • USE CODE:{" "}
                <span className="bg-white/20 px-2 py-1 rounded">DREAMSHIP</span>
              </p>
              <button
                onClick={() => setShowPromo(false)}
                className="absolute right-4 top-2 text-white hover:text-teal-200 transition"
                aria-label="Close promotion"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="relative h-[100vh] overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="width: 12px; height: 12px; margin: 0 6px;"></span>`;
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="h-full w-full"
          >
            <SwiperSlide>
              <div className="relative h-full w-full overflow-hidden">
                <motion.img
                  src="../../src/assets/images/night4.jpg"
                  alt="Hero 1"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-300/70 via-teal-300/40 to-transparent flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white max-w-xl ml-8 md:ml-20 p-6"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="inline-block px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full mb-4"
                    >
                      NEW ARRIVAL
                    </motion.span>
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      Summer Collection <br /> 2025
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl mb-8 text-white/90 max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      Discover our latest nightwear collection designed for
                      ultimate comfort and style this summer.
                    </motion.p>
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <motion.button
                        onClick={() => navigate("/category/womens-nightwear")}
                        className="bg-gradient-to-r from-teal-600 to-yellow-300 text-white px-8 py-3 rounded-full hover:from-teal-700 hover:to-yellow-400 transition transform hover:scale-105 flex items-center justify-center gap-2"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Shop Now <ChevronRight size={18} />
                      </motion.button>
                      <motion.button
                        className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white/10 transition flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Lookbook
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <motion.img
                  src="../../src/assets/images/night2.jpg"
                  alt="Hero 2"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-800/40 to-transparent flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white max-w-xl ml-8 md:ml-20 p-6"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full mb-4"
                    >
                      LUXURIOUS COMFORT
                    </motion.span>
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Elegant Comfort <br /> For Every Night
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl mb-8 text-white/90 max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Experience luxury in every thread with our premium
                      selection crafted for your best night's sleep.
                    </motion.p>
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.button
                        onClick={() => navigate("/products")}
                        className="bg-gradient-to-r from-teal-600 to-yellow-500 text-white px-8 py-3 rounded-full hover:from-teal-700 hover:to-yellow-600 transition transform hover:scale-105 flex items-center justify-center gap-2"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Explore Collection <ChevronRight size={18} />
                      </motion.button>
                      <motion.button
                        className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white/10 transition flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev !hidden md:!flex !left-6 !text-white !bg-teal-600/40 hover:!bg-teal-600/70 !w-12 !h-12 !rounded-full after:!text-lg transition-all duration-300"></div>
        <div className="swiper-button-next !hidden md:!flex !right-6 !text-white !bg-teal-600/40 hover:!bg-teal-600/70 !w-12 !h-12 !rounded-full after:!text-lg transition-all duration-300"></div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-sm mb-2">Scroll down</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDownIcon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide selection of categories designed for comfort and
              style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                category={category}
                onClick={() => handleCategoryClick(category.name)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and trending products
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-teal-200 rounded-full p-1 bg-white shadow-sm">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === "new"
                    ? "bg-teal-600 text-white"
                    : "text-gray-700 hover:bg-teal-50"
                }`}
                onClick={() => setActiveTab("new")}
              >
                New Arrivals
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === "popular"
                    ? "bg-teal-600 text-white"
                    : "text-gray-700 hover:bg-teal-50"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === "sale"
                    ? "bg-teal-600 text-white"
                    : "text-gray-700 hover:bg-teal-50"
                }`}
                onClick={() => setActiveTab("sale")}
              >
                On Sale
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsByCategory[activeTab].map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onAddToWishlist={() => handleAddToWishlist(product)}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Products <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-teal-100 mb-6 max-w-md">
                Sign up to receive updates on new collections, special offers
                and other discount information.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex w-full max-w-md"
              >
                <div className="relative flex-grow">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-10 pr-3 py-3 rounded-l-full border-0 focus:ring-2 focus:ring-teal-300 text-gray-800"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-teal-600 px-6 py-3 rounded-r-full hover:bg-teal-50 transition-colors flex items-center"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Subscriber Benefits
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Early access to new collections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Exclusive subscriber-only discounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Free shipping on your first order</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Invitations to special events</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-white/80 mb-3 text-sm">
                    {collection.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">
                      {collection.itemCount} Items
                    </span>
                    <button className="text-white flex items-center gap-1 text-sm group-hover:text-teal-300 transition-colors">
                      View Collection <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Customer Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers are saying about us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/testimonials"
              className="text-teal-600 inline-flex items-center"
            >
              View all testimonials <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DreamWearHomepage;