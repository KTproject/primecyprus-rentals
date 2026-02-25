# BRAND.md — Prime Cyprus Rentals
# Subdomain: rentals.primecyprus.xyz
# Folder: ~/Desktop/primecyprus-rentals/

---

## What This Site Is

A premium rental aggregator for Cyprus — curated villas, apartments, and houses for short stays, long-term lets, and people relocating to the island. It is a subdomain of primecyprus.xyz but operates as its own product with its own design, tone, and audience.

It is NOT the main consultancy site. Do not apply the dark navy aesthetic from primecyprus.xyz here.

---

## Relationship to Main Site

- Same brand family: same fonts, same logo mark (◆ Prime Cyprus · Rentals), same gold accent
- Different color scheme: warm cream/sand background, not dark navy
- Different purpose: browsing, discovery and booking, not consulting and conversion
- Footer always links back to primecyprus.xyz for residency/tax/property services

---

## Audience

Broader than the main site. Includes:
- People looking for holiday homes
- People relocating to Cyprus who need a first home
- Crypto/tech founders wanting to scout the island before committing
- Short-stay visitors (weeks to months) — lifestyle + business
- Long-term residents (6 months+) already decided on Cyprus
- The same digital economy audience as the main site, but earlier in their journey

They are browsing, not yet consulting. The tone is warmer and more discovery-oriented.

---

## Tone of Voice

Same underlying DNA as the main site — premium, minimal, no fluff — but slightly warmer because the context is lifestyle, not tax strategy.

- Short sentences. No filler.
- Lead with the life and the place, not the features
- Confident but not cold. Inviting without being salesy.
- Never: aggressive CTAs, pop-ups

---

## Color System

Do not change these. The palette was intentionally chosen to feel bright and Mediterranean while staying connected to the Prime Cyprus brand.

```css
--bg-primary:    #f7f3ee;   /* warm cream — page background */
--bg-secondary:  #ede8df;   /* slightly darker cream — alt sections */
--bg-card:       #ffffff;   /* pure white cards */
--text-primary:  #1a1f2e;   /* near-black — headings */
--text-secondary:#4a5568;   /* body text */
--text-muted:    #8896a8;   /* captions, labels, metadata */
--copper:        #b87333;   /* primary accent — links, badges, labels */
--copper-light:  #d4935a;   /* hover state for copper */
--copper-glow:   rgba(184,115,51,0.1);
--navy:          #1a2744;   /* CTA buttons, footer background, card CTAs on hover */
--gold:          #d4a853;   /* nav accent, hero eyebrow, dot indicators — matches main site gold */
--border:        rgba(26,31,46,0.1);
--border-copper: rgba(184,115,51,0.25);
```

---

## Typography

Same fonts as main site — do not change.

```css
--font-display: 'Playfair Display', Georgia, serif;   /* headings, prices, card titles */
--font-body:    'DM Sans', -apple-system, sans-serif; /* everything else */
```

Hierarchy on property cards (5 levels, all intentional):
1. Location — 0.65rem, copper, uppercase, heavy tracking
2. Title — Playfair Display, 1.2rem, bold, dark
3. Description — 0.85rem, muted, 2-line clamp
4. Features — 0.75rem, secondary color, icon + text pairs
5. Price — Playfair Display, 1.25rem, bold, navy. Period in small body weight.

---

## Navigation

**The nav is: logo left**

No nav links. No CTA button. No "Book a Call". No "Main Site" link in the nav.


Logo treatment:
```
◆ Prime Cyprus   ← Playfair Display, white, gold accent on ◆ and Cyprus
RENTALS          ← 0.57rem, uppercase, heavy tracking, gold
```

---

## Hero

**Full viewport height carousel. No exceptions.**

- `height: 100vh; min-height: 600px`
- 3 slides: `hero-beachfront-cyprus-rental.webp`, `hero-cyprus-seafront-villa-limassol.webp`, `rental-cyprus-greece-luxury.webp`
- Images fill edge-to-edge with `background-size: cover`
- Auto-advances every 5.5 seconds, pauses on manual dot click then resumes
- Dot navigation: bottom-right. Active dot is gold and wider (26px, border-radius 4px). Inactive dots are small circles (8px, white/35% opacity).
- Slide counter: bottom-left. Faint text. Hidden on mobile.

**Overlay** — dual-layer gradient (critical for legibility, do not simplify):
```css
background: linear-gradient(
  to bottom,
  rgba(10,18,30,0.5)  0%,    /* nav readability */
  rgba(10,18,30,0.05) 30%,   /* image shows through */
  rgba(10,18,30,0.05) 50%,
  rgba(10,18,30,0.55) 72%,   /* text legibility starts */
  rgba(10,18,30,0.80) 100%   /* text legibility bottom */
);
```


## Search Bar

Floats below the hero with negative margin (`margin-top: -44px`) creating an elevated card effect.

Structure: white card, large border-radius (16px), heavy shadow, 4 fields side by side + navy search button.

Fields: Location · Property type · Duration · Guests

On mobile: stacks vertically.

Search triggers the filter pill system and scrolls to listings. It does not navigate to a new page.

---


## Property Cards

3-column grid desktop, 2-column tablet, 1-column mobile. Gap: 24px.

Card anatomy:
- Image area: 220px height, `object-fit: cover`. Falls back to gradient + emoji if no image.
- Badge top-left: copper pill ("Available", "Short Stay") or navy pill ("Prime Exclusive")
- Type tag: white pill, positioned right of badge (right: 48px to make room for share button)
- **Share button**: top-right corner. White circle (32px), share icon SVG. Copies property URL to clipboard on click. Shows "✓ Link copied" toast at bottom of screen. Do not remove this.
- Body: location label (copper) → title (Playfair) → description (2-line clamp) → feature chips → price + enquire CTA

Hover: `translateY(-5px)`, stronger shadow, copper border.

Card CTA ("Enquire →"): small outlined button, copper text/border, navy on hover. Links to primecyprus.xyz/contact.html.

---

## Share Button & Toast

Every card has a share button. When clicked:
- Copies `window.location.origin + pathname + '#' + data-slug` to clipboard
- Uses `navigator.clipboard.writeText()` with textarea fallback
- Shows toast: "✓ Link copied" — fixed bottom center, navy background, white text, rounded pill, 2.4s duration

Each card needs a `data-slug` attribute with a URL-friendly identifier.

---

## Sections Order

1. Nav (fixed)
2. Hero carousel (100vh)
3. Search bar (floating, overlaps hero bottom)
5. Listings grid ("Featured Rentals")
6. Areas grid ("Find your ideal base")
8. FAQ
9. Footer

---

## Footer

Navy background (`#1a2744`). 3-column grid: brand left, Browse center, Prime Cyprus right.

Logo in footer: same mark as nav. Tagline in muted white.
Browse column: All Rentals, Browse by Area, FAQ
Prime Cyprus column: Main Site, Residency & Tax, Property for Sale, Contact — all link to primecyprus.xyz

Footer bottom: copyright left, disclaimer right. 

---

## What Not to Do

- Do not apply the dark `#0a0e17` background from the main site
- Do not add a "Book a Call" button to the nav
- Do not add nav links (the search bar IS the nav)
- Do not put a headline over a fully transparent hero — always use the dual-layer overlay
- Do not change the font stack
- Do not remove the share button from cards
- Do not use "affordable", "budget", "dream home", "paradise"
- Do not add pop-ups
- Do not change the card image height (220px) without adjusting the type tag and share button positions
