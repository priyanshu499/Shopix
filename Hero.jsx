import { Link } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <ImageWithFallback src="https://images.unsplash.com/photo-1519741497674-611f4e571e04?q=80&w=2000&auto=format&fit=crop" alt="Featured sneakers and apparel" />
      </div>
      <div className="hero-content card">
        <h1 className="hero-title gradient-text">Elevate your everyday. Premium looks, refined performance.</h1>
        <p className="hero-sub">Curated drops across footwear, apparel, electronics and accessories. Limited-time launches and members-only pricing.</p>
        <div className="hero-cta">
          <Link className="btn" to="/?featured=true">Shop Now</Link>
          <Link className="btn btn-outline" to="/categories">Explore Categories</Link>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 6 }}>
          <span className="badge">Free Shipping ₹3,000+</span>
          <span className="badge" style={{ background: 'linear-gradient(180deg,#cfe1ff,#9ad7ff)' }}>New Arrivals</span>
        </div>
      </div>
    </section>
  )
}
