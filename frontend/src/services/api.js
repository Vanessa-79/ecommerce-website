import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Product API calls
export const productAPI = {
  getProducts: (params) => api.get('/products/', { params }),
  getProduct: (slug) => api.get(`/products/${slug}/`),
  getFeaturedProducts: () => api.get('/products/featured/'),
  getNewArrivals: () => api.get('/products/new_arrivals/'),
  getBestsellers: () => api.get('/products/bestsellers/'),
};

// Category API calls
export const categoryAPI = {
  getCategories: () => api.get('/categories/'),
  getCategory: (slug) => api.get(`/categories/${slug}/`),
  getFeaturedCategories: () => api.get('/categories/featured/'),
};

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post('/token/', credentials),
  refreshToken: (refresh) => api.post('/token/refresh/', { refresh }),
};

// Cart API calls
export const cartAPI = {
  getCart: () => api.get('/cart/'),
  addToCart: (productData) => api.post('/cart/add_item/', productData),
  updateCartItem: (data) => api.post('/cart/update_item/', data),
  removeCartItem: (data) => api.post('/cart/remove_item/', data),
  clearCart: () => api.post('/cart/clear/'),
};

export default api; 