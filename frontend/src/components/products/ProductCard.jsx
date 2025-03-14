import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { addToCart } from '../../store/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch(addToCart({
      product_id: product.id,
      quantity: 1
    }))
      .unwrap()
      .then(() => {
        toast.success(`${product.name} added to cart!`);
      })
      .catch((error) => {
        toast.error(error || 'Failed to add to cart');
      });
  };
  
  return (
    <Link to={`/product/${product.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative pb-[125%] overflow-hidden">
          {product.primary_image ? (
            <img
              src={product.primary_image.image}
              alt={product.primary_image.alt_text || product.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
          
          {product.discount_percentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{product.discount_percentage}%
            </div>
          )}
          
          {product.is_new && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
          
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-white text-primary-600 p-2 rounded-full shadow-md opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary-600 hover:text-white"
          >
            <ShoppingBagIcon className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="text-sm text-gray-500">{product.category_name}</h3>
          <h2 className="text-lg font-medium text-gray-900 mt-1">{product.name}</h2>
          
          <div className="mt-2 flex items-center">
            {product.discount_price ? (
              <>
                <span className="text-lg font-bold text-primary-600">${product.discount_price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary-600">${product.price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 