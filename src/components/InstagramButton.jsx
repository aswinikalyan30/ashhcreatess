import { INSTAGRAM_PROFILE_URL } from '../data/products'

function getInstagramUsername(profileUrl) {
  const match = profileUrl.match(/instagram\.com\/?([^/?#]+)/i)
  return match?.[1] || ''
}

function buildProductMessage(product) {
  if (!product) {
    return 'Hi, I am interested in your handmade products. Please share more details.'
  }

  return `Hi, I am interested in this product:\n\nProduct: ${product.title}\nDescription: ${product.shortDescription}\nDimensions: ${product.dimensions}\nCost: ${product.cost}\nAvailability: ${product.availability}\n\nPlease share more details.`
}

export function InstagramButton({
  className = '',
  product = null,
  copyProductDetails = false,
}) {
  const instagramUsername = getInstagramUsername(INSTAGRAM_PROFILE_URL)
  const dmUrl = instagramUsername
    ? `https://ig.me/m/${instagramUsername}`
    : INSTAGRAM_PROFILE_URL

  const openInstagramProfile = () => {
    window.open(INSTAGRAM_PROFILE_URL, '_blank', 'noopener,noreferrer')
  }

  const orderOnInstagram = async () => {
    if (!copyProductDetails || !product) {
      openInstagramProfile()
      return
    }

    const message = buildProductMessage(product)

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(message)
      } else {
        throw new Error('Clipboard API not available')
      }
    } catch {
      window.alert('Product details could not be copied. Please copy them manually.')
    } finally {
      window.open(dmUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button
      type="button"
      className={`button instagram ${className}`.trim()}
      onClick={orderOnInstagram}
    >
      {copyProductDetails && product
        ? 'DM on Instagram - product details will be copied'
        : 'Checkout Instagram page'}
    </button>
  )
}
