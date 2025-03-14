import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, clearProductDetails } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { StarIcon, ShieldCheckIcon, TruckIcon, ArrowPathIcon as RefreshIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';




const ProductDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { productDetails, loading, error } = useSelector((state) => state.products);
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    dispatch(fetchProductDetails(slug));
    
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, slug]);
  
  useEffect(() => {
    if (productDetails && productDetails.variants && productDetails.variants.length > 0) {
      // Set default selected size and color from first variant
      const firstVariant = productDetails.variants[0];
      setSelectedSize(firstVariant.size);
      setSelectedColor(firstVariant.color);
      setSelectedVariant(firstVariant);
    }
  }, [productDetails]);
  
  // Find the variant based on selected size and color
  useEffect(() => {
    if (productDetails && productDetails.variants) {
      const variant = productDetails.variants.find(
        (v) => v.size === selectedSize && v.color === selectedColor
      );
      setSelectedVariant(variant || null);
    }
  }, [productDetails, selectedSize, selectedColor]);
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    
    // If the selected color is not available for this size, select the first available color
    const availableVariantsForSize = productDetails.variants.filter((v) => v.size === size);
    if (availableVariantsForSize.length > 0 && !availableVariantsForSize.some((v) => v.color === selectedColor)) {
      setSelectedColor(availableVariantsForSize[0].color);
    }
  };
  
  const handleColorChange = (color) => {
    setSelectedColor(color);
    
    // If the selected size is not available for this color, select the first available size
    const availableVariantsForColor = productDetails.variants.filter((v) => v.color === color);
    if (availableVariantsForColor.length > 0 && !availableVariantsForColor.some((v) => v.size === selectedSize)) {
      setSelectedSize(availableVariantsForColor[0].size);
    }
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error('Please select a size and color');
      return;
    }
    
    dispatch(addToCart({
      product_id: productDetails.id,
      variant_id: selectedVariant.id,
      quantity,
    }))
      .unwrap()
      .then(() => {
        toast.success(`${productDetails.name} added to cart!`);
      })
      .catch((error) => {
        toast.error(error || 'Failed to add to cart');
      });
  };
  
  // Get unique sizes and colors from variants
  const getUniqueSizes = () => {
    if (!productDetails || !productDetails.variants) return [];
    return [...new Set(productDetails.variants.map((v) => v.size))];
  };
  
  const getUniqueColors = () => {
    if (!productDetails || !productDetails.variants) return [];
    return [...new Set(productDetails.variants.map((v) => v.color))];
  };
  
  // Check if a size-color combination is available
  const isVariantAvailable = (size, color) => {
    if (!productDetails || !productDetails.variants) return false;
    const variant = productDetails.variants.find(
      (v) => v.size === size && v.color === color
    );
    return variant && variant.stock > 0;
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  if (!productDetails) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Product not found</h3>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex text-sm">
          <li className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          {productDetails.category_name && (
            <li className="flex items-center">
              <Link to={`/products/${productDetails.category}`} className="text-gray-500 hover:text-primary-600">
                {productDetails.category_name}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
          )}
          <li className="text-gray-900 font-medium">{productDetails.name}</li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          {productDetails.images && productDetails.images.length > 0 ? (
            <>
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mb-4 rounded-lg overflow-hidden"
              >
                {productDetails.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={image.image}
                        alt={image.alt_text || productDetails.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-swiper"
              >
                {productDetails.images.map((image) => (
                  <SwiperSlide key={`thumb-${image.id}`}>
                    <div className="cursor-pointer rounded-md overflow-hidden border-2 border-transparent hover:border-primary-500">
                      <img
                        src={image.image}
                        alt={image.alt_text || `Thumbnail for ${productDetails.name}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{productDetails.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-5 w-5" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">4.9 (120 reviews)</span>
            </div>
            
            <div className="flex items-center mb-4">
              {productDetails.discount_price ? (
                <>
                  <span className="text-3xl font-bold text-primary-600">${productDetails.discount_price}</span>
                  <span className="ml-3 text-lg text-gray-500 line-through">${productDetails.price}</span>
                  <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                    Save {productDetails.discount_percentage}%
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary-600">${productDetails.price}</span>
              )}
            </div>
            
            {productDetails.short_description && (
              <p className="text-gray-600 mb-6">{productDetails.short_description}</p>
            )}
          </div>
          
          {/* Variants Selection */}
          {productDetails.variants && productDetails.variants.length > 0 && (
            <div className="mb-6">
              {/* Size Selection */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-900">Size</label>
                  <a href="#size-guide" className="text-sm text-primary-600 hover:text-primary-500">Size Guide</a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {getUniqueSizes().map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      } ${
                        !getUniqueColors().some((color) => isVariantAvailable(size, color))
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      disabled={!getUniqueColors().some((color) => isVariantAvailable(size, color))}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                  {getUniqueColors().map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`group relative p-1 rounded-full ${
                        selectedColor === color
                          ? 'ring-2 ring-primary-600'
                          : 'ring-1 ring-gray-300'
                      } ${
                        !getUniqueSizes().some((size) => isVariantAvailable(size, color))
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      disabled={!getUniqueSizes().some((size) => isVariantAvailable(size, color))}
                      title={color}
                    >
                      <div
                        className="h-8 w-8 rounded-full"
                        style={{
                          backgroundColor: productDetails.variants.find((v) => v.color === color)?.color_code || color,
                        }}
                      ></div>
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Quantity and Add to Cart */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
            <div className="flex">
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center border-x border-gray-300 focus:outline-none"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!selectedVariant || selectedVariant.stock === 0}
                className={`ml-4 flex-grow btn-primary ${
                  !selectedVariant || selectedVariant.stock === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                {selectedVariant && selectedVariant.stock > 0
                  ? 'Add to Cart'
                  : 'Out of Stock'}
              </button>
            </div>
            
            {selectedVariant && selectedVariant.stock > 0 && selectedVariant.stock < 10 && (
              <p className="mt-2 text-sm text-red-600">
                Only {selectedVariant.stock} left in stock!
              </p>
            )}
          </div>
          
          {/* Product Features */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex">
              <ShieldCheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Quality Guarantee</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Made from premium materials for comfort and durability.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <TruckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Free Shipping</h3>
                <p className="mt-1 text-sm text-gray-500">
                  On all orders over $50. Delivery within 3-5 business days.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <RefreshIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Easy Returns</h3>
                <p className="mt-1 text-sm text-gray-500">
                  30-day return policy. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <a
              href="#description"
              className="border-primary-600 text-primary-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Description
            </a>
            <a
              href="#details"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Details
            </a>
            <a
              href="#reviews"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Reviews
            </a>
          </nav>
        </div>
        
        <div className="py-6">
          <div id="description" className="prose max-w-none">
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <div dangerouslySetInnerHTML={{ __html: productDetails.description }} />
            
            {productDetails.care_instructions && (
              <>
                <h3 className="text-lg font-semibold mt-6 mb-2">Care Instructions</h3>
                <p>{productDetails.care_instructions}</p>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* This would be populated with related products from the API */}
          {/* For now, we'll just show placeholder items */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Related Product {item}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-500">Category</h3>
                <h2 className="text-lg font-medium text-gray-900 mt-1">Related Product {item}</h2>
                <p className="mt-2 text-lg font-bold text-primary-600">$49.99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recently Viewed */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* This would be populated with recently viewed products from local storage or user history */}
          {/* For now, we'll just show placeholder items */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Recent Product {item}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-500">Category</h3>
                <h2 className="text-lg font-medium text-gray-900 mt-1">Recent Product {item}</h2>
                <p className="mt-2 text-lg font-bold text-primary-600">$39.99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 