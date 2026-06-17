import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { InstagramButton } from '../components/InstagramButton'
import { getProductById } from '../data/products'

export function ProductDetailPage() {
  const { productId } = useParams()
  const product = getProductById(productId ?? '')
  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    setSelectedImage(product?.images?.[0] ?? '')
  }, [product])

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
          <img className="hero-image" src={selectedImage || product.images[0]} alt={product.title} />
          <div className="thumbnail-grid">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`thumbnail-button ${selectedImage === image ? 'active' : ''}`.trim()}
                onClick={() => setSelectedImage(image)}
                aria-label={`View image ${index + 1} for ${product.title}`}
              >
                <img src={image} alt={`${product.title} preview ${index + 1}`} loading="lazy" />
              </button>
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
          <InstagramButton product={product} copyProductDetails />
        </section>
      </article>
    </main>
  )
}
