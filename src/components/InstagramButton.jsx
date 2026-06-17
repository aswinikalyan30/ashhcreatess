import { INSTAGRAM_PROFILE_URL } from '../data/products'

export function InstagramButton({ className = '' }) {
  return (
    <a
      className={`button instagram ${className}`.trim()}
      href={INSTAGRAM_PROFILE_URL}
      target="_blank"
      rel="noreferrer"
    >
      DM on Instagram
    </a>
  )
}
