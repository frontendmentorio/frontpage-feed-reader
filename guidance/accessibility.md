# Accessibility Requirements: Frontpage

## WCAG 2.1 AA Compliance Checklist

This checklist covers the accessibility requirements for Frontpage. All items are required unless marked as recommended.

### Perceivable

#### Text & Color

- [ ] All text meets WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- [ ] Color is never the sole means of conveying information (e.g., feed health uses icons + color, not just color)
- [ ] Unread indicators use more than just color (dot/weight + color, not color alone)
- [ ] Links are distinguishable from surrounding text without relying on color alone (underline or other indicator)

#### Images & Media

- [ ] All images in feed content have alt text (from feed data) or are marked decorative (`alt=""`)
- [ ] Source favicons have appropriate alt text or are decorative
- [ ] No images of text (use real text for all UI elements)

#### Structure

- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipped levels)
- [ ] Landmark regions used appropriately (`<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>`)
- [ ] Lists of items use `<ul>` / `<ol>` / `<li>` elements
- [ ] Tables (if used) have proper headers and captions
- [ ] Page titles are descriptive and unique per view

### Operable

#### Keyboard

- [ ] All interactive elements are reachable via Tab key
- [ ] Focus order follows a logical reading sequence
- [ ] Focus is visible on all interactive elements (`:focus-visible` styling)
- [ ] No keyboard traps — users can always Tab away from a component
- [ ] Modal/dialog focus is trapped within the dialog and restored on close
- [ ] Custom keyboard shortcuts (if implemented) don't conflict with assistive technology
- [ ] Skip link provided to bypass navigation and jump to main content

#### Navigation

- [ ] Current page/section is indicated in navigation (aria-current)
- [ ] Breadcrumbs or clear location indicators provided
- [ ] Back button / navigation works predictably
- [ ] Multiple ways to reach content (nav, search, categories)

#### Timing

- [ ] Auto-refresh doesn't disrupt user's current reading position
- [ ] No time limits on reading or interaction (guest session is an exception — document it)
- [ ] Animations respect `prefers-reduced-motion` media query

### Understandable

#### Forms & Input

- [ ] All form fields have visible labels (not just placeholder text)
- [ ] Error messages are specific and associated with the relevant field (via `aria-describedby`)
- [ ] Required fields are indicated both visually and programmatically (`aria-required`)
- [ ] Form submission errors don't clear already-entered data
- [ ] Feed URL input provides helpful error messages ("This doesn't look like a valid feed URL")

#### Language & Content

- [ ] Page language is set (`<html lang="en">`)
- [ ] Feed content in other languages has `lang` attribute where detectable
- [ ] Abbreviations are expanded on first use or in a glossary
- [ ] Error messages use plain language, not technical jargon

### Robust

#### Assistive Technology

- [ ] Valid, well-structured HTML
- [ ] ARIA attributes used correctly (roles, states, properties)
- [ ] Dynamic content changes announced via `aria-live` regions (new items, refresh complete, errors)
- [ ] Custom components (dropdowns, modals, tabs) follow ARIA authoring practices
- [ ] Feed items work with screen readers — title, source, date are announced in a meaningful order

#### Interactive Components

- [ ] Dropdown menus are keyboard accessible and announce their state (expanded/collapsed)
- [ ] Toggle buttons announce their state (pressed/not pressed)
- [ ] Loading states are announced to screen readers ("Loading feeds...", "Refresh complete")
- [ ] "Mark all as read" and bulk actions confirm the result to screen readers

## Feed-Specific Accessibility Considerations

### Feed Content

- Feed items may contain HTML from external sources. When rendering feed content:
  - Sanitize HTML to prevent XSS while preserving semantic structure
  - Ensure rendered content maintains heading hierarchy relative to the page
  - Images from feeds should have alt text if provided in the feed, or be marked decorative
  - Code blocks in feed content should be announced appropriately

### Feed Status

- Feed health indicators (active, stale, error) should use:
  - Icon + color (not color alone)
  - Descriptive text available to screen readers (e.g., `aria-label="Feed status: error - last fetch failed 2 hours ago"`)

### Read/Unread

- The visual distinction between read and unread items should be conveyed to assistive technology
- Consider `aria-label` additions like "unread" or a visually hidden text label

## Recommended (Beyond AA)

These go beyond minimum compliance and signal strong accessibility awareness:

- [ ] Customizable font size for reading comfort
- [ ] Customizable line height and line length
- [ ] High contrast mode option
- [ ] Reduced motion mode that eliminates all non-essential animation
- [ ] Screen reader testing with at least one of: VoiceOver (Mac), NVDA (Windows), or TalkBack (Android)
- [ ] Keyboard shortcut reference accessible via `?` key (if keyboard shortcuts are implemented)

## Testing

Before submission, verify:

1. Navigate the entire app using only the keyboard
2. Use a screen reader to browse feeds, open items, bookmark, and search
3. Check all pages with a contrast checker tool
4. Test with browser zoom at 200%
5. Test with `prefers-reduced-motion: reduce` enabled
6. Run an automated audit (Lighthouse, axe, or WAVE)
