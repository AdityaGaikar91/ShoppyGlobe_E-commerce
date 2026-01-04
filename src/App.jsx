import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    Loading...
  </div>
)

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Home />
        </Suspense>
      </>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <ProductDetail />
        </Suspense>
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Cart />
        </Suspense>
      </>
    ),
  },
  {
    path: '/checkout',
    element: (
      <>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Checkout />
        </Suspense>
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <NotFound />
        </Suspense>
      </>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
