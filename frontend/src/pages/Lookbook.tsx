import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LookBook = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Collection 2024",
      image: "/images/lookbook/summer-collection.jpg",
      description: "Discover our latest summer styles featuring breathable fabrics and vibrant colors.",
    },
    {
      id: 2,
      title: "Urban Essentials",
      image: "/images/lookbook/urban-essentials.jpg",
      description: "Modern streetwear meets comfort in our urban essentials collection.",
    },
    {
      id: 3,
      title: "Evening Elegance",
      image: "/images/lookbook/evening-elegance.jpg",
      description: "Sophisticated evening wear for special occasions.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Our Lookbook</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our carefully curated collections that blend contemporary style with timeless elegance.
        Each piece tells a story of craftsmanship and creativity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-white text-sm mb-4">{collection.description}</p>
                <Link
                  to={`/category/${collection.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/products"
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
    </motion.div>
  );
};

export default LookBook;