import { Link, useParams } from 'react-router-dom'
import { InstagramButton } from '../components/InstagramButton'
import { getProductById } from '../data/products'

export function ProductDetailPage() {
  const { productId } = useParams()
  const product = getProductById(productId ?? '')

  if (!product) {
    return (
      <main className="container section-space">
        <h1>Product not found</h1>
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </main>
    )
  }

  return (
    <main className="container section-space">
      <article className="product-detail">
        <section className="product-gallery">
          <img className="hero-image" src={product.images[0]} alt={product.title} />
          <div className="thumbnail-grid">
            {product.images.map((image) => (
              <img key={image} src={image} alt={`${product.title} preview`} loading="lazy" />
            ))}
          </div>
        </section>
        <section className="product-information">
          <p className="eyebrow">{product.category.replace('-', ' ')}</p>
          <h1>{product.title}</h1>
          <p>{product.fullDescription}</p>
          <ul className="detail-list">
            <li>
              <strong>Dimensions:</strong> {product.dimensions}
            </li>
            <li>
              <strong>Cost:</strong> {product.cost}
            </li>
            <li>
              <strong>Materials used:</strong> {product.materials}
            </li>
            <li>
              <strong>Color options:</strong> {product.colorOptions}
            </li>
            <li>
              <strong>Customization:</strong> {product.customization}
            </li>
            <li>
              <strong>Delivery note:</strong> {product.shippingNote}
            </li>
            <li>
              <strong>Availability:</strong> {product.availability}
            </li>
          </ul>
          <InstagramButton />
        </section>
      </article>
    </main>
  )
}
