import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Heart,
  Truck,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  X,
  ShoppingCart,
  Eye,
  Check,
  Bell,
  ArrowUpRight,
  Grid,
  List,
  Bookmark,
  Trash2,
  Clock,
  Slider,
  Tag,
  RefreshCw,
} from "lucide-react";

// Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  discount?: string;
  stockStatus: string;
  freeShipping: boolean;
  arrivalDate: string;
  colors: string[];
  sizes: string[];
  description?: string;
  features?: string[];
  brand?: string;
  isNewArrival?: boolean;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Luxury Silk Pajama Set",
    price: 89.99,
    originalPrice: 129.99,
    category: "Adults",
    rating: 4.8,
    reviews: 156,
    image: "/assets/images/products/night2.jpg",
    badge: "SALE",
    discount: "-31%",
    stockStatus: "In Stock",
    freeShipping: true,
    arrivalDate: "Delivery by Mar 20",
    colors: ["Navy", "Black", "Rose"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Experience ultimate comfort with our premium silk pajama set.",
    features: [
      "100% Mulberry Silk",
      "Breathable Material",
      "Temperature Regulating",
      "Easy Care",
    ],
    brand: "LuxeSleep",
    isNewArrival: true,
  },
  {
    id: 2,
    name: "Cotton Nightwear Set",
    price: 59.99,
    originalPrice: 79.99,
    category: "Adults",
    rating: 4.6,
    reviews: 124,
    image: "/assets/images/products/night2.jpg",
    badge: "SALE",
    discount: "-25%",
    stockStatus: "In Stock",
    freeShipping: true,
    arrivalDate: "Delivery by Mar 22",
    colors: ["White", "Blue", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    description: "Soft and comfortable cotton nightwear for a restful sleep.",
    features: [
      "100% Organic Cotton",
      "Hypoallergenic",
      "Machine Washable",
      "Durable Design",
    ],
    brand: "DreamComfort",
    isNewArrival: false,
  },
  {
    id: 3,
    name: "Kids Dinosaur Pajamas",
    price: 35.99,
    originalPrice: 45.99,
    category: "Kids",
    rating: 4.9,
    reviews: 87,
    image: "/assets/images/products/night2.jpg",
    badge: "BESTSELLER",
    discount: "-22%",
    stockStatus: "In Stock",
    freeShipping: true,
    arrivalDate: "Delivery by Mar 21",
    colors: ["Green", "Blue", "Red"],
    sizes: ["3T", "4T", "5T", "6T"],
    description: "Adorable dinosaur-themed pajamas your kids will love.",
    features: [
      "Soft Flannel Material",
      "Glow-in-the-dark Details",
      "Non-slip Feet",
      "Machine Washable",
    ],
    brand: "CozyDreams",
    isNewArrival: true,
  },

  {
    id: 3,
    name: "Kids Dinosaur Pajamas",
    price: 35.99,
    originalPrice: 45.99,
    category: "Kids",
    rating: 4.9,
    reviews: 87,
    image: "/assets/images/products/night2.jpg",
    badge: "BESTSELLER",
    discount: "-22%",
    stockStatus: "In Stock",
    freeShipping: true,
    arrivalDate: "Delivery by Mar 21",
    colors: ["Green", "Blue", "Red"],
    sizes: ["3T", "4T", "5T", "6T"],
    description: "Adorable dinosaur-themed pajamas your kids will love.",
    features: [
      "Soft Flannel Material",
      "Glow-in-the-dark Details",
      "Non-slip Feet",
      "Machine Washable",
    ],
    brand: "CozyDreams",
    isNewArrival: true,
  },

  {
    id: 3,
    name: "Kids Dinosaur Pajamas",
    price: 35.99,
    originalPrice: 45.99,
    category: "Kids",
    rating: 4.9,
    reviews: 87,
    image: "/assets/images/products/night2.jpg",
    badge: "BESTSELLER",
    discount: "-22%",
    stockStatus: "In Stock",
    freeShipping: true,
    arrivalDate: "Delivery by Mar 21",
    colors: ["Green", "Blue", "Red"],
    sizes: ["3T", "4T", "5T", "6T"],
    description: "Adorable dinosaur-themed pajamas your kids will love.",
    features: [
      "Soft Flannel Material",
      "Glow-in-the-dark Details",
      "Non-slip Feet",
      "Machine Washable",
    ],
    brand: "CozyDreams",
    isNewArrival: true,
  },

  {
    id: 3,
    name: "Kids Dinosaur Pajamas",
    price: 35.99,
    originalPrice: 45.99,
    category: "Kids",
    rating: 4.9,
    reviews: 87,
    image: "/assets/images/products/night2.jpg",
    badge: "BESTSELLER",
    discount: "-22%",
    stockStatus: "In Stock",
    freeShipping: true,
    arrivalDate: "Delivery by Mar 21",
    colors: ["Green", "Blue", "Red"],
    sizes: ["3T", "4T", "5T", "6T"],
    description: "Adorable dinosaur-themed pajamas your kids will love.",
    features: [
      "Soft Flannel Material",
      "Glow-in-the-dark Details",
      "Non-slip Feet",
      "Machine Washable",
    ],
    brand: "CozyDreams",
    isNewArrival: true,
  },
  // ... Add more products with similar structure ...
];

