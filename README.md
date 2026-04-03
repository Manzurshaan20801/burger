# Smashed Burger Empire — Website

Premium restaurant website for **Smashed Burger Empire @ Tapak Urban Subang**.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **TypeScript**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, SEO, structured data
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   ├── Hero.tsx          # Cinematic hero with burger animation
│   ├── BurgerAnimation.tsx  # 3D exploded burger (CSS + Framer Motion)
│   ├── About.tsx         # Brand story section
│   ├── WhyChooseUs.tsx   # Selling points grid
│   ├── MenuSection.tsx   # Tabbed menu with category filter
│   ├── Reviews.tsx       # Customer testimonials
│   ├── OrderSection.tsx  # Prominent Foodpanda CTA
│   ├── Location.tsx      # Map, address, contact, hours
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── Footer.tsx        # Links, contact, social, CTA
│   ├── AnimatedSection.tsx  # Scroll-reveal wrapper
│   └── SectionHeading.tsx   # Reusable section heading
└── data/
    ├── siteConfig.ts     # Central brand info (easy to update)
    └── menu.ts           # Menu items with prices and verification flags
```

## Content Management

All business data is centralized for easy updates:

- **Brand info, contact, links**: `src/data/siteConfig.ts`
- **Menu items and prices**: `src/data/menu.ts`
- **Verification status**: See `content-source-notes.md`

Each menu item has a `priceVerified` boolean — items marked `false` show an "approx" indicator.

## What Was Verified

See `content-source-notes.md` for full details. Key verified items:
- Business name, Foodpanda URL, Instagram handle
- Address and phone number
- Core menu items and prices (Smashed Beef, Double Smashed, Crispy Chicken, Combo Single)
- Multiple locations

## What Needs Manual Confirmation

- Foodpanda rating (4.9 — blocked by scraping)
- Some menu prices (from Cyberjaya listing, may differ)
- Opening hours (from Instagram bio — may vary by day)
- Halal certification status (conflicting sources — intentionally not claimed)
- GrabFood availability
- Aggregate review count for structured data

## Suggested Image Assets

The site currently uses CSS-rendered burger layers for the animation. For production:

1. **Hero burger photo**: High-res exploded burger on dark background (like the reference image)
2. **OG image**: 1200x630 branded card for social sharing
3. **Favicon**: Burger or "S" logo icon
4. **Menu item photos**: Individual shots of each burger/item
5. **Location photo**: Tapak Urban Subang stall photo

## Performance Notes

- No external 3D library (Three.js) — burger animation uses CSS 3D transforms + Framer Motion
- GPU-accelerated animations via `transform3d` and `will-change`
- Google Fonts loaded with `display: swap`
- Map iframe uses lazy loading
- All animations use `viewport: { once: true }` to avoid re-triggering
