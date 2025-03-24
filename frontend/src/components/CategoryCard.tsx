import { motion } from 'framer-motion';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
  index?: number;
}

export default function CategoryCard({ category, onClick, index }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
      </div>
    </motion.div>
  );
} 