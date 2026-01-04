# ShoppyGlobe E-commerce

A modern e-commerce application built with React, Redux, and Vite.

## Features

- **Product Listing**: Browse products with search functionality
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, remove, and update quantities of products
- **Checkout**: Complete orders with a user-friendly checkout form
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Performance Optimized**: Lazy loading for components and images

## Technologies Used

- **React 18**: Modern React with hooks
- **Redux Toolkit**: State management for cart functionality
- **React Router**: Client-side routing with `createBrowserRouter`
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icons
- **CSS**: Custom styling with responsive design

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   └── CartItem.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
├── store/           # Redux store and slices
│   ├── store.js
│   └── cartSlice.js
├── hooks/           # Custom hooks
│   └── useProductFetch.js
├── App.jsx          # Main app component with routing
└── main.jsx         # Entry point
```

## Features Implementation

### Redux State Management
- Cart slice with actions: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- Selectors for cart items, total, and item count

### Custom Hooks
- `useProductFetch`: Fetches products from API with error handling

### Routing
- Dynamic routes for product details
- Protected checkout route (redirects if cart is empty)
- 404 page for unknown routes

### Performance
- Lazy loading for all page components
- Image lazy loading with `loading="lazy"` attribute
- Code splitting with React.lazy and Suspense

## API

Products are fetched from [DummyJSON](https://dummyjson.com/products)

## GitHub Repository

**Repository Link**: [https://github.com/AdityaGaikar91/ShoppyGlobe_E-commerce](https://github.com/AdityaGaikar91/ShoppyGlobe_E-commerce)

## License

MIT
