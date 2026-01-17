# NeoXten Studios Website

Official website for NeoXten Studios — an intelligence studio building systems for automation, content, and digital infrastructure.

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS Modules + CSS Custom Properties
- **Deployment:** Static export (Vercel/Cloudflare Pages)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Structure

```
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home
├── studio/         # Studio page
├── work/           # Work page
├── contact/        # Contact page
└── legal/          # Legal page (Privacy, Terms, Imprint)

components/
├── Navigation/     # Fixed header navigation
├── Footer/         # Site footer
├── Container/      # Layout container
└── Logo/           # Brand logo mark

styles/
├── globals.css     # Global styles and reset
└── tokens.css      # Design tokens
```

## Design System

The website follows the NeoXten Studios brand system:

- **Colors:** Dark charcoal background (#0A0A0A), chrome text, gold accent (#D4BA8A)
- **Typography:** SF Pro Display, ultra-light headlines, wide letter-spacing
- **Spacing:** 120px section rhythm, 8px base grid
- **Motion:** Minimal — opacity transitions only

## Legal Entity

PLASTYPESA S.R.L.  
Operating in UK & EU  
[neoxten.com](https://neoxten.com)

---

© 2026 NeoXten Studios
