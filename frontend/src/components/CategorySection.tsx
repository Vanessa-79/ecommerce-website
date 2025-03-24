import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3',
    color: 'bg-pink-500',
    items: '2,345',
  },
  {
    id: 2,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3',
    color: 'bg-blue-500',
    items: '1,234',
  },
  {
    id: 3,
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3',
    color: 'bg-green-500',
    items: '3,456',
  },
  {
    id: 4,
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3',
    color: 'bg-purple-500',
    items: '987',
  },
  {
    id: 5,
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3',
    color: 'bg-red-500',
    items: '1,789',
  },
  {
    id: 6,
    name: 'Toys & Kids',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3',
    color: 'bg-yellow-500',
    items: '2,123',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shop by Category</h2>
          <p className="mt-4 text-lg text-gray-600">Find what you're looking for in our extensive collection of categories</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link
                to={`/products?category=${category.name.toLowerCase()}`}
                className="block group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white">
                    <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                    <span className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${category.color} bg-opacity-90`}>
                      {category.items} items
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Categories
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}