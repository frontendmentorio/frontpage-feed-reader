# Sample Data: Feeds & Edge Cases

## Files

| File | Format | Purpose |
|------|--------|---------|
| `sample-feeds.opml` | OPML 2.0 | Standard subscription import file — use for OPML import testing |
| `sample-feeds.json` | JSON | Same feeds in a more developer-friendly format — use for seeding the guest experience |

Both files contain the same 19 curated feeds. The OPML file includes additional format-specific edge cases (missing attributes, nesting variations, lowercase attribute names) that don't apply to JSON.

## Curated Feeds (19 feeds across 5 categories)

### Frontend (6 feeds)
- CSS-Tricks, Smashing Magazine, Josh W. Comeau, Kent C. Dodds, web.dev, MDN Blog

### Design (5 feeds)
- Sidebar.io, Nielsen Norman Group, Figma Blog, A List Apart, UX Collective

### Backend & DevOps (4 feeds)
- Cloudflare Blog, Vercel Blog, The GitHub Blog, Netlify Blog

### General Tech (2 feeds)
- The Pragmatic Engineer, Hacker News Best

### AI & ML (2 feeds)
- Simon Willison's Weblog, Hugging Face Blog

These feeds are chosen because they are well-known, actively maintained, and representative of the content the target audience consumes.

## Edge Cases

The sample data includes intentional problems that test robust feed handling. These reflect real-world issues you'll encounter building a feed aggregator.

### Format Variations

| Edge Case | Where | What to Handle |
|-----------|-------|----------------|
| **RSS 2.0 feeds** | Most feeds | Standard RSS parsing |
| **Atom 1.0 feeds** | web.dev, Vercel, Simon Willison, Sidebar.io, Hugging Face | Different XML structure — `<entry>` vs `<item>`, `<content>` vs `<description>` |
| **Mixed formats** | Across categories | Your parser must detect and handle both formats |

### Content Variations

| Edge Case | Where | What to Handle |
|-----------|-------|----------------|
| **Full HTML content** | Cloudflare, Simon Willison | Feed includes complete article HTML with images, code blocks, embedded media |
| **Excerpt only** | The Pragmatic Engineer | Some feeds only provide a summary, not full content (paywalled) |
| **Medium-based feeds** | UX Collective | Medium's RSS includes platform-specific markup and tracking |
| **High volume** | Hacker News Best, Sidebar.io | 100+ items — test pagination, virtualization, and performance |
| **Infrequent publishing** | A List Apart | May not have recent items — handle gracefully, don't flag as "dead" |
| **Rich code content** | Josh Comeau, web.dev | Articles contain code blocks that need proper rendering |

### OPML-Specific Edge Cases

| Edge Case | Where in OPML | What to Handle |
|-----------|---------------|----------------|
| **Duplicate feed** | Root level duplicate of Simon Willison | Same `xmlUrl` appears twice — detect and skip or merge |
| **Dead feed URL** | `Defunct Tech Blog` entry | URL returns 404 — report in import results, don't crash |
| **Missing `type` attribute** | `web.dev (no type)` entry | OPML outline without `type="rss"` — should still be importable |
| **Lowercase attributes** | `CSS-Tricks (alt attr)` entry | Uses `xmlurl` instead of `xmlUrl` — handle case-insensitively |
| **Deeply nested categories** | `Nested Category > Subcategory` | OPML allows arbitrary nesting — flatten or handle gracefully |
| **Minimal attributes** | Last entry (Cloudflare, no text) | Only `xmlUrl` present — fetch feed to determine title |

### Encoding & Date Variations

These aren't represented as separate entries but occur naturally in the feeds above:

| Edge Case | What to Handle |
|-----------|----------------|
| **UTF-8 content** | Most feeds — standard encoding |
| **HTML entities in titles** | Titles with `&amp;`, `&mdash;`, `&#8217;` etc. |
| **ISO 8601 dates** | Atom feeds use `2024-01-15T10:30:00Z` format |
| **RFC 822 dates** | RSS feeds use `Mon, 15 Jan 2024 10:30:00 GMT` format |
| **Timezone variations** | Some feeds use UTC, others use local timezones, some omit timezone |
| **Missing dates** | Some items may lack a publication date entirely |

## Using the Sample Data

### For the Guest Experience

Use `sample-feeds.json` to seed the guest dashboard. The 19 unique feeds across 5 categories provide a compelling first impression with real content that updates regularly.

**Recommended approach:**
1. On "Try as Guest", create a session with the curated feed list
2. Fetch feeds server-side and cache the results
3. Display content organized by the predefined categories

### For OPML Import Testing

Use `sample-feeds.opml` to test your import flow. It includes all the happy-path feeds plus the edge cases listed above. A robust import should:

- Successfully import the 19 unique, valid feeds
- Detect and skip duplicates — some edge case entries reuse URLs from the categorized feeds above, so they test both the edge case (e.g. lowercase attributes) and duplicate detection
- Report 1 dead feed (with helpful error message)
- Handle 1 entry with missing type attribute
- Handle 1 entry with lowercase attribute names
- Flatten or handle 1 deeply nested category structure
- Handle 1 entry with minimal attributes (no title)

### For Development & Testing

The feeds are all publicly accessible — you can fetch them during development to test your parsing, rendering, and error handling with real data.

**Note:** Feed content changes over time. Your app should handle feeds regardless of their current content. Don't hardcode expectations about specific articles or item counts.
