import { Link } from 'react-router-dom'
import { InstagramButton } from './InstagramButton'

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.images[0]} alt={product.title} loading="lazy" />
      <div className="product-card-content">
        <h3>{product.title}</h3>
        <p>{product.shortDescription}</p>
        <ul className="product-meta">
          <li>
            <strong>Dimensions:</strong> {product.dimensions}
          </li>
          <li>
            <strong>Cost:</strong> {product.cost}
          </li>
          <li>
            <strong>Status:</strong> {product.availability}
          </li>
        </ul>
        <div className="card-actions">
          <Link className="button primary" to={`/product/${product.id}`}>
            View Details
          </Link>
          <InstagramButton />
        </div>
      </div>
    </article>
  )
}
