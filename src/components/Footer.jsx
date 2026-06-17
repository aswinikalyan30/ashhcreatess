import { InstagramButton } from './InstagramButton'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          Handmade art products. For orders and custom requests, DM on Instagram.
        </p>
        <InstagramButton />
      </div>
    </footer>
  )
}
