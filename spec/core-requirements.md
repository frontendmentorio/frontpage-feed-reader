# Core Requirements

These features are organized into two tiers. **Core** gives you a complete, impressive product. **Stretch** takes it to the next level. The remaining features (content discovery & onboarding, digest view, layout customization) are design challenges where you make the product decisions — see `design-challenges.md`.

Completing Core + a design-it-yourself feature + a differentiator is a strong portfolio piece.

---

# Core

These 12 features form a complete feed reader. A fully working product with authentication, guest access, and a polished landing page.

---

## 1. Feed Management

Users can add, edit, and remove RSS/Atom feed subscriptions.

**Acceptance criteria:**

- Add a feed by entering its URL
- Validate that the URL points to a valid RSS or Atom feed before saving
- Display feed title, description, and favicon/icon after successful add
- Edit a feed's custom title and assigned category
- Remove a feed with confirmation
- Show feed health status: active (last fetched successfully), stale (hasn't updated in 30+ days), error (last fetch failed)
- Display last successful fetch time per feed

---

## 2. Feed Parsing

Parse real RSS/Atom feeds with their real-world inconsistencies.

**Acceptance criteria:**

- Parse RSS 2.0 feeds
- Parse Atom 1.0 feeds
- Parse RSS 1.0 / RDF feeds
- Handle common encoding issues (UTF-8, ISO-8859-1, Windows-1252)
- Normalize HTML entities in titles and descriptions
- Handle feeds with missing optional fields (no description, no author, no publication date)
- Extract and normalize dates across formats (ISO 8601, RFC 822, RFC 2822, common non-standard formats)
- Handle feeds that include full HTML content vs. plain text summaries
- Gracefully handle malformed XML (partial parse where possible, clear error for fully broken feeds)

---

## 3. Content Browsing

View feed items in a clean, scannable interface.

**Acceptance criteria:**

- Display feed items showing: title, source name, publication date, excerpt/description
- Show source favicon or icon alongside each item
- Sort items reverse-chronologically by default
- Filter by feed or category
- Show item count per feed and per category
- Infinite scroll or pagination for large item lists (100+ items should remain performant)
- Clearly distinguish between items from different sources when viewing mixed feeds

---

## 4. Category Organization

Organize feeds into user-defined categories.

**Acceptance criteria:**

- Create custom categories (e.g., Frontend, Design, DevOps, AI, Newsletters)
- Assign feeds to categories (one category per feed)
- View all items within a category
- Rename and delete categories (reassign or uncategorize feeds on delete)
- Display categories in a sidebar or navigation with unread counts
- Support an "Uncategorized" default for feeds without a category
- Reorder categories via drag-and-drop or manual ordering

---

## 5. Read/Unread Tracking

Track which items the user has seen.

**Acceptance criteria:**

- Mark an item as read when clicked/opened
- Visually distinguish read vs. unread items (opacity, weight, or indicator)
- Mark individual items as read/unread manually
- "Mark all as read" per feed
- "Mark all as read" per category
- "Mark all as read" globally
- Persist read state across sessions
- Show unread count in navigation (per feed, per category, total)

---

## 6. Article View

Let users read or access the full article.

**Acceptance criteria:**

- Click an item to open the original article in a new tab
- Where the feed provides full content (not just excerpt), offer a reader view within the app
- Reader view should render HTML content cleanly: headings, paragraphs, lists, code blocks, images
- Reader view should strip ads, navigation, and non-content elements from the feed HTML
- Show article metadata in reader view: title, author, source, publication date
- Provide a link to the original source from reader view
- Navigate between items without returning to the list (next/previous)

---

## 7. Responsive Design

The app works well across devices.

**Acceptance criteria:**

- The layout adapts naturally across screen sizes — let your content dictate the breakpoints rather than targeting specific pixel values
- On smaller screens: single-column layout, collapsible navigation, touch-friendly tap targets
- On larger screens: take advantage of the space — consider how navigation, content, and reading can coexist
- No horizontal scrolling
- Navigation is accessible and usable on all screen sizes
- Font sizes and spacing are comfortable for reading on each device class
- Images and media in feed content are responsive

---

## 8. Feed Error Handling

Gracefully handle the reality of unreliable feeds.

**Acceptance criteria:**

- Show clear error state for feeds that fail to fetch (network error, timeout, 404, 500)
- Distinguish between temporary errors and permanently dead feeds
- Retry failed feeds with exponential backoff
- Show last successful fetch time even when current fetch fails
- Don't block the entire UI when one feed is slow or broken
- Allow users to manually retry a failed feed
- Show a feed health dashboard or indicator (how many feeds are healthy vs. erroring)

---

## 9. User Authentication

Secure, personal experience.

**Acceptance criteria:**

- Sign up with email and password
- Sign in / sign out
- Password reset flow
- Persist all user data (feeds, categories, read state, bookmarks, preferences) per account
- Auth state persists across browser sessions
- Protected routes redirect unauthenticated users to sign-in
- Guest mode allows full exploration without an account (see "Try as Guest" requirements)

---

## 10. Landing Page

The first impression and entry point.

**Acceptance criteria:**

- Hero section with clear, compelling value proposition
- 3-4 feature highlights that communicate what makes Frontpage useful
- Dual CTAs: "Sign Up" and "Try as Guest" — both prominent
- Responsive design that works well on mobile through desktop
- Visual quality that sets the professional tone for the entire product
- Fast load time (no heavy assets blocking render)

---

## 11. "Try as Guest" Experience

Visitors can explore the full app without creating an account. This is critical for portfolio value — when a hiring manager, colleague, or community member clicks your deployed link, they're not going to create an account. Guest mode is what lets them see your work.

**Acceptance criteria:**

- Single click from landing page enters guest mode
- Dashboard is pre-loaded with the 19 curated feeds across 5 categories (see `data/` files)
- Guest sees a fully populated dashboard with real content, organized by category
- Guest can browse, search, and switch layouts
- Gentle prompts to sign up to save their data (not aggressive gating)
- Guest data is session-based (not persisted across visits unless they sign up)
- Clear messaging about what signing up unlocks (persistence, custom feeds, sync)

---

## 12. Data Persistence

All user data stored in a real database.

**Acceptance criteria:**

- Use a real database service (Supabase, Firebase, Neon, PlanetScale, etc.)
- Store: feed subscriptions, categories, feed items, read state, bookmarks, user preferences
- Data persists across sessions and devices for authenticated users
- Efficient queries — don't fetch all items when only showing one category
- Handle concurrent updates gracefully (multiple tabs, optimistic updates)

---

# Stretch

These 6 features take the product to the next level. They build on the Core foundation and are recommended for developers who want to go deeper.

---

## 13. Bookmarks / Save for Later

Save articles to a persistent reading list.

**Acceptance criteria:**

- Bookmark any item from the feed list or reader view
- View all bookmarks in a dedicated "Saved" section
- Remove bookmarks individually
- Bookmarks persist across sessions
- Show bookmark count in navigation
- Sort bookmarks by date saved or date published
- Search within bookmarks

---

## 14. Search

Find content across all feeds.

**Acceptance criteria:**

- Full-text search across item titles and descriptions
- Search results show matching items with highlighted query terms
- Filter search results by feed, category, or date range
- Search is fast (results appear as you type or within 500ms of submission)
- Show "no results" state with helpful messaging
- Recent searches history (optional but nice)

---

## 15. OPML Import/Export

Support the standard feed subscription format.

**Acceptance criteria:**

- Import feeds from a standard OPML file
- Show import preview: list of feeds to be added, with duplicates flagged
- Handle OPML format variations (outline nesting, different attribute names for URL)
- Skip or flag duplicate feeds (same URL already subscribed)
- Report import results: X feeds added, Y duplicates skipped, Z invalid feeds
- Export current subscriptions as OPML file
- Preserve category structure in OPML export
- Handle the provided `sample-feeds.opml` file successfully

---

## 16. Refresh and Polling

Keep content fresh.

**Acceptance criteria:**

- Manual "refresh all" button with visual feedback (loading state, success confirmation)
- Manual refresh per individual feed
- Configurable auto-refresh interval (15 min, 30 min, 1 hour, manual only)
- Show "last updated" timestamp
- Visual indicator when new items are available ("5 new items" banner or similar)
- Don't re-fetch feeds that haven't changed (use ETags or Last-Modified headers where supported)
- Refresh should be non-blocking — user can continue browsing while feeds update in background

---

## 17. Performance

The app must feel fast and responsive.

**Acceptance criteria:**

- Initial feed load completes in under 3 seconds
- Smooth scrolling through hundreds of items (no jank)
- Efficient caching to avoid re-fetching unchanged feeds
- Images lazy-load to avoid blocking initial render
- Search results appear within 500ms
- Time to interactive on landing page under 2 seconds
- No layout shifts during content loading (use skeleton screens or placeholders)

---

## 18. Keyboard Navigation

A comprehensive keyboard shortcut system that makes the app fast and fluid for power users.

**Acceptance criteria:**

- `j` / `k` to move between items in the feed list
- `o` or `Enter` to open the selected item
- `s` to save/bookmark the selected item (if bookmarks are implemented)
- `m` to toggle read/unread on the selected item
- `g` then `h` for go home, `g` then `s` for saved, `g` then `f` for feeds (vim-style compound shortcuts)
- `/` to focus search (if search is implemented)
- `?` to show keyboard shortcut reference overlay
- Command palette (Cmd/Ctrl + K) for quick actions: switch category, go to feed, search, change layout
- Visual focus indicator showing which item is currently selected
- Scroll selected item into view automatically
- Works seamlessly alongside mouse/touch interaction — keyboard and pointer don't conflict
