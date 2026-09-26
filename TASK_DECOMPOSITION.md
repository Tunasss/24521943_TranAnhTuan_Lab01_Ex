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