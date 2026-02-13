# Frontpage — Product Challenge

Build a customizable content aggregator that pulls RSS and Atom feeds into a single, well-designed reading dashboard. Your personalized front page for tech content.

![Frontpage preview](./preview.jpg)

*This is a design concept image, not the intended design. There's no Figma file — you make the design decisions.*

## The Challenge

Frontpage is a **Product Challenge** — a different kind of Frontend Mentor project. There's no Figma file. You make the design decisions. You ship a real, deployed product with a database, authentication, and external integrations. The result is a portfolio piece that demonstrates how you think, not just what you can build.

### Four Pillars

| Pillar | What It Means for Frontpage |
|--------|----------------------------|
| **Product Thinking** | You design the onboarding flow, digest view, and layout system. No spec tells you exactly how — you decide. |
| **Design Taste & Craft** | The brand kit gives you colors, type, and spacing. The layouts, interactions, and visual polish are yours. |
| **AI Collaboration** | The project includes AI context files (`AGENTS.md`, `CLAUDE.md`) that give tools like Claude full project context. Lean into AI across planning, building, and polishing. |
| **Shipping Real Products** | Deploy to a live URL. Real database. Real auth. Real RSS feeds with real-world parsing challenges. |

## What You're Building

A content aggregator where users:

- **Add RSS/Atom feeds** from blogs, newsletters, and publications they follow
- **Browse content** in a clean, scannable dashboard organized by category
- **Track reading** with read/unread state and bookmarks
- **Search** across all their feeds
- **Import/export** feed subscriptions via OPML
- **Customize** their reading experience with layout options

### The Guest Experience

When you share this project — in your portfolio, a job application, or a social post — the person clicking your link isn't going to create an account. Guest mode is what lets them see your work instead of a login wall.

Your landing page includes a "Try as Guest" button. Guests get a fully populated dashboard with 19 curated feeds across Frontend, Design, Backend & DevOps, General Tech, and AI & ML categories — real content from real sources. They're _using the product_ from their first click.

## Project Structure

```
frontpage/
├── spec/
│   ├── product-definition.md      # What, who, why
│   ├── core-requirements.md       # 17 specified features with acceptance criteria
│   ├── design-challenges.md       # 3 features YOU design
│   ├── technical-requirements.md  # Database, auth, deployment, performance
│   └── differentiators.md         # 6 enhancements — pick 1-2
├── guidance/
│   ├── brand-kit.md               # Colors, typography, spacing, icons, mood
│   ├── patterns.md                # UI/UX do's and don'ts
│   └── accessibility.md           # WCAG checklist
├── starter/
│   ├── tokens.css                 # CSS custom properties
│   └── tailwind.config.js         # Optional Tailwind config
├── data/
│   ├── sample-feeds.opml          # OPML import file (with edge cases)
│   ├── sample-feeds.json          # Same feeds as JSON
│   └── README.md                  # Data edge case documentation
├── AGENTS.md                      # AI collaboration context
├── CLAUDE.md                      # Points to AGENTS.md
└── README-template.md             # Template for your solution README
```

## Getting Started

1. **Read the spec** — Start with `spec/product-definition.md`, then `core-requirements.md`. Understand what you're building before you write code.

2. **Review the brand kit** — `guidance/brand-kit.md` gives you the visual foundation. The starter CSS tokens and optional Tailwind config are ready to use.

3. **Choose your stack** — This challenge is framework-agnostic. Next.js, Nuxt, SvelteKit, Remix, Astro — whatever you're most productive with. The recommended path is full-stack (database + auth), but there's a **frontend-only alternative** if you want to focus on UI/UX and frontend engineering — see `spec/technical-requirements.md` for details.

4. **Set up your AI workflow** — This project is designed for AI collaboration. `AGENTS.md` and `CLAUDE.md` give AI tools full context about the project — specs, guidance, collaboration approach, and a suggested session breakdown. We recommend working with AI across every phase: planning, building, and polishing.

5. **Pick your differentiators** — Read `spec/differentiators.md` and choose 1-2 that match your interests. These are what make the project _yours_.

6. **Start building** — Begin with foundation (auth, database, feed parsing), then layer in features. The core-requirements spec is your roadmap.

7. **Document as you go** — Use `README-template.md` for your solution README. Record design decisions, technical trade-offs, and lessons learned as they happen, not after.

## Working with AI

Product Challenges are designed for AI collaboration. The `AGENTS.md` and `CLAUDE.md` files give AI tools like Claude, Cursor, and Copilot full project context — including the spec, brand kit, collaboration guidelines, and a suggested session breakdown. Load them at the start of each session.

Use AI freely for implementation, but stay in the driver's seat on design decisions. The three design-it-yourself features (content discovery & onboarding, digest view, layout customization) are where _your_ product thinking matters most.

## Your Solution Repo

The `.gitignore` is pre-configured to exclude challenge reference files (`spec/`, `guidance/`, `AGENTS.md`, etc.) from your solution repo. These files are your development reference — they stay on your machine for AI sessions and planning, but they don't belong in the finished product.

Your public repo should contain:

- Your application code
- Your completed README (rename `README-template.md` → `README.md`)
- The sample data files (needed for the guest experience)
- The starter tokens (consumed by your build)

This is how real products work: you reference the spec during development, you ship the product.

## Learning Outcomes

By completing this challenge, you'll have demonstrated:

- **Feed parsing and data normalization** — Handling real-world RSS/Atom format variations, encoding issues, and broken feeds
- **Full-stack architecture** — Database schema design, API routes, server-side fetching, client-side state management
- **Product design** — Onboarding, content discovery, layout systems, and reading experience design
- **Performance engineering** — Caching, lazy loading, virtualized lists, skeleton screens
- **Real-world deployment** — Live URL, environment configuration, production error handling
- **Design taste** — Typography, spacing, visual hierarchy, responsive design without a Figma reference

## Key Design Moments

These screens are where your design taste will be most visible:

1. **Main feed view** — Where users spend 90% of their time. Information density, scannability, and visual rhythm.
2. **Landing page** — First impression. Communicates value and sets the visual tone.
3. **Empty/onboarding state** — First-time user experience. Guides users to value quickly.

## Share Your Feedback

We're trialing the product challenge format and would love to hear how you found it. Once you've finished (or got as far as you plan to), please take 5 minutes to fill out our feedback survey:

**[Complete the feedback survey](https://forms.gle/rp4BXFDp7V9okLZE8)**

Your responses will directly shape whether and how we bring product challenges to the platform. As a thank you, we'll randomly select one respondent to win a free year of Frontend Mentor Pro.

## Questions?

If anything in the spec is unclear or you want to discuss the challenge, join our [Discord community](https://www.frontendmentor.io/community).
