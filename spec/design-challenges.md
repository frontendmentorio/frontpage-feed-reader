# Design Challenges

These features require you to make genuine product decisions. There's no single right answer — your solution should reflect your understanding of the users, your design taste, and thoughtful trade-offs.

For each, document your approach and reasoning in your README.

---

## 1. Content Discovery & Onboarding

**The problem:** New users have an empty dashboard. Before they can get value from Frontpage, they need to add feeds — but they might not have feed URLs handy, or even know what RSS feeds are available for their favorite sources.

**Design this:**

- How do users discover feeds worth following? Consider: feed suggestions by category, popular/trending feeds, curated starter packs, search by topic or publication name, "follow your interests" flow.
- What does the empty state look like? How does it feel helpful rather than barren?
- How does the onboarding experience differ for a power user importing OPML vs. a casual user who just wants good content?
- Is there a "quick start" path? What's the fastest way from sign-up to a populated, useful dashboard?
- How do you introduce the product's features without overwhelming new users?

**Questions to consider:**

- What's the balance between curation and customization?
- Should the app suggest feeds proactively, or wait for the user to search?
- How do you handle the cold start without making the app feel like a demo?

---

## 2. Digest / Summary View

**The problem:** Many users check their content aggregator once or twice a day. They don't want to scroll through every item chronologically — they want a quick "what did I miss?" experience that surfaces the most relevant content.

**Design this:**

- What does the digest contain? All items since last visit? A curated selection? Top items by source?
- How is content prioritized or ranked? By recency? By source importance? By category? By engagement signals?
- What format does the digest take? A daily view? A highlights page? A smart feed? A summary email?
- How does the digest differ from just scrolling the main feed? What makes it distinctly useful?
- How does the user configure what appears in their digest?

**Questions to consider:**

- Is this a separate view or a mode within the main feed?
- How do you handle days with very few items vs. days with hundreds?
- Should the digest be time-based (daily/weekly) or visit-based (since last check)?
- What role could AI play in creating a better digest?

---

## 3. Layout Customization

**The problem:** Users have different reading preferences. Some want dense, scannable lists (like Hacker News or email). Others want visual cards with images (like a magazine). Some want multi-column layouts for browsing across categories simultaneously (like a newspaper). One layout doesn't serve all preferences.

**Design this:**

- What layout options do users have? Consider: compact list, standard list, card grid, magazine layout, multi-column/newspaper, split pane (list + reader).
- How do users discover and switch between layouts? Toggle? Settings? Per-category?
- Can different categories have different layouts? Or is it a global setting?
- How does each layout adapt across breakpoints (mobile, tablet, desktop)?
- What content is shown/hidden in each layout? (e.g., compact hides images, cards emphasize them)

**Questions to consider:**

- How many layout options is the right number? (Too few limits expression, too many overwhelms)
- Should layout preference persist per device, per category, or globally?
- How do you handle feeds with no images in a card/magazine layout?
- What's the default layout for new users, and why?
