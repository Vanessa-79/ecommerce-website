import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoryAPI } from '../../services/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await categoryAPI.getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch categories');
    }
  }
);

export const fetchCategoryDetails = createAsyncThunk(
  'categories/fetchCategoryDetails',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await categoryAPI.getCategory(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch category details');
    }
  }
);

export const fetchFeaturedCategories = createAsyncThunk(
  'categories/fetchFeaturedCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await categoryAPI.getFeaturedCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch featured categories');
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    categoryDetails: null,
    featuredCategories: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCategoryDetails: (state) => {
      state.categoryDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.results || action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch categories';
      })
      .addCase(fetchCategoryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetails = action.payload;
      })
      .addCase(fetchCategoryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch category details';
      })
      .addCase(fetchFeaturedCategories.fulfilled, (state, action) => {
        state.featuredCategories = action.payload;
      });
  },
});

export const { clearCategoryDetails } = categoriesSlice.actions;
export default categoriesSlice.reducer; 