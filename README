# Kiro Prompt — Astrology & Numerology Website Demo Page

## Project Context

Build a **single-file demo website** for an astrology and numerology consultant based in India.  
Client: **Lakshmi Lavanyah** (brand placeholder: "Jyotish by Lakshmi").  
This is a **demo to show the client** — not final production code.  
Purpose: Impress the client with design and convince them to proceed with full project.

---

## Output

**One single file: `astrology-demo.html`**  
All CSS and JS must be **inline** inside the same HTML file.  
No external files. No build tools. No frameworks.  
Must open directly in any browser by double-clicking the file.

---

## Tech Stack

- Pure **HTML5**
- **CSS3** (inside `<style>` tag — no external stylesheets)
- Vanilla **JavaScript** (inside `<script>` tag — no external JS)
- Google Fonts via CDN link tag:
  - `Cinzel` — headings (sacred/traditional feel)
  - `Lato` — body text (clean, readable)

---

## Color Palette (Strict)

```css
:root {
  --primary: #F5A623;      /* Mongo Yellow — CTAs, highlights */
  --secondary: #2E7D32;    /* Deep Green — headings, accents */
  --bg: #FFFFFF;           /* White — main background */
  --text: #1A1A1A;         /* Near black — body text */
  --soft-bg: #FFFBF0;      /* Warm white — alternate sections */
  --gold-dark: #C47F00;    /* Darker yellow — hover states */
}
```

**No purple. No dark navy. No gradients outside these colors.**

---

## Page Sections (Top to Bottom)

### 1. Sticky Navbar
- Logo left: ☽ + "Jyotish by Lakshmi"
- Nav links right: Home, Services, How It Works, Book Now
- Background: white, bottom border yellow (3px)
- Smooth scroll to sections on click

### 2. Hero Section
- Background: `#FFFBF0` with subtle SVG star/dot pattern (yellow, low opacity)
- Large heading: `"Unlock the Secrets of Your Stars"`
- Subheading: `"Vedic Astrology • Numerology • Jathakam Readings"`
- Two CTA buttons:
  - Primary: `"Book Consultation"` — yellow bg, dark text, rounded
  - Secondary: `"Get Lucky Number"` — green border, green text, rounded
- Decorative: large zodiac/mandala SVG circle (right side, yellow, low opacity)

### 3. Services Section (`id="services"`)
- Heading: `"What We Offer"`
- 3 cards in a CSS grid (1 col mobile, 3 col desktop):

| Emoji | Title | Description |
|---|---|---|
| 🔯 | Vedic Astrology | Birth chart, Kundali analysis, life predictions based on your Jathakam |
| 🔢 | Numerology | Name analysis, life path number, destiny number |
| 📱 | Lucky Number Consultation | Best mobile & bank account numbers based on your Jathakam and ruling planet |

- Card: white bg, 4px yellow top border, green heading, lifts on hover with yellow box-shadow

### 4. How It Works (`id="how-it-works"`)
- Heading: `"How It Works"`
- 4-step horizontal timeline (flex row on desktop, column on mobile):
  1. Share Your Details
  2. Jathakam Analysis
  3. Personalized Report
  4. Secure Payment
- Step circles: yellow bg, white number
- Connecting line: green, dashed

### 5. Lucky Number Highlight (`id="lucky-number"`)
- Full-width green background section (`#2E7D32`)
- White text
- Heading: `"Find Your Lucky Mobile & Bank Number"`
- Body: `"Based on your Jathakam, ruling planet, and numerology — we suggest the most auspicious digits for your phone number and bank account. Used by 200+ clients across India and abroad."`
- CTA: `"Request Lucky Number Analysis"` — yellow button, dark text
- Right side: decorative number visual (`+91 98★★ ★★★★★` with star glows)

### 6. Pricing Section (`id="book"`)
- Heading: `"Choose Your Consultation"`
- 3 pricing cards in CSS grid:

| Type | Price | Includes |
|---|---|---|
| Basic Report | ₹999 | Written Kundali PDF, 3 key predictions |
| Full Consultation | ₹2,499 | 45-min call + Full Jathakam PDF + Lucky number |
| Global Package | $49 USD | Video call + Full report + WhatsApp follow-up |

- Middle card: yellow top border + "Most Popular" badge
- Each card: `"Book Now"` green button

### 7. Testimonials
- 3 placeholder testimonials (add `<!-- PLACEHOLDER -->` comment in HTML)
- Names: Priya R. (Chennai), Ravi K. (Hyderabad), Meera S. (Dubai)
- ⭐⭐⭐⭐⭐ per card

### 8. Payment Banner
- Thin yellow banner: `"Accepting payments worldwide — UPI • Razorpay • Stripe • PayPal • Wise"`

### 9. Footer
- Tagline: `"Guided by the stars. Grounded in tradition."`
- Nav links + WhatsApp placeholder
- Copyright: `© 2026 Jyotish by Lakshmi. All rights reserved.`

---

## CSS Rules

- `font-family: 'Cinzel', serif` — all headings (`h1, h2, h3`)
- `font-family: 'Lato', sans-serif` — all body text
- `border-radius: 8px` on cards; `50px` on buttons
- Smooth scroll: `html { scroll-behavior: smooth; }`
- Fully responsive using CSS media queries (breakpoint: 768px)
- Hover transitions: `transition: all 0.3s ease`

---

## JavaScript (Vanilla, Inline)

- Navbar: highlight active section on scroll
- Cards: fade-in on scroll using `IntersectionObserver`
- Hero heading: fade + slide up on page load using CSS class toggle
- Smooth scroll already handled by CSS

---

## Notes for Kiro

- Single file: everything inside `astrology-demo.html`
- No npm, no build, no imports — browser opens it directly
- Use emoji + Unicode symbols instead of image files
- Mark all placeholder content with `<!-- PLACEHOLDER -->` comments
- Prioritise **visual impact** — this is a sales demo for the client