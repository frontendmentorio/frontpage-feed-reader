# UI/UX Patterns: Frontpage

## Patterns to Follow

### Feed Item Design

- Show title, source, time, and excerpt — in that visual hierarchy order
- Use source favicon as a small identifying mark (16-20px), not a dominant element
- Timestamps should be relative ("2h ago", "yesterday") with full date on hover
- Unread indicators should be subtle but unmissable — a dot, weight change, or opacity shift
- Clicking a feed item should feel immediately responsive (optimistic UI for read state)

### Navigation & Information Architecture

- Primary navigation in a sidebar (desktop) or bottom bar / hamburger (mobile)
- Categories and feeds in the sidebar with unread counts
- "All Items", "Saved", and "Search" as top-level navigation destinations
- Current location should be obvious at all times (active state in nav)
- Collapsible sidebar to maximize reading area when desired

### Loading & Empty States

- Skeleton screens for content loading — match the shape of real content
- Spinner or progress indicator for feed refresh operations
- Empty states should be helpful: explain why it's empty and what to do about it
- Error states should be specific: "This feed returned a 404" not "Something went wrong"

### Search

- Search should be prominently accessible (header bar or keyboard shortcut)
- Results should highlight matching terms
- Include source and date in search results for context
- "No results" should suggest alternatives (check spelling, try different terms)

### Read/Unread State

- Read items should be visually de-emphasized, not hidden
- The transition from unread to read should be smooth, not jarring
- Bulk actions ("Mark all as read") should have a brief undo window or confirmation

### Responsive Behavior

- Sidebar collapses to overlay or bottom nav on mobile
- Feed items adapt: less metadata shown on small screens, full detail on large
- Touch targets minimum 44x44px on mobile
- Reader view should be full-width on mobile with comfortable margins

## Anti-Patterns to Avoid

### Information Overload

- Don't show all metadata for every item (author + date + category + word count + read time + source). Choose 2-3 pieces of metadata that matter most.
- Don't use more than 2 font sizes in a single feed item
- Don't let image thumbnails dominate the item — title and excerpt should lead

### Aggressive UI

- Don't auto-play media from feeds
- Don't use modals for routine actions (adding a feed, confirming a bookmark)
- Don't gate guest features behind sign-up prompts — let guests explore freely, prompt gently
- Don't use notification badges for counts over 99 — show "99+" and stop. Anxiety-inducing counts are a dark pattern

### Layout Pitfalls

- Don't force a fixed sidebar on mobile
- Don't use horizontal scrolling for feed items
- Don't hide navigation behind a hamburger menu on desktop — space permits a visible sidebar
- Don't mix card layouts and list layouts in the same view without clear visual separation

### Performance

- Don't load all feed items on initial render — virtualize or paginate long lists
- Don't fetch images eagerly — lazy load below the fold
- Don't block the UI while feeds are refreshing — show a non-blocking progress indicator
- Don't re-fetch feeds on every navigation — cache aggressively, refresh in the background

### Error Handling

- Don't show raw error messages or stack traces to users
- Don't silently fail — if a feed can't be fetched, tell the user
- Don't retry failed feeds aggressively — exponential backoff prevents hammering broken servers
- Don't treat all errors the same — a 404 (feed moved) is different from a timeout (temporary issue)
