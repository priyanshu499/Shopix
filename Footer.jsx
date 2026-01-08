export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-grid">
          <div>
            <strong>ShopX</strong>
            <p className="muted">Premium, modern shopping experience engineered for speed and delight.</p>
            <div className="socials">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">⌁</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>
          <div>
            <strong>Quick Links</strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/#featured">Featured</a></li>
            </ul>
          </div>
          <div>
            <strong>Support</strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div>
            <strong>Contact</strong>
            <p className="muted">support@shopx.com</p>
            <p className="muted">+91 98765 43210</p>
          </div>
        </div>
        <p className="muted" style={{ marginTop: 16 }}>© {new Date().getFullYear()} ShopX. All rights reserved.</p>
      </div>
    </footer>
  )
}

