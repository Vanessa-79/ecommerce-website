import React, { useState, useEffect } from "react";
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
  },
  {
    id: 2,
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
  },
  {
    id: 2,
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
  },
  // ... Add more products with similar structure ...
];

const categories = [
  { name: "Adults", count: 156 },
  { name: "Kids", count: 89 },
  { name: "Baby", count: 45 },
  { name: "Accessories", count: 34 },
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
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (filterCategory !== "all" && product.category !== filterCategory)
      return false;
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;
    if (
      selectedSizes.length > 0 &&
      !selectedSizes.some((size) => product.sizes.includes(size))
    )
      return false;
    if (
      selectedColors.length > 0 &&
      !selectedColors.some((color) => product.colors.includes(color))
    )
      return false;
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
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
      default:
        return 0;
    }
  });

  // Handlers
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const handleCategoryChange = (category: string) => {
    setFilterCategory(category === filterCategory ? "all" : category);
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

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const clearFilters = () => {
    setFilterCategory("all");
    setPriceRange([0, 200]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchQuery("");
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 text-center">
        <p className="text-sm font-medium animate-pulse">
          🌟 Special Offer: Free Shipping on Orders Over $75! Limited Time Only
        </p>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              <Filter className="h-5 w-5" />
            </button>
            <div className="relative mt-19" >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:col-span-1 ${
              isFiltersVisible ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-orange-500 hover:text-orange-600"
                >
                  Clear All
                </button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-3">
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
              </div>

              {/* Price Range */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
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
                  <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
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
              </div>
            </div>
          </div>

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
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                    viewMode === "list" ? "flex gap-6" : ""
                  }`}
                >
                  {/* Product Image Section */}
                  <div
                    className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover object-center rounded-t-lg group-hover:opacity-90 transition-opacity"
                    />

                    {/* Badges */}
                    {product.badge && (
                      <span className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white">
                        {product.badge}
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
                        {product.discount}
                      </span>
                    )}

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
                        onClick={() => setQuickViewProduct(product)}
                        className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div
                    className={`p-4 flex flex-col ${
                      viewMode === "list" ? "w-2/3" : ""
                    }`}
                  >
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
            {/* Quick view content */}
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
                {/* Add more quick view details as needed */}
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
    </div>
  );
};

export default ProductList;
