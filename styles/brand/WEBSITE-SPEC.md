# NeoXten Studios — Website Design Specification

> **CRITICAL**: This document defines the EXACT visual system for all website pages.  
> Every color, gradient, shadow, and text style is sampled from the official brand banner.  
> **DO NOT deviate from these values.**

---

## 🎨 COLOR SYSTEM

### Primary Palette (Exact HEX Values)

```css
:root {
  /* === BACKGROUNDS === */
  --bg-deepest: #08080A;        /* Corners, vignette edges */
  --bg-dark: #0D0D10;           /* Page background base */
  --bg-surface: #1B1A1F;        /* Cards, containers */
  --bg-elevated: #232227;       /* Hover states, modals */
  --bg-highlight: #2F2E33;      /* Active states, borders */
  
  /* === TEXT === */
  --text-primary: #FEFEFE;      /* Headlines, primary text */
  --text-secondary: #969596;    /* Taglines, body copy */
  --text-muted: #5D5D60;        /* Captions, metadata */
  
  /* === GOLD ACCENT (THE SIGNATURE) === */
  --gold-bright: #FED88A;       /* Hottest glow point */
  --gold-primary: #DFC69E;      /* Primary accent color */
  --gold-mid: #CFB68F;          /* Standard gold */
  --gold-muted: #97856B;        /* Subtle gold, borders */
  --gold-dark: #6A5D4A;         /* Dark gold for shadows */
  
  /* === CHROME/METALLIC === */
  --chrome-bright: #FEFEFE;     /* Logo highlights */
  --chrome-mid: #B0B0B0;        /* Metallic mid-tones */
  --chrome-shadow: #434247;     /* Metallic shadows */
}
```

### Background Gradient (EXACT)

The banner uses a **radial vignette** from center to edges:

```css
.page-background {
  background: radial-gradient(
    ellipse 120% 100% at 50% 40%,
    #2F2E33 0%,      /* Lighter center */
    #1B1A1F 25%,     /* Mid-ground */
    #0D0D10 60%,     /* Dark edge */
    #08080A 100%     /* Deepest corners */
  );
  background-color: #0A0A0C; /* Fallback */
}
```

### Noise/Grain Texture

The background has subtle film grain. Apply this overlay:

```css
.page-background::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

---

## ✨ GOLD ACCENT SYSTEM

### The Golden Glow Effect

The gold accent appears as a **rim light glow**. Recreate with:

```css
.gold-glow {
  box-shadow: 
    0 0 20px rgba(254, 216, 138, 0.3),
    0 0 40px rgba(223, 198, 158, 0.2),
    0 0 60px rgba(207, 182, 143, 0.1);
}

.gold-text {
  color: #DFC69E;
  text-shadow: 0 0 30px rgba(254, 216, 138, 0.4);
}

.gold-border {
  border: 1px solid #97856B;
}

.gold-accent-line {
  background: linear-gradient(
    90deg,
    transparent 0%,
    #97856B 20%,
    #DFC69E 45%,
    #FED88A 50%,  /* Bright center flare */
    #DFC69E 55%,
    #97856B 80%,
    transparent 100%
  );
  height: 1px;
}
```

### When to Use Gold

| Element | Gold Treatment |
|---------|----------------|
| Primary CTA button | Gold border + subtle glow |
| Section dividers | Gold accent line |
| Active nav item | Gold underline |
| Important text highlight | Gold text color |
| Logo rim | Gold glow shadow |
| Hover states | Gold border fade-in |

### When NOT to Use Gold

- Body text (use `--text-secondary`)
- Multiple elements on same screen (one focal point only)
- Backgrounds (gold is accent, not surface)
- Icons (keep chrome/white)

---

## 📝 TYPOGRAPHY SYSTEM

### Font Stack

```css
:root {
  --font-display: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-body: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
}
```

**Alternative (if SF Pro unavailable):**
- Use **Inter** (weight 200-500) — [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter)
- Or **Outfit** for more geometric feel

### Type Scale (from banner analysis)

| Element | Size | Weight | Letter-Spacing | Line-Height | Color |
|---------|------|--------|----------------|-------------|-------|
| **Display** | 64-80px | 200 (Thin) | 0.04em | 1.0 | `#FEFEFE` |
| **H1** | 48px | 300 (Light) | 0.03em | 1.1 | `#FEFEFE` |
| **H2** | 36px | 300 (Light) | 0.02em | 1.15 | `#FEFEFE` |
| **H3** | 24px | 400 (Regular) | 0.01em | 1.2 | `#FEFEFE` |
| **Body** | 18px | 400 (Regular) | 0em | 1.6 | `#969596` |
| **Body Large** | 20px | 300 (Light) | 0.01em | 1.5 | `#969596` |
| **Caption** | 14px | 400 (Regular) | 0.02em | 1.4 | `#5D5D60` |
| **Overline** | 12px | 500 (Medium) | 0.15em | 1.2 | `#97856B` |

### Typography Rules

