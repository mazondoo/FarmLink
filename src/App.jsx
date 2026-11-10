
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="/" className="logo">Farm<span>Link</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#marketplace">Marketplace</a>
          <a href="#how-it-works">How it works</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Get Started</button>
        </div>
      </nav>

      {/* Hero section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">GROWING CONNECTIONS, CREATING OPPORTUNITIES</p>

          <h1>
            Fresh produce.<br />
            Stronger <span>connections.</span>
          </h1>

          <p className="hero-description">
            FarmLink connects farmers directly with businesses looking
            for fresh, quality produce. Find opportunities, discover
            suppliers and grow together.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Marketplace</button>
            <button className="secondary-btn">Join as a Farmer</button>
          </div>

          <div className="hero-note">
            Connecting farmers with the businesses that need them.
          </div>
        </div>

        <div className="hero-visual">
          <div className="produce-circle">🥬</div>
          <div className="produce-card">
            <span>🌽</span>
            <div>
              <strong>Fresh from the farm</strong>
              <p>Quality produce, better connections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User types */}
      <section className="audience-section">
        <div className="section-heading">
          <p className="eyebrow">ONE PLATFORM, TWO OPPORTUNITIES</p>
          <h2>Who is FarmLink for?</h2>
          <p>Whether you grow produce or source it, there's a place for you.</p>
        </div>

        <div className="audience-grid">
          <div className="audience-card">
            <span className="card-icon">👩🏽‍🌾</span>
            <h3>For Farmers</h3>
            <p>
              Showcase your produce, reach new buyers and manage
              your product listings.
            </p>
            <a href="#how-it-works">Start selling →</a>
          </div>

          <div className="audience-card">
            <span className="card-icon">🏪</span>
            <h3>For Businesses</h3>
            <p>
              Discover local suppliers, compare available produce
              and connect with farmers.
            </p>
            <a href="#marketplace">Find suppliers →</a>
          </div>
        </div>
      </section>

      {/* Marketplace preview */}
      <section className="marketplace-section" id="marketplace">
        <div className="section-heading">
          <p className="eyebrow">EXPLORE THE MARKETPLACE</p>
          <h2>Fresh produce, all in one place.</h2>
          <p>A preview of the products buyers will be able to discover.</p>
        </div>

        <div className="produce-grid">
          <div className="product-card">
            <div className="product-image">🥕</div>
            <h3>Fresh Carrots</h3>
            <p>Available from local farmers</p>
            <strong>View product →</strong>
          </div>

          <div className="product-card">
            <div className="product-image">🥬</div>
            <h3>Fresh Spinach</h3>
            <p>Available from local farmers</p>
            <strong>View product →</strong>
          </div>

          <div className="product-card">
            <div className="product-image">🍅</div>
            <h3>Fresh Tomatoes</h3>
            <p>Available from local farmers</p>
            <strong>View product →</strong>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">SIMPLE. DIRECT. CONNECTED.</p>
          <h2>How FarmLink works</h2>
        </div>

        <div className="steps-grid">
          <div>
            <span>01</span>
            <h3>Create an account</h3>
            <p>Join FarmLink as a farmer or business buyer.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Discover or list produce</h3>
            <p>Farmers list products while buyers explore the marketplace.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Connect and trade</h3>
            <p>Buyers connect with farmers to discuss orders and pricing.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="/" className="logo">Farm<span>Link</span></a>
        <p>Connecting farmers. Empowering businesses. Growing together.</p>
        <small>© 2026 FarmLink. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
