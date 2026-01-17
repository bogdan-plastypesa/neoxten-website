# NeoXten Studios — Brand System

> Apple-grade design system extracted from visual assets.  
> Authority. Intelligence. Calm precision.

---

## 1. Brand Color Palette

All colors sampled directly from brand assets.

### Core Palette

| Role | Hex | Sample | Usage |
|------|-----|--------|-------|
| **Background** | `#0A0A0A` | ![#0A0A0A](https://via.placeholder.com/20/0A0A0A/0A0A0A) | Page background, deepest layer |
| **Surface** | `#141414` | ![#141414](https://via.placeholder.com/20/141414/141414) | Cards, elevated containers |
| **Surface Elevated** | `#1A1A1A` | ![#1A1A1A](https://via.placeholder.com/20/1A1A1A/1A1A1A) | Modals, dropdowns, hover states |
| **Primary Text** | `#FEFEFE` | ![#FEFEFE](https://via.placeholder.com/20/FEFEFE/FEFEFE) | Headlines, primary content |
| **Secondary Text** | `#A0A0A0` | ![#A0A0A0](https://via.placeholder.com/20/A0A0A0/A0A0A0) | Body text, descriptions |
| **Muted** | `#606060` | ![#606060](https://via.placeholder.com/20/606060/606060) | Captions, metadata, timestamps |
| **Border** | `#2A2A2A` | ![#2A2A2A](https://via.placeholder.com/20/2A2A2A/2A2A2A) | Dividers, card borders |
| **Accent** | `#D4BA8A` | ![#D4BA8A](https://via.placeholder.com/20/D4BA8A/D4BA8A) | Gold rim glow, highlights |
| **Accent Muted** | `#7C6F61` | ![#7C6F61](https://via.placeholder.com/20/7C6F61/7C6F61) | Subtle gold, hover states |

### Extended Palette

| Role | Hex | Usage |
|------|-----|-------|
| Chrome Highlight | `#F0F0F0` | Logo metallic surfaces, icons |
| Chrome Mid | `#B0B0B0` | Secondary metallic elements |
| Chrome Shadow | `#505050` | Metallic depth, shadows |
| Pure Black | `#000000` | Logo core, absolute depth |

---

## 2. Typography System

### Font Stack

```css
--font-primary: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
--font-mono: "SF Mono", "Fira Code", "JetBrains Mono", ui-monospace, monospace;
```

**Rationale:** The banner typography exhibits geometric sans-serif characteristics with wide letter-spacing and light weights—consistent with Apple's SF Pro Display. For web, system fonts provide the closest match with zero load time.

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **Display** | 72px | 200 | 1.0 | 0.02em | Hero headlines |
| **H1** | 48px | 300 | 1.1 | 0.01em | Section titles |
| **H2** | 32px | 400 | 1.2 | 0.01em | Subsection titles |
| **H3** | 24px | 500 | 1.3 | 0em | Card headers |
| **Body** | 18px | 400 | 1.6 | 0em | Paragraph text |
| **Body Small** | 16px | 400 | 1.5 | 0em | Secondary content |
| **Caption** | 14px | 400 | 1.4 | 0.02em | Metadata, labels |
| **Overline** | 12px | 500 | 1.2 | 0.1em | Category labels (uppercase) |

### Typography Rules

1. **Headlines**: Ultra-light to light weights (200–300). Never bold.
2. **Body**: Regular weight (400). Let whitespace breathe.
3. **Letter-spacing**: Wide for headlines, normal for body.
4. **Case**: Sentence case for body. ALL CAPS only for overlines.
5. **Line length**: 65–75 characters maximum for readability.

---

## 3. Spacing & Layout Tokens

### Container

| Token | Value | Usage |
|-------|-------|-------|
| `--container-max` | 1200px | Maximum content width |
| `--container-narrow` | 800px | Article/reading width |
| `--container-wide` | 1440px | Full-bleed sections |

### Section Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--section-py` | 120px | Vertical padding between sections |
| `--section-py-sm` | 80px | Compact section padding |
| `--content-gap` | 64px | Gap between content blocks |

### Component Spacing

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |
| `--space-4xl` | 96px |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | Sharp edges (buttons, cards) |
| `--radius-sm` | 4px | Small elements |
| `--radius-md` | 8px | Cards, inputs |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Hero elements |
| `--radius-full` | 9999px | Pills, avatars |

**Note:** The NeoXten logo uses sharp, geometric forms. Prefer minimal radius or none for institutional authority.

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
--shadow-glow: 0 0 40px rgba(212, 186, 138, 0.15);
```

**Note:** Use `--shadow-glow` sparingly to reference the gold rim lighting in the logo.

---

## 4. Brand Tone Rules

### Visual Principles

| Principle | Expression |
|-----------|------------|
| **Calm Authority** | Dark backgrounds, generous whitespace, unhurried pacing |
| **Institutional** | No marketing language. State facts. Let work speak. |
| **Precision** | Geometric forms, aligned grids, mathematical spacing |
| **Material Quality** | Subtle textures, metallic accents, dimensional depth |
| **Restraint** | One accent color. No gradients. No decorative elements. |

### Do

- Use deep, dark backgrounds exclusively
- Let typography breathe with generous line-height
- Apply gold accent only to single focal points per section
- Embrace negative space as a design element
- Use subtle grain/noise texture on backgrounds

### Don't

- Use light/white backgrounds
- Stack multiple accent colors
- Add decorative illustrations or icons
- Use drop shadows on text
- Apply gradients except for subtle gold glows
- Use exclamation points or marketing superlatives

### Motion Guidelines

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

- All transitions use `--ease-out` (Apple's signature easing)
- Opacity fades: 150ms
- Transform movements: 300ms
- Page transitions: 500ms
- Never bounce or overshoot

---

## 5. Asset Reference

| Asset | Path | Dimensions | Usage |
|-------|------|------------|-------|
| Logo Square | `youtube_pack/exports/profile_800x800.png` | 800×800 | Favicon source, social |
| Logo Large | `youtube_pack/exports/square_1080x1080.png` | 1080×1080 | High-res applications |
| Watermark | `youtube_pack/exports/watermark_150x150.png` | 150×150 | Video overlay |
| Banner Full | `youtube_pack/exports/banner_2560x1440.png` | 2560×1440 | Hero backgrounds |
| Banner Safe | `youtube_pack/exports/banner_2048x1152.png` | 2048×1152 | Guaranteed visible |
| TikTok Icon | `youtube_pack/exports/tiktok_app_icon_1024.png` | 1024×1024 | App icon |

---

## Implementation Notes

### Next.js Integration

1. Import `tokens.json` in your Tailwind config or global CSS
2. Use CSS custom properties for runtime theming capability
3. Apply the font stack to `<html>` element
4. Set `background: var(--color-background)` on `<body>`

### Background Treatment

For authentic brand feel, apply subtle noise texture:

```css
body {
  background-color: var(--color-background);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-blend-mode: overlay;
  background-size: 256px 256px;
}
```

---

*NeoXten Studios — Intelligence Layer*
