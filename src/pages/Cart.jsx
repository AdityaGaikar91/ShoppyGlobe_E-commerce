import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartItems, selectCartTotal } from '../store/cartSlice'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import './Cart.css'

// Lazy load CartItem
const CartItem = lazy(() => import('../components/CartItem'))

/**
 * Cart page component - displays cart items with checkout option
 */
function Cart() {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-container">
          <div className="empty-cart">
            <ShoppingBag size={64} color="#ccc" />
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <p className="cart-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
              <ArrowRight size={20} />
            </Link>

            <Link to="/" className="continue-shopping-link">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart
