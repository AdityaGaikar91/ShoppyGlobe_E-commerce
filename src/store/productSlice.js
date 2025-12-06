import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * Product Slice - Manages product-related state
 * Handles search query for filtering products
 * Now includes async thunk for fetching products
 */

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.products
  }
)

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  searchQuery: '',
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    clearSearchQuery: (state) => {
      state.searchQuery = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setSearchQuery, clearSearchQuery } = productSlice.actions

// Selectors
export const selectSearchQuery = (state) => state.product.searchQuery
export const selectProducts = (state) => state.product.items
export const selectProductStatus = (state) => state.product.status
export const selectProductError = (state) => state.product.error

export default productSlice.reducer
