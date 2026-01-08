import { Routes, Route } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import Category from './pages/Category.jsx'
import Categories from './pages/Categories.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <StoreProvider>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </StoreProvider>
  )
}
