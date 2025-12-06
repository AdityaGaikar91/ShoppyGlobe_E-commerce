import { useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  setSearchQuery, 
  selectSearchQuery, 
  fetchProducts, 
  selectProducts, 
  selectProductStatus, 
  selectProductError 
} from '../store/productSlice'
import { Search } from 'lucide-react'
import './ProductList.css'

// Lazy load ProductItem
const ProductItem = lazy(() => import('./ProductItem'))

/**
 * ProductList component - displays products with search functionality
 */
function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const status = useSelector(selectProductStatus)
  const error = useSelector(selectProductError)
  const searchQuery = useSelector(selectSearchQuery)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])
      
  // Filter products based on search query from Redux state
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (status === 'loading') {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className="error-container">
        <h2>Error Loading Products</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  return (
    <div className="product-list-container">
      <div className="search-container">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="search-input"
          />
        </div>
        <p className="results-count">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  )
}

export default ProductList
