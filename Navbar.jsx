import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import { useState } from 'react'

export default function Navbar() {
  const { cart, wishlist, toggleTheme, theme } = useStore()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const onSearch = e => {
    e.preventDefault()
    if (query.trim()) navigate(`/?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l9 4-9 4-9-4 9-4Z" fill="url(#g1)"/><path d="M3 8l9 4 9-4v6l-9 4-9-4V8Z" fill="url(#g2)"/>
          <defs><linearGradient id="g1" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#7aa2ff"/><stop offset="1" stopColor="#00e58f"/></linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#4f8cff"/><stop offset="1" stopColor="#10b981"/></linearGradient></defs>
        </svg>
        <span className="gradient-text">ShopX</span>
      </Link>

      <form className="search" onSubmit={onSearch}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21l-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, brands…" aria-label="Search"/>
        <button className="btn btn-outline" type="submit">Search</button>
      </form>

      <div className="nav-icons">
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <Link className="icon-btn" to="/wishlist" aria-label="Wishlist">
          <span>🤍</span>
          {wishlist?.length ? <span className="badge" style={{ position: 'absolute', transform: 'translate(12px,-12px)' }}>{wishlist.length}</span> : null}
        </Link>
        <Link className="icon-btn" to="/cart" aria-label="Cart">
          <span>🛒</span>
          {cart?.length ? <span className="badge" style={{ position: 'absolute', transform: 'translate(12px,-12px)' }}>{cart.length}</span> : null}
        </Link>
        <button className="icon-btn" aria-label="Profile">👤</button>
      </div>
    </header>
  )
}
