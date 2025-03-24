import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Filter, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Women's Nightwear",
    image: "/images/night5.jpg",
    itemCount: 42,
    description: "Luxurious and comfortable nightwear collection",
    featured: true,
    subcategories: [
      "Pajama Sets",
      "Night Robes",
      "Nightgowns",
      "Sleep Accessories",
    ],
  },
  {
    id: 2,
    name: "Women's Gymwear",
    image: "/images/night6.jpg",
    itemCount: 36,
    description: "High-performance activewear for your fitness journey",
    featured: true,
    subcategories: [
      "Sports Bras",
      "Leggings",
      "Workout Tops",
      "Gym Accessories",
    ],
  },
  {
    id: 3,
    name: "Children's Clothing",
    image: "/images/13189.jpg",
    itemCount: 28,
    description: "Adorable and comfortable clothing for kids",
    featured: true,
    subcategories: ["Pajamas", "Casual Wear", "School Uniforms", "Accessories"],
  },
  {
    id: 4,
    name: "Sale Items",
    image: "/images/31427.jpg",
    itemCount: 64,
    description: "Great deals on selected items",
    featured: true,
    subcategories: [
      "Clearance",
      "Season End Sale",
      "Bundle Deals",
      "Flash Sales",
    ],
  },
  {
    id: 5,
    name: "Accessories",
    image: "/images/night2.jpg",
    itemCount: 95,
    description: "Complete your look with our accessories",
    subcategories: ["Jewelry", "Bags", "Scarves", "Hair Accessories"],
  },
  {
    id: 6,
    name: "Beauty & Care",
    image: "/images/night3.jpg",
    itemCount: 73,
    description: "Premium beauty and self-care products",
    subcategories: ["Skincare", "Haircare", "Bath & Body", "Aromatherapy"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Categories() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-lg text-gray-600">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm">{category.itemCount} Items</p>
                    <p className="text-xs mt-1">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 