# Ova Cart Frontend Store (React)

## Run locally

```bash
npm install
npm run dev
```

## What is implemented

- React + Vite frontend-only store
- Product data served from JSON: `public/data/products.json`
- Category, subcategory, and search filtering
- Header and footer navigation with working routes
- Social links:
  - Instagram: https://www.instagram.com/_ovacart
  - Facebook: https://www.facebook.com/ovacart
  - Twitter/X: https://x.com/ovacart/
- Product detail page (image opens on separate page with description + add to cart)
- Login required before adding to cart
- Cart page with quantity update, remove, clear cart
- Separate contact page
- Optimized lightweight image assets (SVG + lazy loading + dimensions)

## Important note about source images/descriptions

This project is wired so all product content comes from `public/data/products.json`.
To use exact images/descriptions from `https://www.ovacart.com.np`, replace each product `image` and `description` value in that file with the official Ova Cart source values.
