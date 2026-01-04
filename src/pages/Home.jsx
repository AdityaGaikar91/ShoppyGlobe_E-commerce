import ProductList from '../components/ProductList'
import './Home.css'

/**
 * Home page component - displays the product list
 */
function Home() {
  return (
    <main className="home-page">
      <div className="hero-section">
        <h2>Welcome to ShoppyGlobe</h2>
        <p>Discover amazing products at great prices</p>
      </div>
      <ProductList />
    </main>
  )
}

export default Home
