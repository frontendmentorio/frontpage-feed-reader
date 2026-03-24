# Brand Kit: Frontpage

## Mood & Tone

**Clean, calm, content-focused.** The UI gets out of the way and lets content breathe. Reading comfort of Instapaper meets the information density of Linear.

- Professional but not corporate
- Dense but not cluttered
- Calm but not boring
- Confident but not loud

This is a tool for people who read for a living. It should feel like a well-organized desk, not a social media feed.

## Design Inspiration

Explore these products for inspiration — they solve similar problems with different design approaches:

- [Feedly](https://feedly.com) — Clean, magazine-style layout with strong visual hierarchy. Draw from: content organization patterns, feed management UX, category navigation.
- [Linear](https://linear.app) — Crisp, high-density interface with confident typography. Draw from: information density, keyboard-first feel, subtle use of color for status and navigation.
- [Inoreader](https://www.inoreader.com) — Dense, information-rich interface favoring power users. Draw from: keyboard navigation patterns, power-user-oriented feed management, flexible view modes.
- [Instapaper](https://www.instapaper.com) — Reading-focused, calm, content-first. Draw from: beautiful typography, distraction-free reading experience, serene content presentation.
- [Readwise Reader](https://readwise.io/read) — Minimal, modern read-later app with a calm aesthetic. Draw from: clean reading view, annotation patterns, the balance between content density and breathing room.

There's no single right design for Frontpage. These examples show the range of valid approaches — from dense and data-rich to minimal and reading-focused. If you're going in your own design direction, spend some time exploring other RSS readers and content aggregators to build your own reference library before you start building.

The `preview.jpg` in the repo root shows these tokens applied to Frontpage's main feed view. Use it as a reference for how the brand kit comes together — it's a concept image, not a pixel-perfect spec.

## Color Palette

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#FFFFFF` | Main background |
| `--color-bg-secondary` | `#F8F9FA` | Sidebar, card backgrounds |
| `--color-bg-tertiary` | `#F1F3F5` | Hover states, subtle backgrounds |
| `--color-surface` | `#FFFFFF` | Cards, elevated surfaces |
| `--color-border` | `#E1E4E8` | Borders, dividers |
| `--color-border-subtle` | `#ECEEF0` | Subtle separators |
| `--color-text-primary` | `#1A1D21` | Headings, primary text |
| `--color-text-secondary` | `#57606A` | Body text, descriptions |
| `--color-text-tertiary` | `#8B949E` | Metadata, timestamps, muted text |
| `--color-accent` | `#2563EB` | Primary actions, links, active states |
| `--color-accent-hover` | `#1D4ED8` | Hover on accent elements |
| `--color-accent-subtle` | `#EFF6FF` | Accent backgrounds, selected states |
| `--color-success` | `#16A34A` | Feed healthy, success states |
| `--color-warning` | `#CA8A04` | Feed stale, warnings |
| `--color-error` | `#DC2626` | Feed errors, destructive actions |
| `--color-unread-indicator` | `#2563EB` | Unread dot/indicator |

### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#0D1117` | Main background |
| `--color-bg-secondary` | `#161B22` | Sidebar, card backgrounds |
| `--color-bg-tertiary` | `#21262D` | Hover states, subtle backgrounds |
| `--color-surface` | `#161B22` | Cards, elevated surfaces |
| `--color-border` | `#30363D` | Borders, dividers |
| `--color-border-subtle` | `#21262D` | Subtle separators |
| `--color-text-primary` | `#E6EDF3` | Headings, primary text |
| `--color-text-secondary` | `#8B949E` | Body text, descriptions |
| `--color-text-tertiary` | `#6E7681` | Metadata, timestamps, muted text |
| `--color-accent` | `#58A6FF` | Primary actions, links, active states |
| `--color-accent-hover` | `#79C0FF` | Hover on accent elements |
| `--color-accent-subtle` | `#1A2332` | Accent backgrounds, selected states |
| `--color-success` | `#3FB950` | Feed healthy, success states |
| `--color-warning` | `#D29922` | Feed stale, warnings |
| `--color-error` | `#F85149` | Feed errors, destructive actions |
| `--color-unread-indicator` | `#58A6FF` | Unread dot/indicator |

## Typography

### Font Stack

| Usage | Font | Fallback |
|-------|------|----------|
| Headings | `Inter` | `system-ui, -apple-system, sans-serif` |
| Body / UI | `Inter` | `system-ui, -apple-system, sans-serif` |
| Article content / Reader view | `Georgia` | `Charter, serif` |
| Code in feed content | `JetBrains Mono` | `'SF Mono', 'Fira Code', monospace` |

Inter provides excellent readability at small sizes (metadata, timestamps) and clean presence at large sizes (headings). Georgia brings warmth and readability to long-form reading.

### Type Scale

Based on a 1.25 ratio (major third), anchored at 16px body.

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-xs` | 11px / 0.6875rem | 400 | 1.45 | Timestamps, meta labels |
| `--text-sm` | 13px / 0.8125rem | 400 | 1.45 | Secondary text, descriptions |
| `--text-base` | 16px / 1rem | 400 | 1.55 | Body text, feed items |
| `--text-lg` | 20px / 1.25rem | 500 | 1.4 | Feed item titles, section headers |
| `--text-xl` | 25px / 1.5625rem | 600 | 1.3 | Page titles, card headings |
| `--text-2xl` | 31px / 1.9375rem | 600 | 1.25 | Hero heading, landing page |
| `--text-3xl` | 39px / 2.4375rem | 700 | 1.2 | Landing page hero (large screens) |

### Line Heights

| Token | Value | Used with |
|-------|-------|-----------|
| `--leading-tight` | 1.2 | `--text-3xl` |
| `--leading-snug` | 1.3 | `--text-xl` |
| `--leading-normal` | 1.4 | `--text-lg` |
| `--leading-relaxed` | 1.45 | `--text-xs`, `--text-sm` |
| `--leading-loose` | 1.55 | `--text-base` |

The type scale table above shows which line height each text size uses. In `tokens.css`, line heights are independent custom properties — pair them with text sizes as shown, or adjust as needed.

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `--font-regular` | 400 | Body text, descriptions |
| `--font-medium` | 500 | Feed titles, emphasis, nav items |
| `--font-semibold` | 600 | Section headings, buttons |
| `--font-bold` | 700 | Hero headings, strong emphasis |

## Spacing

Based on a 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px / 0.25rem | Tight gaps, icon padding |
| `--space-2` | 8px / 0.5rem | Inline spacing, small gaps |
| `--space-3` | 12px / 0.75rem | Compact element spacing |
| `--space-4` | 16px / 1rem | Standard element spacing |
| `--space-5` | 20px / 1.25rem | Medium section gaps |
| `--space-6` | 24px / 1.5rem | Card padding, group spacing |
| `--space-8` | 32px / 2rem | Section spacing |
| `--space-10` | 40px / 2.5rem | Large section gaps |
| `--space-12` | 48px / 3rem | Major section breaks |
| `--space-16` | 64px / 4rem | Page-level spacing |
| `--space-20` | 80px / 5rem | Hero spacing, large gaps |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 0.25rem | Small elements, badges, tags |
| `--radius-md` | 0.5rem | Buttons, inputs, small cards |
| `--radius-lg` | 0.75rem | Cards, panels, modals |
| `--radius-xl` | 1rem | Large cards, feature sections |
| `--radius-full` | 9999rem | Avatars, circular elements |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift, feed items on hover |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)` | Modals, command palette |

In dark mode, shadow opacities increase for visibility on dark backgrounds:

| Token | Dark Mode Value |
|-------|----------------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -2px rgba(0,0,0,0.3)` |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -4px rgba(0,0,0,0.3)` |

## Icons & Visual Assets

### Icons

| Recommendation | Alternatives |
|---------------|-------------|
| **Lucide** — Clean, consistent, pairs well with Inter. 1px stroke style matches the minimal aesthetic. | Heroicons (Tailwind ecosystem), Phosphor (flexible weights) |

Use icons for navigation, actions (bookmark, share, refresh), feed status indicators, and empty states. Keep sizes consistent — 16px for inline/metadata, 20px for UI actions, 24px for navigation.

### Images

Frontpage is content-driven — most visual content comes from the feeds themselves (article images, source favicons). Your landing page may benefit from a hero illustration or screenshot, but stock photography isn't essential.

If you need images: [Unsplash](https://unsplash.com) for photography, or generate illustrations with AI tools.

### App Favicon

Ship a custom favicon. It's a small detail that makes the product feel real. An SVG favicon works across all modern browsers.

## Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--sidebar-width` | 16.25rem | Navigation sidebar |
| `--content-max-width` | 45rem | Reader view, article content |
| `--feed-max-width` | 60rem | Feed list view |
| `--page-max-width` | 80rem | Overall page container |

## Key Screens for Design Quality

These are the screens where design taste will be most visible. Pay special attention to typography, spacing, and visual hierarchy:

1. **Main feed view** — Where users spend 90% of their time. Information density, scannability, and visual rhythm matter enormously.
2. **Landing page** — First impression. Must communicate value instantly and look like a real product.
3. **Empty/onboarding state** — First-time user experience. Sets the emotional tone and guides users to value quickly.

## Quality Spectrum

| Level | What it looks like for Frontpage |
|-------|--------------------------------|
| **Adequate** | Feeds display correctly, navigation works, consistent spacing. Looks like a developer's side project — functional but not inspiring. |
| **Good** | Thoughtful typography hierarchy between titles/metadata/descriptions. Considered use of whitespace. Smooth transitions. Visual distinction between read/unread that's subtle but clear. Looks like an early-stage product. |
| **Excellent** | Every pixel feels intentional. Feed items have visual rhythm. The layout breathes. Hover states feel responsive and considered. The landing page would make someone ask "is this a real product?" Micro-interactions add polish without distraction. Looks like something you'd pay for. |