```css
/* Headlines - thin, tracked, white */
h1, h2, .display {
  color: var(--text-primary);
  font-weight: 200;
  letter-spacing: 0.04em;
  text-transform: uppercase; /* Optional, as in banner */
}

/* Tagline style (from "AI Solutions & Digital Innovation") */
.tagline {
  color: var(--text-secondary);
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.02em;
}

/* Body text */
p, .body {
  color: var(--text-secondary);
  font-weight: 400;
  line-height: 1.6;
}

/* Gold overline labels */
.overline {
  color: var(--gold-mid);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

---

## 📐 SPACING & LAYOUT

### Container Widths

```css
:root {
  --container-sm: 640px;   /* Narrow reading */
  --container-md: 960px;   /* Standard content */
  --container-lg: 1200px;  /* Wide layouts */
  --container-xl: 1440px;  /* Full-bleed max */
}
```

### Section Spacing

```css
:root {
  --section-gap: 160px;    /* Between major sections */
  --section-py: 120px;     /* Section vertical padding */
  --content-gap: 64px;     /* Between content blocks */
  --element-gap: 32px;     /* Between UI elements */
}
```

### Spacing Scale

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
}
```

---

## 🔲 COMPONENT STYLES

### Cards

```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--bg-highlight);
  border-radius: 8px; /* Subtle, not rounded */
  padding: var(--space-6);
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover {
  background: var(--bg-elevated);
  border-color: var(--gold-muted);
  box-shadow: 0 0 30px rgba(254, 216, 138, 0.08);
}
```

### Buttons

```css
/* Primary - Gold outline */
.btn-primary {
  background: transparent;
  border: 1px solid var(--gold-muted);
  color: var(--gold-primary);
  padding: 16px 32px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 13px;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary:hover {
  border-color: var(--gold-primary);
  box-shadow: 0 0 20px rgba(254, 216, 138, 0.2);
  color: var(--gold-bright);
}

/* Secondary - Ghost */
.btn-secondary {
  background: transparent;
  border: 1px solid var(--bg-highlight);
  color: var(--text-secondary);
  padding: 16px 32px;
}

.btn-secondary:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}
```

### Navigation

```css
.nav-link {
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 8px 0;
  border-bottom: 1px solid transparent;
  transition: all 300ms ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
  border-bottom-color: var(--gold-primary);
}
```

### Dividers

```css
.divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--bg-highlight) 20%,
    var(--bg-highlight) 80%,
    transparent
  );
}

.divider-gold {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--gold-muted) 30%,
    var(--gold-primary) 50%,
    var(--gold-muted) 70%,
    transparent
  );
}
```

---

## 🎬 MOTION & TRANSITIONS

### Easing

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);  /* Apple signature */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### Durations

```css
:root {
  --duration-fast: 150ms;    /* Micro-interactions */
  --duration-normal: 300ms;  /* Standard transitions */
  --duration-slow: 500ms;    /* Page transitions */
  --duration-slower: 800ms;  /* Hero animations */
}
```

### Animation Rules

- **Always** use `--ease-out` for UI transitions
- **Never** bounce or overshoot
- Opacity fades: 150ms
- Transforms (scale, translate): 300ms
- Color/border changes: 300ms
- Page load reveals: stagger by 100ms per element

---

## ⚡ EFFECTS

### Glow Effects

```css
/* Logo glow */
.logo-glow {
  filter: drop-shadow(0 0 20px rgba(254, 216, 138, 0.3))
          drop-shadow(0 0 40px rgba(254, 216, 138, 0.15));
}

/* Subtle ambient glow for sections */
.section-glow {
  background: radial-gradient(
    ellipse 50% 30% at 50% 0%,
    rgba(254, 216, 138, 0.05) 0%,
    transparent 70%
  );
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow-gold: 0 0 40px rgba(254, 216, 138, 0.15);
}
```

---

## 🚫 STRICT RULES

### DO

✅ Use dark backgrounds exclusively  
✅ Keep gold accent to ONE focal point per viewport  
✅ Use thin/light font weights for headlines  
✅ Embrace generous whitespace  
✅ Apply subtle grain texture to backgrounds  
✅ Use the radial vignette gradient  
✅ Keep UI minimal and institutional  

### DO NOT

❌ Use light/white backgrounds  
❌ Use multiple accent colors  
❌ Use bold font weights (500+) for headlines  
❌ Add decorative illustrations  
❌ Use colorful gradients  
❌ Add drop shadows on text  
❌ Use marketing language or exclamation points  
❌ Overcrowd layouts—let elements breathe  

---

## 📋 IMPLEMENTATION CHECKLIST

For every new page, verify:

- [ ] Page uses `radial-gradient` vignette background
- [ ] Grain texture overlay is applied
- [ ] All text uses correct colors from palette
- [ ] Headlines use weight 200-300, tracked wide
- [ ] Body uses `#969596` (not white)
- [ ] Gold accent appears in ONE place per viewport
- [ ] Buttons use gold outline style
- [ ] Navigation uses uppercase, tracked text
- [ ] Transitions use `cubic-bezier(0.16, 1, 0.3, 1)`
- [ ] No bright colors, no light backgrounds
- [ ] Generous padding between sections (120px+)

---

## 🔧 TAILWIND CONFIG (if using)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0D0D10',
          deep: '#08080A',
          surface: '#1B1A1F',
          elevated: '#232227',
          highlight: '#2F2E33',
        },
        text: {
          primary: '#FEFEFE',
          secondary: '#969596',
          muted: '#5D5D60',
        },
        gold: {
          bright: '#FED88A',
          DEFAULT: '#DFC69E',
          mid: '#CFB68F',
          muted: '#97856B',
          dark: '#6A5D4A',
        },
        chrome: {
          bright: '#FEFEFE',
          mid: '#B0B0B0',
          shadow: '#434247',
        },
      },
      fontFamily: {
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['SF Pro Text', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        display: '0.04em',
        heading: '0.03em',
        wide: '0.15em',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}
```

---

*NeoXten Studios — Intelligence Layer*  
*This specification is the single source of truth for all visual design decisions.*
