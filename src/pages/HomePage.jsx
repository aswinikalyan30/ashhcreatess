import { CategoryCard } from '../components/CategoryCard'
import { InstagramButton } from '../components/InstagramButton'
import { ProductCarousel } from '../components/ProductCarousel'
import { categories, getNewestProducts } from '../data/products'

export function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-content">
          <p className="eyebrow">Handmade with care</p>
          <h1>Handcrafted Art Pieces Made with Love</h1>
          <p>
            Discover warm, artistic, and premium handcrafted decor pieces made to
            brighten your home and gifting moments.
          </p>
          <InstagramButton />
        </div>
      </section>

      <section className="container section-space">
        <ProductCarousel products={getNewestProducts(6)} />
      </section>

      <section className="container section-space">
        <div className="section-heading">
          <h2>Browse by Category</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section id="contact" className="container section-space">
        <div className="contact-card">
          <h2>Interested in a product?</h2>
          <p>DM me on Instagram to order or ask questions.</p>
          <InstagramButton />
        </div>
      </section>
    </main>
  )
}
