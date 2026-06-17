import { ProductCard } from '../components/ProductCard'
import { InstagramButton } from '../components/InstagramButton'
import { getCategoryBySlug, getProductsByCategory } from '../data/products'

export function CategoryPage({ categorySlug }) {
  const category = getCategoryBySlug(categorySlug)
  const products = getProductsByCategory(categorySlug)

  if (!category) {
    return (
      <main className="container section-space">
        <h1>Category not found</h1>
      </main>
    )
  }

  return (
    <main className="container section-space">
      <section className="page-header">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <InstagramButton />
      </section>
      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
