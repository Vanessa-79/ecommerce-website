import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const heroSlides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Up to 70% Off",
    description: "Discover the latest trends in summer fashion",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh Styles Daily",
    description: "Be the first to get your hands on our newest items",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3",
    buttonText: "Explore",
  },
  {
    id: 3,
    title: "Exclusive Deals",
    subtitle: "Limited Time Offers",
    description: "Don't miss out on our special promotions",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    buttonText: "View Deals",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[600px] overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-lg font-medium tracking-wider uppercase">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-xl mx-auto text-lg">
                    {slide.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 mt-8 text-lg font-medium text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700"
                  >
                    {slide.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}