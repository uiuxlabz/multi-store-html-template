# MULTISHOP — Multi-Category E-Commerce Store

**"Shop Everything, Love Anything."**

A premium, framework-free multi-category online store template. Pure HTML, CSS, and vanilla JavaScript — no dependencies, no build tools. Responsive from mobile to desktop with a cohesive red (#DC2626) and navy (#1E293B) design system.

---

## Live Pages

| Page | Description |
|------|-------------|
| [Home](index.html) | Hero carousel, category grid, featured products, offer banner, testimonials, newsletter |
| [Shop](shop.html) | Full product grid (12 products) with filter tabs: All, Fashion, Electronics, Home, Sports, Deals, New |
| [About](about.html) | Brand story, mission, core values, stats, team section |
| [Contact](contact.html) | Contact info cards, working form with validation, FAQ section |

---

## Features

- **Responsive Design** -- Fluid layouts using CSS Grid, Flexbox, and clamp-based fluid typography. Breakpoints at 980px (tablet) and 720px (mobile).
- **Mobile Navigation** -- Full-screen off-canvas menu with animated burger toggle.
- **Hero Carousel** -- 3-slide auto-rotating carousel with dot navigation (5s interval).
- **Product Grid** -- 12 products across 4 categories with hover effects (image zoom, action buttons, shadow lift).
- **Filter Tabs** -- Client-side category filtering with animated transitions. Tags: fashion, electronics, home, sports, deals, new.
- **Cart Demo** -- Add-to-cart buttons with visual feedback (checkmark animation, cart count update, pulse on cart icon).
- **Scroll Reveal** -- IntersectionObserver-based entrance animations with staggered delays.
- **Form Handling** -- `[data-form]` attribute triggers validation and success/error message display.
- **Newsletter Form** -- Red-themed CTA section with email subscription.
- **Accessibility** -- Semantic HTML, ARIA labels, keyboard-navigable, reduced-motion support.

---

## Design System

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `--red` | #DC2626 | Primary CTA, badges, hover states |
| `--red-dark` | #B91C1C | Button hover darken |
| `--red-light` | #FEE2E2 | Light backgrounds, focus rings |
| `--navy` | #1E293B | Footer, secondary buttons, headings |
| `--navy-dark` | #0F172A | Footer background, dark overlays |
| `--navy-light` | #334155 | Borders, muted elements |

### Typography
- **Headings:** Poppins (700-800)
- **Body:** Inter (400-600)
- **Fluid scale:** clamp() from text-xs (0.7rem) to text-5xl (3.5rem)

### Spacing Scale
xs (0.25rem) -> sm (0.5rem) -> md (1rem) -> lg (1.5rem) -> xl (2rem) -> 2xl (3rem) -> 3xl (4rem) -> 4xl (6rem)

---

## File Structure

```
multi-store-html-template/
  index.html              -- Home page
  shop.html               -- Product catalog with filters
  about.html              -- Brand story and team
  contact.html            -- Contact form and FAQ
  README.md               -- This file
  assets/
    css/
      style.css           -- Full design system and components (~1,670 lines)
    js/
      main.js             -- Carousel, filters, cart, forms, reveals (~197 lines)
    img/
      carousel-1/2/3.jpg  -- Hero images
      cat-1/2/3/4.jpg     -- Category cards
      product-1..9.jpg    -- Product grid images
      testimonial-1/2/3.jpg
      vendor-1..5.jpg     -- Brand partner logos
      offer-1/2.jpg       -- Promo banners
      user.jpg            -- Team member
      payments.png        -- Footer payment icons
      about.jpg           -- About hero
```

---

## Technical Notes

- **Zero dependencies** -- No frameworks, no npm, no bundlers. Open any HTML file directly in a browser.
- **Images** -- 33 images included in `assets/img/`. All use `loading="lazy"` for performance.
- **Form behavior** -- The `[data-form]` handler in `main.js` validates required fields, shows `.form-ok` on success and `.form-err` on failure, then auto-hides the success message after 5 seconds.
- **Filter system** -- Products use `data-category` attributes (space-separated tags). The `.filter-tab[data-filter]` buttons toggle visibility with fade-in animation.
- **Cart counter** -- Demo only; resets on page refresh. Tracks count in memory and updates `.header__cart-count`.

---

## Browser Support

Chrome 80+, Firefox 80+, Safari 14+, Edge 80+. Uses modern CSS (clamp, grid, custom properties) and ES6 arrow functions. Reduced-motion media query included.

---

**Brand:** MULTISHOP
**Tagline:** Shop Everything, Love Anything.
**Colors:** Red #DC2626 + Navy #1E293B
