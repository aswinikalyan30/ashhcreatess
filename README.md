# AshhCreatess - Handmade Art Product Website

A clean, artsy, mobile-friendly product listing website for handmade art products.
It includes:

- Home page with hero, newest-products carousel, category cards, and Instagram CTA
- Separate category pages for Lippan Art, Clay Art, and Others
- Product detail pages with gallery and full product information
- Instagram DM buttons in header, footer, home, category, and product pages

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

This project is preconfigured for Netlify using `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect for React Router: `/* -> /index.html`

### Option 1: Deploy from GitHub (recommended)

1. Push this project to GitHub.
2. In Netlify, choose **Add new site** -> **Import an existing project**.
3. Select your GitHub repo.
4. Netlify should auto-detect `netlify.toml`. If prompted, use:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

### Option 2: Manual deploy

1. Run `npm run build`.
2. In Netlify, create a new site and drag-drop the `dist` folder.

## Update products

All product content lives in:

`src/data/products.js`

To add a new product:

1. Add a new object in the `products` array.
2. Set a newer `listedAt` date (YYYY-MM-DD) if you want it to appear in **Newly Listed Products** carousel.
3. Assign category as one of:
   - `lippan-art`
   - `clay-art`
   - `others`
4. Add one or more image URLs in the `images` array.

The site automatically updates:

- Home carousel (newest products)
- Category listing pages
- Product detail pages

## Update Instagram link

Change `INSTAGRAM_PROFILE_URL` in:

`src/data/products.js`
