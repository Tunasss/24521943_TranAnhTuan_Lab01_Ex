# Task Decomposition

## T-01: Semantic DOM Architecture & A11y Contract
- Goal: Build a semantic landmark tree for the page, no <div> elements
- Requirements:
  - [ ] Skip link to #main-content
  - [ ] <header role="banner">
  - [ ] <nav role="navigation" aria-label="Primary">
  - [ ] <main id="main-content" role="main">
  - [ ] Clearly-identified <section> elements inside <main>
- Verification: Chrome DevTools > Accessibility > Landmark Tree

## T-02: Enterprise Developer Portfolio (Component Architecture & State Modeling)

### Goal
Build a modular, component-based portfolio page with a working dark-mode
theme engine, responsive CSS Grid layout, and a validated contact form —
meeting strict performance and accessibility acceptance criteria.

### Sub-tasks (each = one atomic commit)
- [ ] **T-02A — Tokens & Reset**
      Define CSS custom properties (colors, spacing, radius) for light/dark
      themes + a base CSS reset.
      Commit: `git commit -m 'feat(css): tokens & reset'`

- [ ] **T-02B — 2D Grid Layout**
      Build responsive CSS Grid layouts for Skills Matrix and Project Cards.
      Commit: `git commit -m 'feat(css): responsive grid'`

- [ ] **T-02C — Theme Engine**
      Implement JS-based dark mode toggle with localStorage persistence
      and contact form client-side validation.
      Commit: `git commit -m 'feat(js): dark mode engine'`

### Required Components
- [ ] Hero Section — portrait with explicit width/height, headline, pitch
- [ ] Theme Switcher — accessible button, `aria-pressed`, dynamic icon
- [ ] Skills Matrix — categorized badges in CSS Grid
- [ ] Project Cards — self-contained `<article>` blocks (tags, links, description)
- [ ] Contact Form — native HTML form, client-side validated

### Contract-First Constraints
- [ ] Theme state persisted ONLY via `localStorage` key `'theme'`
- [ ] All colors via CSS variables — zero hardcoded hex codes in rules
- [ ] Performance budget: CLS = 0, LCP < 2.0s (DevTools Fast 3G)

### Acceptance Criteria (Verification Gate)
- [ ] No commit combines CSS + JS (monolithic dump = 0 pts)
- [ ] Renders cleanly at 375px mobile width — zero horizontal scroll
- [ ] Passes WCAG 2.2 AA contrast ratios (≥ 4.5:1)
- [ ] Zero console errors during dynamic theme toggling
- [ ] Full keyboard navigation support (Tab + Enter)
- [ ] Passes "3-Minute Live Defense": instructor alters a CSS token,
      must be fixed correctly within 60 seconds

### Verification
Chrome DevTools → Lighthouse (Performance + Accessibility) +
manual keyboard-navigation + responsive check at 375px.

## T-03: Resilient Component Architecture

### Goal
Build a single data-driven component (e.g. a "Projects" list) that
correctly handles all 4 UI states: loading, loaded, empty, error.

### State Machine
- [ ] STATE 1: loading  -> shows skeleton shimmer placeholders
- [ ] STATE 2: loaded   -> shows real data (flexbox badges + grid list)
- [ ] STATE 3: empty    -> shows "no data" message, no skeleton, no error
- [ ] STATE 4: error    -> shows error message + accessible retry button

### Sub-tasks (each = separate commit)
- [ ] T-03A — Loading Skeleton (pure CSS shimmer gradient)
      git commit -m 'feat(css): skeleton'
- [ ] T-03B — Live Data State (flexbox metadata badges & grid list)
      git commit -m 'feat(css): live data state'
- [ ] T-03C — Empty & Error States (accessible retry trigger)
      git commit -m 'feat(js): empty & error states'

### Constraints
- [ ] Each state prompted/built separately — never generate all 4 in one AI prompt
- [ ] Each state committed individually (no combined commits)
- [ ] Retry trigger must be keyboard-accessible (a real <button>, not a div/span)