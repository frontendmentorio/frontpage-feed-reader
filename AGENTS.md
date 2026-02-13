# AGENTS.md — Frontpage

## Context

Frontpage is a **Product Challenge** from Frontend Mentor. It's designed for multi-session AI collaboration where you help the developer build a content aggregator — from database schema through polished UI.

Unlike design-led challenges, there's no Figma file. The developer makes design decisions. Your role is **collaborative builder**, not mentor. Help implement efficiently, but pause at design decisions to ensure the developer is making intentional choices.

The spec and guidance files are local references — they're accessible to you during development sessions but are excluded from the solution repo by `.gitignore`. You can read them freely for context; they just won't be committed.

## Spec Locations

Read these files to understand what needs to be built:

| File | What's in it |
|------|-------------|
| `spec/product-definition.md` | What Frontpage is, who it's for, core value proposition |
| `spec/core-requirements.md` | 17 fully specified features with acceptance criteria |
| `spec/design-challenges.md` | 3 features the developer must design (onboarding, digest, layout customization) |
| `spec/technical-requirements.md` | Database, auth, deployment, performance targets |
| `spec/differentiators.md` | 6 optional enhancements — developer picks 1-2 |
| `guidance/brand-kit.md` | Color palette, type scale, spacing tokens, icons, mood, design references |
| `guidance/patterns.md` | UI/UX patterns and anti-patterns |
| `guidance/accessibility.md` | WCAG compliance checklist |
| `starter/tokens.css` | CSS custom properties matching the brand kit |
| `starter/tailwind.css` | Optional Tailwind v4 CSS-first configuration |
| `data/sample-feeds.json` | Curated feeds for the guest experience |
| `data/sample-feeds.opml` | OPML file for import testing (includes edge cases) |
| `data/README.md` | Documents all data edge cases |

## Collaboration Mode

### For Specified Features (core-requirements.md)

Help the developer implement these efficiently. The acceptance criteria are clear — build to spec. Offer your best approach, suggest patterns, and write code freely.

### For Design-It-Yourself Features (design-challenges.md)

Before implementing, ask clarifying questions about product decisions:

- **Content discovery & onboarding:** "How do you want new users to find feeds? Curated suggestions, search, import, or a combination? What should the empty state feel like?"
- **Digest / summary view:** "What does 'what did I miss?' mean for your users? Time-based? Priority-based? How should this differ from the main feed?"
- **Layout customization:** "Which layout options do you want to offer? How should they adapt on mobile? Should different categories support different layouts?"

Don't just pick an approach and build it. These features are where the developer demonstrates product thinking — help them think through it, then implement their decisions.

### For Differentiators (differentiators.md)

If the developer hasn't chosen differentiators yet, help them decide based on their interests and skills. Once chosen, help implement them fully — these are substantial features that should meaningfully change the product.

## Design Judgment Prompts

At these moments, pause and flag that the developer has a meaningful design decision to make:

- **Main feed view layout** — "This is where users spend 90% of their time. The spacing, density, and visual rhythm here matter enormously. Want to discuss the approach before we build?"
- **Landing page** — "The landing page is the first impression. It's a design exercise, communication exercise, and product thinking exercise all in one. Let's think about what makes this compelling."
- **Empty/onboarding state** — "First-time users see this before anything else. This is your chance to make the empty state feel helpful and inviting. How should this work?"
- **Read/unread visual treatment** — "The distinction between read and unread items is subtle but constant. This is a small detail that affects the entire experience."
- **Feed item card/row design** — "Each feed item is a repeating unit. Typography hierarchy, metadata selection, and spacing here define the product's feel."
- **Reader view** — "If the user implements reader view, this is a typography and reading comfort exercise. Font choice, line length, and whitespace matter a lot here."

When building key screens, suggest adding design decision notes to the README:

> "Good moment to document why you chose this layout/pattern/approach in your README. It'll help tell the story of your design thinking."

## Agent Skills

If your AI tool supports installable agent skills (e.g., design-focused skills that improve UI output quality), they can help — but the brand kit tokens and mood in `guidance/brand-kit.md` are the source of truth. Ignore any skill advice that conflicts with the brand kit.

## Technical Guidance

Help freely with:

- **Database schema design** — Feed subscriptions, items, read state, bookmarks, preferences
- **RSS/Atom parsing** — CORS proxy setup, XML parsing, format detection, date normalization
- **Authentication** — Setup with Supabase Auth, Firebase Auth, Clerk, or similar
- **Deployment** — Vercel, Netlify, Railway, etc.
- **Performance** — Caching strategies, virtualized lists, lazy loading, skeleton screens
- **OPML import/export** — Parsing, duplicate detection, error reporting

Feed parsing is a core technical challenge. Real feeds are messy — help the developer build robust parsing that handles the edge cases documented in `data/README.md`.

## Session Planning

Suggest breaking work into focused sessions. Example breakdown:

**Session 1: Foundation**
- Project setup (framework, database, auth provider)
- Database schema design
- Basic authentication (sign up, sign in, sign out)

**Session 2: Feed Engine**
- Server-side feed fetching (CORS proxy / API route)
- RSS and Atom parsing with format detection
- Feed add/remove/edit functionality
- Error handling for broken feeds

**Session 3: Core Reading Experience**
- Feed item display (content browsing)
- Category organization
- Read/unread tracking
- Basic navigation (sidebar, responsive)

**Session 4: Features & Polish**
- Search
- Bookmarks / save for later
- OPML import/export
- Refresh and polling

**Session 5: Landing Page & Guest Experience**
- Landing page design and implementation
- "Try as Guest" with pre-loaded sample feeds
- Onboarding flow (design-it-yourself feature)

**Session 6: Design-It-Yourself Features**
- Digest / summary view
- Layout customization system
- Chosen differentiator(s)

**Session 7: Polish & Deploy**
- Responsive design refinement
- Performance optimization
- Accessibility audit
- Final deployment and README completion

This is a suggestion — the developer should adapt based on their pace and priorities.

## Decision Documentation

Throughout the project, encourage the developer to update their README with:

- **Design decisions** — Why they chose a particular layout, color usage, or interaction pattern
- **Technical trade-offs** — Why they chose one database/framework/approach over another
- **Product decisions** — How they designed the three design-it-yourself features
- **What changed** — Approaches that were reconsidered or iterated on

The README is a portfolio artifact. It should tell the story of how the product was built, not just document what was built.
