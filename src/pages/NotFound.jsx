import { Link } from 'react-router-dom'
import { AlertCircle, Home } from 'lucide-react'
import './NotFound.css'

/**
 * NotFound page component - displays 404 error
 */
function NotFound() {
  return (
    <main className="notfound-page">
      <div className="notfound-container">
        <AlertCircle size={80} color="#ff4757" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p className="error-details">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <p className="error-path">
          Requested URL: <code>{window.location.pathname}</code>
        </p>
        <Link to="/" className="home-btn">
          <Home size={20} />
          Go to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
