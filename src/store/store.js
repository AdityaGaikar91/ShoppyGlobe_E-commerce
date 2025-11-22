import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productSlice'

/**
 * Redux Store Configuration
 * Combines all reducers and configures the store
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})
