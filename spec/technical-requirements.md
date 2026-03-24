# Technical Requirements

This challenge supports two paths: **full-stack** (recommended) and **[frontend-only](#frontend-only-alternative)**. The sections below describe the full-stack approach. If you'd rather skip auth and database work, jump to the Frontend-Only Alternative at the bottom — it explains what changes and what stays the same.

## Database

Use a real database service — not localStorage or in-memory storage.

**Recommended options:** Supabase, Firebase, Neon, PlanetScale, Turso, or equivalent.

**Must store:**

- User accounts and authentication data
- Feed subscriptions (URL, title, category, health status, last fetch time)
- Feed items (title, description, content, author, publication date, source feed, URL)
- Read/unread state per user per item
- Bookmarks per user
- User preferences (layout, refresh interval, categories, ordering)

**Things to think about:**

- How will you query items by feed AND by category AND by date range efficiently? What indexes do these access patterns require?
- What happens when a feed is deleted — what related data needs cleanup (items, read state, bookmarks)?
- How will you handle a user with 50 feeds averaging 20 items each = 1,000+ items to manage? What about 100 feeds?
- When should you fetch feed items (on demand vs. background) and how do you avoid duplicate items on re-fetch?
- How will you store read/unread state per user per item without the table growing unboundedly?
- What's your strategy for feed item deduplication when the same item appears in a re-fetch with slightly different content?

## Authentication

Implement real user authentication — not simulated or mocked.

**Required flows:**

- Sign up (email + password minimum)
- Sign in
- Sign out
- Password reset
- Session persistence across browser refreshes

**Recommended:** Use your database provider's built-in auth (Supabase Auth, Firebase Auth) or a dedicated auth service (Clerk, Auth0, NextAuth).

**Guest mode:** Must work without authentication. Guest data is session-scoped and does not persist.

## Server-Side Feed Fetching

RSS feeds cannot be fetched directly from the browser due to CORS restrictions. You need a server-side component.

**Options:**

- API routes (Next.js, Nuxt, SvelteKit, Remix, etc.)
- Edge functions (Supabase Edge Functions, Vercel Edge Functions, Cloudflare Workers)
- Standalone backend (Express, Hono, Fastify, etc.)
- BaaS functions (Firebase Functions)

**Requirements:**

- Fetch feeds server-side and return parsed results to the client
- Handle timeouts gracefully (set a 10-second timeout per feed)
- Implement basic rate limiting to avoid overwhelming feed sources
- Cache responses where possible (respect Cache-Control, ETag, Last-Modified headers)
- Handle redirects (301, 302) — follow them and update the stored feed URL on permanent redirect

## Deployment

Deploy to a live, publicly accessible URL.

**Recommended platforms:** Vercel, Netlify, Render, Fly.io, or equivalent.

**Requirements:**

- Accessible via HTTPS
- No local-only dependencies (everything works for any visitor)
- Environment variables properly configured (no exposed secrets)
- Reasonable cold start time if using serverless

## Performance Targets

| Metric | Target |
|--------|--------|
| Landing page Time to Interactive | < 2 seconds |
| Initial feed load (after auth) | < 3 seconds |
| Search results | < 500ms |
| Scrolling through 100+ items | Smooth (60fps, no jank) |
| Individual feed refresh | < 5 seconds |
| Layout shift during load | Minimal (use skeletons/placeholders) |

### Lighthouse Benchmarks

Run Lighthouse on your deployed site. Target scores:

| Category | Target |
|----------|--------|
| Performance | > 85 |
| Accessibility | > 90 |
| Best Practices | > 90 |

Include your Lighthouse scores in your README.

## Technology Choice

This challenge is **framework-agnostic**. Use whatever you're most productive with.

**Common choices:**

- Next.js, Nuxt, SvelteKit, Remix, Astro (full-stack frameworks)
- React, Vue, Svelte, Solid (with separate backend)
- Any other approach that meets the requirements

The starter files provide CSS custom properties and a Tailwind v4 config, but neither CSS nor Tailwind is required. Use whatever styling approach you prefer.

## Frontend-Only Alternative

The sections above describe the recommended full-stack approach. If you're focused on frontend development and not ready to implement authentication and a database, you can build a frontend-only version instead. Everything below explains what changes and what stays the same.

**What replaces the database:**

Use localStorage (or IndexedDB for larger datasets) to persist all user data: feed subscriptions, cached items, read/unread state, bookmarks, and preferences. Be aware that localStorage has a ~5 MB limit per origin and that all data lives in a single browser — there is no cross-device sync.

**What changes in the product experience:**

- No authentication — the app is single-user with no sign-up, sign-in, or password reset flows
- No "guest mode" concept — there is just the app, and everyone who opens it is the user
- The landing page has a single CTA ("Get Started" or "Open Dashboard") instead of dual sign-up and guest buttons
- No cross-device sync — switching browsers or clearing storage means starting over
- Pre-loaded sample feeds become the default starting state rather than a guest-specific experience

**What stays the same:**

- Server-side feed fetching — still required because of CORS restrictions
- All feed management, reading, search, and layout features
- Deployment to a live, publicly accessible URL
- The performance targets listed above

**Tradeoff to consider:**

Both paths produce strong portfolio pieces. The full-stack version demonstrates additional skills (auth flows, database design, protected routes, data modeling), while the frontend-only version lets you focus on UI/UX craft, layout systems, RSS parsing, state management, and frontend engineering. Choose the path that matches your current skill level and learning goals.
