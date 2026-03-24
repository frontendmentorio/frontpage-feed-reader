# Differentiators

Differentiators are optional but recommended. Pick 1-2 if you want to push the project further and showcase deeper expertise.

Each one demonstrates a specific skill area and meaningfully changes the user experience. Choose based on your interests and the skills you want to showcase.

Document your choice, implementation approach, and what you learned in your README.

---

## 1. AI-Powered Summarization

**Skill area:** AI integration

Use AI to help users process more content in less time.

**What to build:**

- Generate concise summaries of long articles (1-2 paragraph digest of full content)
- Auto-tag content by topic when feed categories aren't specific enough
- Create a "Weekly Highlights" digest that summarizes the most notable content across all feeds
- Smart categorization suggestions: "This feed seems like it belongs in 'Frontend' — move it?"
- Optional: Natural language search ("articles about React performance from last week")

**Why this is impressive:** AI integration is a differentiator that employers are actively looking for. Building it well means handling API costs, latency, caching summaries, graceful fallbacks, and UX that makes AI feel helpful rather than intrusive.

---

## 2. Offline Reading Support

**Skill area:** Performance / PWA

Cache articles for offline access so users can read on the go.

**What to build:**

- Service worker that caches feed content for offline reading
- "Save offline" action on individual articles
- Automatic caching of recent items (last 24 hours or last 50 items)
- Offline indicator in the UI
- Queue actions taken offline (mark as read, bookmark) and sync when back online
- Manage cache size (clear old items, respect device storage)
- Progressive Web App (PWA) manifest for install-to-home-screen

**Why this is impressive:** Offline support demonstrates understanding of service workers, cache strategies, and sync conflict resolution — advanced web platform skills that are increasingly valued as web apps compete with native.

---

## 3. Newsletter Email Integration

**Skill area:** Backend complexity

Provide a unique email address that converts incoming newsletters into feed items.

**What to build:**

- Generate a unique `@your-domain.com` email address per user
- Receive incoming emails and parse them into feed items
- Extract clean content from newsletter HTML (strip email chrome, tracking pixels, unsubscribe links)
- Show newsletters alongside RSS content in the same interface
- Handle common newsletter formats (Substack, Buttondown, Mailchimp, ConvertKit)
- Email verification and spam filtering

**Why this is impressive:** Email ingestion is genuinely complex backend engineering — receiving SMTP, parsing MIME, cleaning HTML, handling attachments. It solves a real problem (newsletters and RSS are separate worlds) and demonstrates full-stack depth.

---

## 4. Reading Analytics

**Skill area:** Data visualization

Track reading habits and present insightful data about consumption patterns.

**What to build:**

- Articles read per day/week/month (line or bar chart)
- Most-read categories and sources (breakdown chart)
- Reading streak tracker (consecutive days with at least one article read)
- Activity heatmap showing reading patterns (time of day, day of week — like GitHub's contribution graph)
- Average time between item published and item read (freshness metric)
- "Reading pace" — items read vs. items received (are you keeping up?)
- Export reading data as CSV or JSON

**Why this is impressive:** Data visualization is a high-impact design skill. Building a compelling analytics dashboard requires charting, data aggregation, meaningful metric selection, and clear visual communication. It turns a content reader into a self-aware reading tool.

---

## 5. Accessibility-First Reading

**Skill area:** Accessibility

Go beyond WCAG compliance to create a truly inclusive reading experience.

**What to build:**

- Full screen reader experience with proper ARIA landmarks, labels, and live regions
- Reduced motion mode that respects `prefers-reduced-motion` and removes all animations
- High contrast mode with WCAG AAA contrast ratios
- Customizable font size, line height, and line length for reading comfort
- Dyslexia-friendly font option (OpenDyslexic or similar)
- Focus-visible styling that's both functional and aesthetically integrated
- Skip links and logical heading hierarchy throughout the app
- Color-blind safe status indicators (never rely on color alone)
- Keyboard navigation that works without visible focus ring for mouse users (`:focus-visible`)
- Accessibility statement page documenting what was implemented and tested

**Why this is impressive:** Accessibility-first development is a principled skill that signals care for all users. Going beyond the basics (alt text, contrast) into custom reading preferences, comprehensive ARIA, and reduced motion demonstrates deep expertise that employers value highly.
