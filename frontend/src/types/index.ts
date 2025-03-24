export interface Category {
  id: number;
  name: string;
  image: string;
  count?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description?: string;
  category?: string;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  discount?: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
  index?: number;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface WishlistItem {
  id: number;
  userId: number;
  productId: number;
  addedAt: string;
} 