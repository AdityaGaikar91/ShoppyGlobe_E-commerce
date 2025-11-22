import { createSlice } from '@reduxjs/toolkit'

/**
 * Product Slice - Manages product-related state
 * Handles search query for filtering products
 */

const initialState = {
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
})

export const { setSearchQuery, clearSearchQuery } = productSlice.actions

// Selectors
export const selectSearchQuery = (state) => state.product.searchQuery

export default productSlice.reducer
