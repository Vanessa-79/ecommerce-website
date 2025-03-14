import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';
import { fetchCategoryDetails } from '../store/slices/categoriesSlice';
import ProductCard from '../components/products/ProductCard';
import { ChevronDownIcon, FunnelIcon as FilterIcon, Squares2X2Icon as ViewGridIcon, ListBulletIcon as ViewListIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { products, loading, error, pagination } = useSelector((state) => state.products);
  const { categoryDetails } = useSelector((state) => state.categories);
  
  const [filters, setFilters] = useState({
    gender: '',
    age_group: '',
    min_price: '',
    max_price: '',
    sort: 'newest',
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  
  // Parse query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newFilters = { ...filters };
    
    if (searchParams.has('gender')) newFilters.gender = searchParams.get('gender');
    if (searchParams.has('age_group')) newFilters.age_group = searchParams.get('age_group');
    if (searchParams.has('min_price')) newFilters.min_price = searchParams.get('min_price');
    if (searchParams.has('max_price')) newFilters.max_price = searchParams.get('max_price');
    if (searchParams.has('sort')) newFilters.sort = searchParams.get('sort');
    
    setFilters(newFilters);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  
  // Fetch products based on filters and category
  useEffect(() => {
    const params = {
      ...filters,
    };
    
    if (category) {
      params.category__slug = category;
      dispatch(fetchCategoryDetails(category));
    }
    
    // Handle sorting
    switch (filters.sort) {
      case 'price_low':
        params.ordering = 'price';
        break;
      case 'price_high':
        params.ordering = '-price';
        break;
      case 'newest':
        params.ordering = '-created_at';
        break;
      case 'name_asc':
        params.ordering = 'name';
        break;
      default:
        params.ordering = '-created_at';
    }
    
    dispatch(fetchProducts(params));
  }, [dispatch, category, filters]);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const applyFilters = () => {
    const searchParams = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
    
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
    
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };
  
  const resetFilters = () => {
    setFilters({
      gender: '',
      age_group: '',
      min_price: '',
      max_price: '',
      sort: 'newest',
    });
    
    navigate(location.pathname);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      {category && categoryDetails && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{categoryDetails.name}</h1>
          {categoryDetails.description && (
            <p className="text-gray-600">{categoryDetails.description}</p>
          )}
        </div>
      )}
      
      {!category && (
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
      )}
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md shadow-sm"
          >
            <FilterIcon className="h-5 w-5 text-gray-600" />
            <span>Filters</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-600'}`}
            >
              <ViewGridIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-600'}`}
            >
              <ViewListIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`md:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden text-gray-500 hover:text-gray-700"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            
            {/* Gender Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Gender</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    checked={filters.gender === 'M'}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Men</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    checked={filters.gender === 'F'}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Women</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="U"
                    checked={filters.gender === 'U'}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Unisex</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value=""
                    checked={filters.gender === ''}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">All</span>
                </label>
              </div>
            </div>
            
            {/* Age Group Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Age Group</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="age_group"
                    value="adult"
                    checked={filters.age_group === 'adult'}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Adult</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="age_group"
                    value="kids"
                    checked={filters.age_group === 'kids'}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Kids</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="age_group"
                    value="baby"
                    checked={filters.age_group === 'baby'}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Baby</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="age_group"
                    value=""
                    checked={filters.age_group === ''}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">All</span>
                </label>
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="min_price" className="sr-only">Minimum Price</label>
                  <input
                    type="number"
                    id="min_price"
                    name="min_price"
                    placeholder="Min"
                    value={filters.min_price}
                    onChange={handleFilterChange}
                    className="input text-sm py-1"
                  />
                </div>
                <div>
                  <label htmlFor="max_price" className="sr-only">Maximum Price</label>
                  <input
                    type="number"
                    id="max_price"
                    name="max_price"
                    placeholder="Max"
                    value={filters.max_price}
                    onChange={handleFilterChange}
                    className="input text-sm py-1"
                  />
                </div>
              </div>
            </div>
            
            {/* Filter Actions */}
            <div className="flex flex-col space-y-2">
              <button
                onClick={applyFilters}
                className="btn-primary py-2"
              >
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                className="btn-outline py-2"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Products */}
        <div className="md:w-3/4">
          {/* Sort and View Options */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                onBlur={applyFilters}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="newest">Newest</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="name_asc">Name: A to Z</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-600'}`}
              >
                <ViewGridIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-600'}`}
              >
                <ViewListIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          )}
          
          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              <p>{error}</p>
            </div>
          )}
          
          {/* Empty State */}
          {!loading && !error && products.length === 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria.</p>
              <button
                onClick={resetFilters}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Products Grid */}
          {!loading && !error && products.length > 0 && viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          {/* Products List */}
          {!loading && !error && products.length > 0 && viewMode === 'list' && (
            <div className="space-y-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative pb-[60%] sm:pb-0">
                    {product.primary_image ? (
                      <img
                        src={product.primary_image.image}
                        alt={product.primary_image.alt_text || product.name}
                        className="absolute sm:relative inset-0 w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="absolute sm:relative inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-sm text-gray-500">{product.category_name}</h3>
                      <h2 className="text-xl font-medium text-gray-900 mt-1">{product.name}</h2>
                      <p className="mt-2 text-gray-600 line-clamp-3">{product.short_description}</p>
                    </div>
                    <div className="mt-4 flex items-center">
                      {product.discount_price ? (
                        <>
                          <span className="text-xl font-bold text-primary-600">${product.discount_price}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-primary-600">${product.price}</span>
                      )}
                    </div>
                    <div className="mt-6 flex space-x-3">
                      <button
                        onClick={() => {
                          dispatch(addToCart({
                            product_id: product.id,
                            quantity: 1
                          }));
                        }}
                        className="btn-primary flex-1 sm:flex-none sm:px-6"
                      >
                        Add to Cart
                      </button>
                      <a
                        href={`/product/${product.slug}`}
                        className="btn-outline flex-1 sm:flex-none sm:px-6"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {!loading && !error && pagination.count > 0 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (pagination.previous) {
                      const url = new URL(pagination.previous);
                      const page = url.searchParams.get('page');
                      const searchParams = new URLSearchParams(location.search);
                      searchParams.set('page', page);
                      navigate({
                        pathname: location.pathname,
                        search: searchParams.toString(),
                      });
                    }
                  }}
                  disabled={!pagination.previous}
                  className={`px-3 py-1 rounded-md ${
                    pagination.previous
                      ? 'bg-white text-gray-700 hover:bg-gray-50'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Previous
                </button>
                
                {/* Current page indicator */}
                <span className="px-3 py-1 bg-primary-600 text-white rounded-md">
                  {Math.ceil(pagination.count / 12)}
                </span>
                
                <button
                  onClick={() => {
                    if (pagination.next) {
                      const url = new URL(pagination.next);
                      const page = url.searchParams.get('page');
                      const searchParams = new URLSearchParams(location.search);
                      searchParams.set('page', page);
                      navigate({
                        pathname: location.pathname,
                        search: searchParams.toString(),
                      });
                    }
                  }}
                  disabled={!pagination.next}
                  className={`px-3 py-1 rounded-md ${
                    pagination.next
                      ? 'bg-white text-gray-700 hover:bg-gray-50'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList; 