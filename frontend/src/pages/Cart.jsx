import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, updateCartItem, removeCartItem, clearCart } from '../store/slices/cartSlice';
import { XIcon, PlusIcon, MinusIcon } from '@heroicons/react/outline';
import toast from 'react-hot-toast';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalPrice, totalItems, loading, error } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    dispatch(updateCartItem({ item_id: itemId, quantity: newQuantity }))
      .unwrap()
      .then(() => {
        toast.success('Cart updated');
      })
      .catch((error) => {
        toast.error(error || 'Failed to update cart');
      });
  };
  
  const handleRemoveItem = (itemId) => {
    dispatch(removeCartItem({ item_id: itemId }))
      .unwrap()
      .then(() => {
        toast.success('Item removed from cart');
      })
      .catch((error) => {
        toast.error(error || 'Failed to remove item');
      });
  };
  
  const handleClearCart = () => {
    dispatch(clearCart())
      .unwrap()
      .then(() => {
        toast.success('Cart cleared');
      })
      .catch((error) => {
        toast.error(error || 'Failed to clear cart');
      });
  };
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to checkout');
      navigate('/login?redirect=checkout');
      return;
    }
    
    navigate('/checkout');
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
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
  
  if (!items || items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products" className="btn-primary px-8 py-3 text-lg">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                </h2>
                <button
                  onClick={handleClearCart}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="p-6 flex flex-col sm:flex-row">
                  {/* Product Image */}
                  <div className="sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                    {item.product.primary_image ? (
                      <img
                        src={item.product.primary_image.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-gray-500 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div className="sm:ml-6 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/product/${item.product.slug}`} className="hover:text-primary-600">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.variant && (
                            <span>
                              {item.variant.size} / {item.variant.color}
                            </span>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <XIcon className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1 text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-medium text-gray-900">${item.total_price}</p>
                        {item.product.discount_price && (
                          <p className="text-sm text-gray-500">
                            ${item.product.discount_price} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900 font-medium">${totalPrice}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900 font-medium">Calculated at checkout</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900 font-medium">Calculated at checkout</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg text-primary-600 font-bold">${totalPrice}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full btn-primary py-3 text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">Free shipping on orders over $50</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">30-day easy returns</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">Secure checkout</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">We Accept</h3>
              <div className="flex space-x-2">
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 