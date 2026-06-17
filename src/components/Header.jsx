import { Link, NavLink } from 'react-router-dom'
import { INSTAGRAM_PROFILE_URL } from '../data/products'
import { InstagramButton } from './InstagramButton'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/lippan-art', label: 'Lippan Art' },
  { to: '/clay-art', label: 'Clay Art' },
  { to: '/others', label: 'Others' },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link className="brand" to="/">
          AshhCreatess
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="nav-link"
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Contact / Instagram
          </a>
        </nav>
        <InstagramButton />
      </div>
    </header>
  )
}
