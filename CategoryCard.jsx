import { Link } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}`} className="category">
      <div className="product-thumb">
        <ImageWithFallback src={category.image} fallback="/images/category-fallback.svg" alt={category.name} />
      </div>
      <div className="meta">
        <strong>{category.name}</strong>
        <span className="muted">Shop</span>
      </div>
    </Link>
  )
}
