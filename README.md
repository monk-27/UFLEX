# UFlex Theme Recreation — Overview & Comparison

This project recreates the provided UFlex theme in a modern Next.js App Router app, preserving the brand feel while adding professional visuals, animations, and responsive polish.

## What Stayed the Same (Parity with Source)
- Text content: Mirrored from the provided pages (Home, About Us, What We Do, all Business pages, Sustainability, Hall of Fame, Careers, Press Room, Get in Touch).
- Color direction: Primary (#5077AF) and accent (#97C3EF) maintained as core brand cues.
- Information architecture: Main sections and navigation structure preserved.
- Media placeholders: Video and images replaced with high-quality placeholders where originals were not available, ready to swap with real assets.

## What’s New (Enhancements)
- Theming & Typography
  - Manrope applied site‑wide.
  - Centralized design tokens in CSS for colors, borders, shadows, and radii (no hard-coded colors in components).
  - Gradient button utility and elevated card style for a premium look.
- Navigation
  - Animated “bullet‑fired” active tab indicator using framer‑motion (fast spring, glow trail) for high-clarity state.
  - High‑contrast active pill background to ensure visibility on light/gradient headers.
- Animations (Framer Motion)
  - Page transitions on route change.
  - Section entrances (fade/slide/stagger) tuned for performance and reduced‑motion preferences.
  - Modals with blurred overlay and springy, accessible open/close motion.
- Landing Page
  - Premium hero with video placeholder and subtle overlay.
  - “What We Do” animated grid with bordered, elevated cards.
  - Logo ticker, stats row, and testimonials slider to add credibility and depth.
- Key Pages Upgraded
  - About Us: Enhanced journey/values sections, richer motion, and stats.
  - Sustainability: Professional stat row (matching your screenshot), alternating backgrounds, and animated cards.
  - Business pages: “Read More” modals with imagery and text, animated entrances.
  - Hall of Fame: Featured highlights with animated tiles/cards.
  - Careers: “Life at UFlex” section, role previews, and refined application CTAs.
  - Get in Touch: Beautiful, accessible form with animated inputs and helpful states.
- Footer
  - Multi‑column layout with social links and newsletter signup.
  - Improved contrast and a slim legal strip for a polished finish.
- Accessibility
  - Skip‑to‑content link, main landmarks, semantic sections.
  - Better color contrast on interactive elements.
  - Respects prefers‑reduced‑motion.

## File Map (high level)
- app/
  - layout.tsx (font setup, a11y landmarks, base theme wiring)
  - page.tsx (home/landing with hero, grid, logo ticker, testimonials)
  - about-us/page.tsx, sustainability/page.tsx, [business]/page.tsx, hall-of-fame/page.tsx, careers/page.tsx, press-room/page.tsx, get-in-touch/page.tsx
- components/
  - site-header.tsx (animated tabs with “bullet‑fired” indicator)
  - site-footer.tsx (multi‑column footer with newsletter and socials)
  - animated-section.tsx, page-transition.tsx (page/section motion wrappers)
  - animated-tabs.tsx (tab movement + active pill)
  - read-more-modal.tsx (framer‑motion modal with blurred overlay)
  - hero-video.tsx, timeline.tsx, testimonials.tsx, logo-ticker.tsx
  - stats-row.tsx (and/or stats-row-pro.tsx) — stat cards matching screenshot style
  - ui/ (cards, dialog, etc.)
- app/globals.css
  - Design tokens for brand colors, surfaces, borders, radius, shadows
  - Utilities: elevated cards, stat cards, gradient buttons, nav pills, alt backgrounds

## Theming — How to Customize
- Primary brand color and accent:
  - Change the design tokens in app/globals.css (e.g., --brand-primary, --brand-accent).
- Light/neutral surfaces:
  - Adjust alt background tokens (e.g., --surface-alt-1, --surface-alt-2) for subtle section contrast.
- Cards and borders:
  - Tweak --border, --shadow-elevated, and card utilities for stronger/lighter emphasis.
- Buttons:
  - Gradient utility and focus/hover states can be tuned in app/globals.css.

## Animations — How to Customize
- Header bullet animation:
  - See components/animated-tabs.tsx for the framer‑motion keyframes and spring configuration.
- Page transitions:
  - See components/page-transition.tsx for route motion.
- Modals:
  - See components/read-more-modal.tsx for overlay blur and spring/opacity settings.
- Reduced motion:
  - Motion components respect prefers‑reduced‑motion; adjust thresholds inside those components if needed.

## Accessibility & Performance
- Accessible nav, landmarks, and focus styles.
- Image/video placeholders with sensible sizing; swap in production assets.
- Framer Motion variants are optimized and bail out gracefully if reduced‑motion is requested.

## Known Items & Troubleshooting
- If a page link doesn’t open:
  - Verify the href in components/site-header.tsx matches app/<route>/page.tsx.
  - Ensure the route folder and page.tsx exist and the file name uses kebab‑case.
- If active tab contrast is low:
  - Confirm the active pill and text colors reference the correct tokens in app/globals.css.
- If animations feel heavy:
  - Reduce spring stiffness or duration in components/animated-tabs.tsx and page-transition wrappers.

## Next Steps (Optional)
- Per‑page accent hues to subtly differentiate sections while staying on brand.
- Add CMS or data source for Hall of Fame, Press, and Careers.
- Replace placeholders with final video/images and finalize copy approvals.
# UFLEX