const categories = [
  { name: "Adults", count: 156 },
  { name: "Kids", count: 89 },
  { name: "Baby", count: 45 },
  { name: "Accessories", count: 34 },
];

// Sample color options with their hex codes
const colorOptions = [
  { name: "Navy", code: "#000080" },
  { name: "Black", code: "#000000" },
  { name: "Rose", code: "#FF007F" },
  { name: "White", code: "#FFFFFF" },
  { name: "Blue", code: "#0000FF" },
  { name: "Pink", code: "#FFC0CB" },
  { name: "Green", code: "#008000" },
  { name: "Red", code: "#FF0000" },
];

const ProductList = () => {
  // State management
  const [sortBy, setSortBy] = useState("featured");
  const [filterCategory, setFilterCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [showNewArrivals, setShowNewArrivals] = useState(false);
  const [showFiltersSidebar, setShowFiltersSidebar] = useState(true);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["categories", "price"]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Sample brands data
  const brands = [
    { name: "DreamComfort", count: 45 },
    { name: "LuxeSleep", count: 32 },
    { name: "NightGlow", count: 28 },
    { name: "CozyDreams", count: 19 },
  ];

  // Function to toggle expanded filters
  const toggleExpandFilter = (filterId: string) => {
    setExpandedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (activeTab !== "all" && activeTab === "new" && !product.isNewArrival) return false;
    if (activeTab !== "all" && activeTab === "sale" && !product.discount) return false;
    if (filterCategory !== "all" && product.category !== filterCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (
      selectedSizes.length > 0 &&
      !selectedSizes.some((size) => product.sizes.includes(size))
    ) return false;
    if (
      selectedColors.length > 0 &&
      !selectedColors.some((color) => product.colors.includes(color))
    ) return false;
    if (
      selectedBrands.length > 0 &&
      !selectedBrands.includes(product.brand || "")
    ) return false;
    if (ratingFilter > 0 && product.rating < ratingFilter) return false;
    if (showNewArrivals && !product.isNewArrival) return false;
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Handlers
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const handleCategoryChange = (category: string) => {
    setFilterCategory(category === filterCategory ? "all" : category);
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };

  const closeSearchResults = () => {
    setShowSearchResults(false);
  };

  const addToCart = (productId: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 3000);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleCompare = (productId: number) => {
    setCompareProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  const clearFilters = () => {
    setFilterCategory("all");
    setPriceRange([0, 200]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchQuery("");
    setSelectedBrands([]);
    setRatingFilter(0);
    setShowNewArrivals(false);
    setActiveTab("all");
  };

  // Handle clicks outside search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target as Node)) {
        closeSearchResults();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Quick view modal close handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("quick-view-modal");
      if (modal && !modal.contains(event.target as Node)) {
        setQuickViewProduct(null);
      }
    };

    if (quickViewProduct) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [quickViewProduct]);

  // Get cart total
  const cartTotal = cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  // Get product from ID
  const getProductById = (id: number) => products.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 text-center">
        <p className="text-sm font-medium animate-pulse">
          🌟 Special Offer: Free Shipping on Orders Over $75! Limited Time Only
        </p>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-12 z-30 bg-white shadow-md mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              <Filter className="h-5 w-5" />
            </button>
            
            {/* Logo placeholder */}
            <div className="font-bold text-xl text-orange-500">SleepStyle</div>
          </div>

          {/* Search Bar - Now in the header */}
          <div className="relative hidden md:block flex-1 mx-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            
            {/* Search Results Dropdown */}
            {showSearchResults && (
              <div 
                ref={searchResultsRef}
                className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl max-h-80 overflow-y-auto"
              >
                {filteredProducts.length > 0 ? (
                  <div>
                    <div className="p-3 border-b">
                      <h3 className="font-medium">Search Results</h3>
                    </div>
                    <ul>
                      {filteredProducts.slice(0, 5).map(product => (
                        <li key={product.id} className="border-b last:border-b-0">
                          <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="w-12 h-12 flex-shrink-0 mr-3">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{product.name}</h4>
                              <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {filteredProducts.length > 5 && (
                      <div className="p-3 text-center border-t">
                        <button 
                          onClick={closeSearchResults}
                          className="text-sm text-orange-500 hover:underline"
                        >
                          View all {filteredProducts.length} results
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <button className="relative p-2" onClick={() => setIsCartSidebarOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
            <button className="relative p-2">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="relative p-2">
              <Bookmark className="h-6 w-6" />
              {compareProducts.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {compareProducts.length}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="block md:hidden p-3 border-t">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            
            {/* Mobile Search Results */}
            {showSearchResults && (
              <div 
                ref={searchResultsRef}
                className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl max-h-80 overflow-y-auto"
              >
                {filteredProducts.length > 0 ? (
                  <div>
                    <div className="p-3 border-b">
                      <h3 className="font-medium">Search Results</h3>
                    </div>
                    {filteredProducts.slice(0, 3).map(product => (
                      <div key={product.id} className="flex items-center p-3 border-b">
                        <div className="w-12 h-12 flex-shrink-0 mr-3">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">Collections</span>
            </li>
          </ol>
        </nav>

        {/* Product Category Tabs */}
        <div className="mb-6 bg-white p-3 rounded-lg shadow-sm overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } transition-colors`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "new"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } transition-colors`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveTab("sale")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "sale"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } transition-colors`}
            >
              On Sale
            </button>
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveTab(category.name.toLowerCase());
                  setFilterCategory(category.name);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === category.name.toLowerCase()
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          {showFiltersSidebar && (
            <div
              className={`lg:col-span-1 ${
                isFiltersVisible ? "block" : "hidden lg:block"
              }`}
            >
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setShowFiltersSidebar(!showFiltersSidebar)}
                      className="p-1 hover:bg-gray-100 rounded-md lg:hidden"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-orange-500 hover:text-orange-600 flex items-center"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Reset
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="border-t pt-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpandFilter('categories')}
                  >
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <ChevronDown 
                      className={`h-5 w-5 transform transition-transform ${
                        expandedFilters.includes('categories') ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {expandedFilters.includes('categories') && (
                    <div className="mt-4 space-y-3">
                      {categories.map((category) => (
                        <label
                          key={category.name}
                          className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                        >
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filterCategory === category.name}
                              onChange={() => handleCategoryChange(category.name)}
                              className="form-checkbox h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-gray-600 group-hover:text-orange-500 transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-gray-400 text-sm">
                            ({category.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="border-t pt-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpandFilter('price')}
                  >
                    <h3 className="text-lg font-semibold">Price Range</h3>
                    <ChevronDown 
                      className={`h-5 w-5 transform transition-transform ${
                        expandedFilters.includes('price') ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {expandedFilters.includes('price') && (
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0]}
                          onChange={(e) =>
                            handlePriceChange(Number(e.target.value), priceRange[1])
                          }
                          className="w-24 px-3 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1]}
                          onChange={(e) =>
                            handlePriceChange(priceRange[0], Number(e.target.value))
                          }
                          className="w-24 px-3 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div className="py-2 px-2">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-orange-500 rounded-full" 
                            style={{ 
                              width: `${((priceRange[1] - priceRange[0]) / 200) * 100}%`,
                              marginLeft: `${(priceRange[0] / 200) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                      <button 
                        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                {/* Sizes */}
                <div className="border-t pt-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpandFilter('sizes')}
                  >
                    <h3 className="text-lg font-semibold">Size</h3>
                    <ChevronDown 
                      className={`h-5 w-5 transform transition-transform ${
                        expandedFilters.includes('sizes') ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {expandedFilters.includes('sizes') && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {["S", "M", "L", "XL", "2XL", "3T", "4T", "5T", "6T"].map((size) => (
                        <button
                          key={size}
                          className={`px-3 py-2 rounded-md text-sm font-medium
                            ${
                              selectedSizes.includes(size)
                                ? "bg-orange-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            } transition-colors`}
                          onClick={() => {
                            setSelectedSizes((prev) =>
                              prev.includes(size)
                                ? prev.filter((s) => s !== size)
                                : [...prev, size]
                            );
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Colors */}
                <div className="border-t pt-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpandFilter('colors')}
                  >
                    <h3 className="text-lg font-semibold">Colors</h3>
                    <ChevronDown 
                                           className={`h-5 w-5 transform transition-transform ${
                                            expandedFilters.includes('colors') ? 'rotate-180' : ''
                                          }`}
                                        />
                                      </div>
                                      
                                      {expandedFilters.includes('colors') && (
                                        <div className="mt-4 grid grid-cols-5 gap-3">
                                          {colorOptions.map((color) => (
                                            <button
                                              key={color.name}
                                              className={`relative w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
                                              style={{ backgroundColor: color.code }}
                                              onClick={() => {
                                                setSelectedColors((prev) =>
                                                  prev.includes(color.name)
                                                    ? prev.filter((c) => c !== color.name)
                                                    : [...prev, color.name]
                                                );
                                              }}
                                            >
                                              {selectedColors.includes(color.name) && (
                                                <Check className="absolute inset-0 m-auto h-4 w-4 text-white" />
                                              )}
                                              {color.code === '#FFFFFF' && (
                                                <div className="absolute inset-0 rounded-full border border-gray-300" />
                                              )}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                    
                                    {/* Brands */}
                                    <div className="border-t pt-4">
                                      <div 
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => toggleExpandFilter('brands')}
                                      >
                                        <h3 className="text-lg font-semibold">Brands</h3>
                                        <ChevronDown 
                                          className={`h-5 w-5 transform transition-transform ${
                                            expandedFilters.includes('brands') ? 'rotate-180' : ''
                                          }`}
                                        />
                                      </div>
                                      
                                      {expandedFilters.includes('brands') && (
                                        <div className="mt-4 space-y-3">
                                          {brands.map((brand) => (
                                            <label key={brand.name} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                                              <div className="flex items-center">
                                                <input
                                                  type="checkbox"
                                                  checked={selectedBrands.includes(brand.name)}
                                                  onChange={() => {
                                                    setSelectedBrands(prev =>
                                                      prev.includes(brand.name)
                                                        ? prev.filter(b => b !== brand.name)
                                                        : [...prev, brand.name]
                                                    );
                                                  }}
                                                  className="form-checkbox h-4 w-4 text-orange-500"
                                                />
                                                <span className="ml-3 text-gray-600">{brand.name}</span>
                                              </div>
                                              <span className="text-gray-400 text-sm">({brand.count})</span>
                                            </label>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                    
                                    {/* Rating Filter */}
                                    <div className="border-t pt-4">
                                      <div 
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => toggleExpandFilter('rating')}
                                      >
                                        <h3 className="text-lg font-semibold">Rating</h3>
                                        <ChevronDown 
                                          className={`h-5 w-5 transform transition-transform ${
                                            expandedFilters.includes('rating') ? 'rotate-180' : ''
                                          }`}
                                        />
                                      </div>
                                      
                                      {expandedFilters.includes('rating') && (
                                        <div className="mt-4 space-y-2">
                                          {[4, 3, 2, 1].map((rating) => (
                                            <button
                                              key={rating}
                                              onClick={() => setRatingFilter(rating === ratingFilter ? 0 : rating)}
                                              className={`flex items-center w-full p-2 rounded-md transition-colors ${
                                                rating === ratingFilter ? 'bg-orange-50' : 'hover:bg-gray-50'
                                              }`}
                                            >
                                              <div className="flex text-yellow-400">
                                                {Array(5).fill(0).map((_, i) => (
                                                  <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
                                                  />
                                                ))}
                                              </div>
                                              <span className="ml-2 text-gray-600">{`& Up`}</span>
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                    
                              {/* Products Section */}
                              <div className="lg:col-span-3">
                                {/* Sort and View Options */}
                                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                                  <div className="flex flex-col sm:flex-row justify-between items-center">
                                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                      <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-md ${
                                          viewMode === "grid"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                      >
                                        <Grid className="h-5 w-5" />
                                      </button>
                                      <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-md ${
                                          viewMode === "list"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                      >
                                        <List className="h-5 w-5" />
                                      </button>
                                    </div>
                    
                                    <div className="flex items-center space-x-4">
                                      <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                      >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="newest">Newest</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="reviews">Most Reviewed</option>
                                      </select>
                                      <span className="text-sm text-gray-500">
                                        {sortedProducts.length} products
                                      </span>
                                    </div>
                                  </div>
                                </div>
                    
                                {/* Products Grid/List */}
                                <div
                                  className={`grid gap-6 ${
                                    viewMode === "grid"
                                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                      : "grid-cols-1"
                                  }`}
                                >
                                  {currentProducts.map((product) => (
                                    <div
                                      key={product.id}
                                      className={`group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                                        viewMode === "list" ? "flex gap-6" : ""
                                      }`}
                                    >
                                      {/* Product Image Section */}
                                      <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                                        <img
                                          src={product.image}
                                          alt={product.name}
                                          className="w-full h-64 object-cover object-center rounded-t-lg group-hover:opacity-90 transition-opacity"
                                        />
                    
                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 flex flex-col gap-2">
                                          {product.badge && (
                                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white">
                                              {product.badge}
                                            </span>
                                          )}
                                          {product.discount && (
                                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
                                              {product.discount}
                                            </span>
                                          )}
                                          {product.isNewArrival && (
                                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">
                                              NEW
                                            </span>
                                          )}
                                        </div>
                    
                                        {/* Quick Actions */}
                                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                                          <button
                                            onClick={() => toggleWishlist(product.id)}
                                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                                          >
                                            <Heart
                                              className={`h-5 w-5 ${
                                                wishlist.includes(product.id)
                                                  ? "text-red-500 fill-current"
                                                  : "text-gray-600"
                                              }`}
                                            />
                                          </button>
                                          <button
                                            onClick={() => toggleCompare(product.id)}
                                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                                          >
                                            <Bookmark
                                              className={`h-5 w-5 ${
                                                compareProducts.includes(product.id)
                                                  ? "text-blue-500 fill-current"
                                                  : "text-gray-600"
                                              }`}
                                            />
                                          </button>
                                          <button
                                            onClick={() => setQuickViewProduct(product)}
                                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                                          >
                                            <Eye className="h-5 w-5 text-gray-600" />
                                          </button>
                                        </div>
                                      </div>
                    
                                      {/* Product Info */}
                                      <div className={`p-4 flex flex-col ${viewMode === "list" ? "w-2/3" : ""}`}>
                                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                                          {product.name}
                                        </h3>
                    
                                        <div className="mt-2 flex items-center justify-between">
                                          <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-900">
                                              ${product.price}
                                            </span>
                                            {product.originalPrice && (
                                              <span className="text-sm text-gray-500 line-through">
                                                ${product.originalPrice}
                                              </span>
                                            )}
                                          </div>
                                          {product.freeShipping && (
                                            <span className="text-sm text-green-600 flex items-center">
                                              <Truck className="h-4 w-4 mr-1" />
                                              Free Shipping
                                            </span>
                                          )}
                                        </div>
                    
                                        {/* Rating */}
                                        <div className="mt-2 flex items-center">
                                          <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                              <Star
                                                key={i}
                                                className={`h-4 w-4 ${
                                                  i < Math.floor(product.rating)
                                                    ? "text-yellow-400 fill-current"
                                                    : "text-gray-300"
                                                }`}
                                              />
                                            ))}
                                          </div>
                                          <span className="ml-2 text-sm text-gray-500">
                                            ({product.reviews})
                                          </span>
                                        </div>
                    
                                        {viewMode === "list" && product.description && (
                                          <p className="mt-2 text-gray-600 text-sm">
                                            {product.description}
                                          </p>
                                        )}
                    
                                        <div className="mt-4 flex items-center justify-between">
                                          <span
                                            className={`text-sm font-medium ${
                                              product.stockStatus === "In Stock"
                                                ? "text-green-600"
                                                : "text-orange-600"
                                            }`}
                                          >
                                            {product.stockStatus}
                                          </span>
                                          <span className="text-sm text-gray-500">
                                            {product.arrivalDate}
                                          </span>
                                        </div>
                    
                                        <button
                                          onClick={() => addToCart(product.id)}
                                          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center"
                                        >
                                          Add to Cart
                                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                    
                                {/* Pagination */}
                                {totalPages > 1 && (
                                  <div className="mt-8 flex justify-center">
                                    <div className="flex space-x-2">
                                      <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                      >
                                        Previous
                                      </button>
                                      {[...Array(totalPages)].map((_, i) => (
                                        <button
                                          key={i + 1}
                                          onClick={() => setCurrentPage(i + 1)}
                                          className={`px-4 py-2 border rounded-md ${
                                            currentPage === i + 1
                                              ? 'bg-orange-500 text-white'
                                              : 'hover:bg-gray-50'
                                          }`}
                                        >
                                          {i + 1}
                                        </button>
                                      ))}
                                      <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                      >
                                        Next
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                    
                          {/* Quick View Modal */}
                          {quickViewProduct && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                              <div
                                className="bg-white rounded-lg max-w-4xl w-full mx-4 p-6"
                                id="quick-view-modal"
                              >
                                <div className="flex justify-end">
                                  <button
                                    onClick={() => setQuickViewProduct(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                  >
                                    <X className="h-6 w-6" />
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div>
                                    <img
                                      src={quickViewProduct.image}
                                      alt={quickViewProduct.name}
                                      className="w-full h-96 object-cover rounded-lg"
                                    />
                                  </div>
                                  <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                      {quickViewProduct.name}
                                    </h2>
                                    <p className="mt-4 text-gray-600">
                                      {quickViewProduct.description}
                                    </p>
                                    <div className="mt-6">
                                      <h3 className="text-lg font-semibold mb-2">Features:</h3>
                                      <ul className="list-disc list-inside space-y-2">
                                        {quickViewProduct.features?.map((feature, index) => (
                                          <li key={index} className="text-gray-600">{feature}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="mt-6">
                                      <button
                                        onClick={() => {
                                          addToCart(quickViewProduct.id);
                                          setQuickViewProduct(null);
                                        }}
                                        className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                                      >
                                        Add to Cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                    
                          {/* Cart Notification */}
                          {isCartOpen && (
                            <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 animate-slide-up z-50">
                              <div className="flex items-center gap-4">
                                <Check className="h-6 w-6 text-green-500" />
                                <span>Added to cart successfully!</span>
                              </div>
                            </div>
                          )}
                    
                          {/* Cart Sidebar */}
                          {isCartSidebarOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                              <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl">
                                <div className="flex flex-col h-full">
                                  <div className="flex items-center justify-between p-4 border-b">
                                    <h2 className="text-lg font-semibold">Shopping Cart</h2>
                                    <button
                                      onClick={() => setIsCartSidebarOpen(false)}
                                      className="p-2 hover:bg-gray-100 rounded-full"
                                    >
                                      <X className="h-6 w-6" />
                                    </button>
                                  </div>
                                  
                                  <div className="flex-1 overflow-y-auto p-4">
                                    {cart.length === 0 ? (
                                      <div className="text-center py-8">
                                        <ShoppingCart className="h-12 w-12 mx-auto text-gray-400" />
                                        <p className="mt-4 text-gray-600">Your cart is empty</p>
                                      </div>
                                    ) : (
                                      <div className="space-y-4">
                                        {cart.map((item) => {
                                          const product = getProductById(item.id);
                                          if (!product) return null;
                                          
                                          return (
                                            <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                              <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-20 h-20 object-cover rounded"
                                              />
                                              <div className="flex-1">
                                                <h3 className="font-medium">{product.name}</h3>
                                                <p className="text-gray-600">${product.price}</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                  <button
                                                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 rounded-md hover:bg-gray-200"
                                                  >
                                                    -
                                                  </button>
                                                  <span>{item.quantity}</span>
                                                  <button
                                                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 rounded-md hover:bg-gray-200"
                                                  >
                                                    +
                                                  </button>
                                                </div>
                                              </div>
                                              <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500"
                                              >
                                                <Trash2 className="h-5 w-5" />
                                              </button>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                  
                                  {cart.length > 0 && (
                                    <div className="p-4 border-t">
                                      <div className="flex justify-between mb-4">
                                        <span className="font-semibold">Total:</span>
                                        <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                                      </div>
                                      <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors">
                                        Checkout
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    };
                    
                    export default ProductList;