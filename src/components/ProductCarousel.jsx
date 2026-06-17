import { useRef } from 'react'
import { Link } from 'react-router-dom'

export function ProductCarousel({ products }) {
  const trackRef = useRef(null)

  const scrollByWidth = (direction) => {
    if (!trackRef.current) {
      return
    }
    const cardWidth = trackRef.current.firstElementChild?.getBoundingClientRect().width ?? 300
    trackRef.current.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
  }

  return (
    <section className="carousel-section">
      <div className="section-heading">
        <h2>Newly Listed Products</h2>
        <div className="carousel-controls">
          <button type="button" onClick={() => scrollByWidth(-1)} aria-label="Scroll left">
            ←
          </button>
          <button type="button" onClick={() => scrollByWidth(1)} aria-label="Scroll right">
            →
          </button>
        </div>
      </div>
      <div className="carousel-track" ref={trackRef}>
        {products.map((product) => (
          <article key={product.id} className="carousel-card">
            <img src={product.images[0]} alt={product.title} loading="lazy" />
            <div className="carousel-card-content">
              <h3>{product.title}</h3>
              <p>{product.category.replace('-', ' ')}</p>
              <p className="price">{product.cost}</p>
              <Link className="button primary" to={`/product/${product.id}`}>
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
