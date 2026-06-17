import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { CategoryPage } from './pages/CategoryPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'

function NotFoundPage() {
  return (
    <main className="container">
      <section className="not-found">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lippan-art" element={<CategoryPage categorySlug="lippan-art" />} />
          <Route path="/clay-art" element={<CategoryPage categorySlug="clay-art" />} />
          <Route path="/others" element={<CategoryPage categorySlug="others" />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
