## Webshop Next.js — Figma-driven build

Implements the Ecommerce wireframe from Figma with Next.js (App Router), Tailwind CSS v4, and public product APIs (DummyJSON/FakeStore).

### Run locally

```pwsh
npm install
npm run dev
```

Open http://localhost:3000

### Build & start

```pwsh
npm run build
npm start
```

### Folder structure

- `app/` — App Router pages and UI
  - `components/` — shared UI (Navbar, Footer, ProductCard, etc.)
- `lib/` — API clients and utilities
- `public/` — static assets

### Styling & tokens

- Tailwind v4 with tokens from Figma mapped into `app/globals.css` under `@theme inline`.
- Fonts: Public Sans (primary), Inter (nav), loaded via `next/font`.

### Data sources

- DummyJSON: `https://dummyjson.com/products`
- FakeStore: `https://fakestoreapi.com/products`

### Accessibility & SEO

- Semantic HTML, alt text on images, keyboard-friendly controls.
- Base metadata in `app/layout.jsx` (OpenGraph, titles, descriptions).
- Smooth scrolling enabled.

### Testing

Run unit tests with Vitest:

```pwsh
npm run test
```

### Deployment

Vercel:

```pwsh
npm run build
vercel deploy --prod
```

Netlify:

```pwsh
netlify deploy --build --prod
```

### Notes

- Remote images from Figma and the APIs are allowed via `next.config.ts`.
- API failures show inline error messages; loading states are displayed in each section.
