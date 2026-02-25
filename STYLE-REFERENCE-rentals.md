# STYLE-REFERENCE.md — Prime Cyprus Rentals (rentals.primecyprus.xyz)

> Read this before creating or editing any HTML file for the rentals site.
> The full CSS lives inline in each HTML file (no external stylesheet).
> This is a SEPARATE site from primecyprus.xyz — different color scheme (light, not dark).

---

## Color Palette

```css
--bg: #f7f3ee              /* warm cream — main page background */
--bg-card: #ffffff          /* card / sidebar background */
--navy: #1a2332             /* primary dark color — headings, nav */
--navy-light: #2d3f55       /* secondary navy */

--gold: #c9943a             /* primary accent */
--gold-light: #e8b86d       /* hover state */

--text: #1a2332             /* primary text */
--text-secondary: #5a6a7a   /* body copy */
--text-muted: #8a9aaa       /* labels, captions */

--border: rgba(26,35,50,0.08)  /* subtle borders */
```

---

## Typography

```css
--font-display: 'Playfair Display', Georgia, serif   /* headings, logo */
--font-body: 'DM Sans', -apple-system, sans-serif    /* all body text */
```

Same fonts as main site, different weights used:
- Headings: Playfair Display, font-weight 600–700
- Body: DM Sans, 300–600
- Section labels: DM Sans, 0.8rem, font-weight 600, letter-spacing 0.15em, uppercase, gold

---

## Layout

```css
--max-width: 1200px
--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--radius: 16px

.container: max-width 1200px, margin auto, padding 0 24px
```

---

## Navigation

- Fixed, top, full width
- `background: rgba(247,243,238,0.92)` + `backdrop-filter: blur(20px)` — **light/cream**
- `height: 68px` (main site is 72px)
- `border-bottom: 1px solid var(--border)`
- Logo: Playfair Display, `◆` in gold, "RENTALS" subtitle in small uppercase
- Nav links: color `var(--text-secondary)` → hover navy
- Right side: language toggle + hamburger menu icon

---

## Hero Section

- Full-width image carousel, `height: 85vh`
- Dark overlay: `linear-gradient(to bottom, rgba(10,15,28,0.3) 0%, rgba(10,15,28,0.55) 100%)`
- Hero content centered: `position: absolute; top: 40%; transform: translateY(-50%)`
- White text on dark overlay
- Search bar: `position: absolute; bottom: 32px; left: 0; right: 0; z-index: 10`
- Slide counter bottom-right, dot navigation bottom-center

---

## Search Bar / Search Card

```css
.search-card: white bg, border-radius 14px, box-shadow, display flex
.search-field: flex-direction column, padding 14px 20px, border-right separator
.search-field__label: 0.65rem, uppercase, letter-spacing 0.1em, text-muted
select/input: no border, no outline, font DM Sans, navy color
.search-submit: navy background, white text, gold hover
```

---

## Rental Cards

```css
.rental-card: white bg, border-radius 16px, overflow hidden, box-shadow
.rental-card__img: height 240px, position relative (for object-fit cover img)
.rental-card__body: padding 20px 24px 24px
.rental-card__location: 0.7rem, uppercase, letter-spacing 0.12em, gold
.rental-card__title: Playfair Display, 1.3rem, navy
.rental-card__desc: 0.88rem, text-secondary, 3-line clamp
.rental-card__footer: flex space-between, price left, CTA button right
.rental-card__price: Playfair Display, 1.4rem, navy
.rental-card__cta: gold border, gold text, border-radius 8px, hover gold bg white text
```

Cards grid: `repeat(auto-fill, minmax(340px, 1fr))`, gap 28px

---

## Sanity CMS Integration

- Project ID: `7ic15vv6`
- Dataset: `production`
- API endpoint: `https://7ic15vv6.api.sanity.io/v2024-02-24/data/query/production`
- Image CDN: `https://cdn.sanity.io/images/7ic15vv6/production/`

**Image URL transform:**
```js
function imageUrl(ref) {
  return CDN + ref.replace(/^image-/, '').replace(/-([a-z]+)$/, '.$1');
}
// e.g. "image-abc123-1200x800-jpg" → "abc123-1200x800.jpg"
```

**Key field names in schema:**
- `title`, `slug.current`, `location` (town/area), `address` (full, internal)
- `priceMonthly` (NOT pricePerMonth)
- `bedrooms`, `bathrooms`, `areaM2`, `propertyType`
- `minStay`, `maxStay`, `furnished`, `availableFrom`
- `description`, `images[].asset._ref`
- `coordinates.lat`, `coordinates.lng`

**Card visibility fix — always add after rendering cards:**
```js
grid.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
```

---

## Property Detail Page

- URL pattern: `property.html?slug=green-bay-blue-view`
- Fetches single property by `slug.current`
- Layout: full-width gallery top, then 2-col (content left, sticky sidebar right)
- Sidebar has price, details, enquire CTA
- Enquire links to: `https://primecyprus.xyz/contact.html?property=TITLE`

---

## Footer

- `background: var(--navy)` — dark navy
- White/muted text
- Logo + copyright, simple single row

---

## Responsive Breakpoints

- `900px`: property layout stacks to single column
- `768px`: nav collapses, search bar adjusts
- `600px`: gallery thumbs hidden on property page

---

## File Structure Notes

- CSS is **inline** in `<style>` tag — no external stylesheet
- JS is **inline** in `<script>` tag at bottom — no external JS file
- Google Fonts loaded via `<link>` in `<head>`
- Deployed on Vercel via GitHub: `github.com/KTproject/primecyprus-rentals`
- Main branch: `main`
