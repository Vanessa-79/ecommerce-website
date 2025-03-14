import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartAPI } from '../../services/api';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartAPI.getCart();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch cart');
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await cartAPI.addToCart(productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to add item to cart');
    }
  }
);

export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async (data, { rejectWithValue }) => {
    try {
      const response = await cartAPI.updateCartItem(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update cart item');
    }
  }
);

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async (data, { rejectWithValue }) => {
    try {
      const response = await cartAPI.removeCartItem(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to remove cart item');
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartAPI.clearCart();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to clear cart');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items || [];
        state.totalPrice = action.payload.total_price || 0;
        state.totalItems = action.payload.total_items || 0;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch cart';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
        state.totalPrice = action.payload.total_price || 0;
        state.totalItems = action.payload.total_items || 0;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
        state.totalPrice = action.payload.total_price || 0;
        state.totalItems = action.payload.total_items || 0;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
        state.totalPrice = action.payload.total_price || 0;
        state.totalItems = action.payload.total_items || 0;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.items = [];
        state.totalPrice = 0;
        state.totalItems = 0;
      });
  },
});

export default cartSlice.reducer; 