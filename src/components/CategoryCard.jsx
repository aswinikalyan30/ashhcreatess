import { Link } from 'react-router-dom'

export function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <img src={category.image} alt={category.name} loading="lazy" />
      <div className="category-card-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <Link className="button secondary" to={`/${category.slug}`}>
          View Products
        </Link>
      </div>
    </article>
  )
}
