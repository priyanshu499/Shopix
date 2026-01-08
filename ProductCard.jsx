import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'

function rupee(n) {
  return `₹${n.toLocaleString('en-IN')}`
}

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const wished = wishlist.includes(product.id)
  const stars = '★★★★★'.slice(0, Math.round(product.rating))

  return (
    <div className="product-card premium">
      <div className="product-thumb">
        <Link to={`/product/${product.id}`}>
          <ImageWithFallback src={product.images[0]} fallback="/images/fallback.svg" alt={product.name} />
        </Link>
        {product.discount ? <span className="discount">Save {rupee(product.discount)}</span> : null}
      </div>
      <div className="product-body">
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <strong>{product.name}</strong>
        </Link>
        <div className="stars" aria-label={`${product.rating} stars`}>{stars}</div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
          <span className="price">{rupee(product.price - (product.discount ?? 0))}</span>
          {product.discount ? <span className="muted" style={{ textDecoration: 'line-through' }}>{rupee(product.price)}</span> : null}
        </div>
        <div className="product-actions">
          <button className="btn" onClick={() => addToCart(product, {}, 1)}>Add to Cart</button>
          <button className="btn btn-outline" onClick={() => toggleWishlist(product.id)}>{wished ? '♥ Saved' : '♡ Wishlist'}</button>
        </div>
      </div>
    </div>
  )
}
