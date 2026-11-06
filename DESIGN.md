# Portfolio design system

A small, implementation-focused design guide for this site. The goal is an editorial, personal portfolio with a little technical character: expressive typography, calm structure, and a few purposeful moments of depth.

## Design direction

- **Personality:** curious, thoughtful, technically minded, approachable.
- **Visual language:** dark ink canvas, warm off-white text, acid-lime accent, restrained orange/blue secondary accents.
- **Reference:** use the personality and playful clarity of [aaabadcode.com](https://www.aaabadcode.com/) as inspiration, not as a layout to copy.
- **Principle:** the work and the writing should remain understandable if every animation is disabled.

## Tokens

| Token | Value | Use |
|---|---|---|
| Background | `#10120f` | Page canvas |
| Surface | `#171a15` | Project and content panels |
| Raised surface | `#1d211a` | Hover and emphasis |
| Primary text | `#f0f0e8` | Headings and key copy |
| Muted text | `#a7aa9d` | Supporting copy |
| Accent | `#d7f36a` | Links, active states, small highlights |
| Secondary orange | `#ff9b70` | Small contrast details |
| Secondary blue | `#9eb8ff` | Technical illustration details |
| Border | `rgba(239,241,222,.13)` | Dividers and card outlines |

## Typography

- Display: Space Grotesk, 600 weight for expressive headings.
- Body: DM Sans, 400–600 for readable paragraphs and interface text.
- Utility: DM Mono for labels, counts, tags, and small metadata.
- Headings use tight tracking; body copy uses generous line-height.
- Do not set long paragraphs in monospace or use uppercase for whole sections.

## Layout

- Maximum content width: 1180px.
- Desktop page gutters: 32px; mobile gutters: 18px.
- Keep navigation to four clear destinations: Work, About, Toolkit, Contact.
- Project cards use a two-column grid; the lead project spans both columns.
- On mobile, all project cards become one-column and the navigation becomes a disclosure menu.
- Let section spacing establish hierarchy. Avoid nested cards and excessive rounded corners.

## Components

- Buttons: square-ish 3px corners, clear labels, visible hover/focus states.
- Project cards: custom CSS visual, short description, relevant stack tags, direct repository link.
- Filters: real buttons with `aria-pressed`; hidden cards use the `hidden` attribute.
- Navigation: semantic anchors, keyboard-operable mobile toggle, Escape closes menu.
- Hero artwork: CSS 3D orbital illustration; decorative only and never required to understand the content.

## Motion and accessibility

- Use motion to add depth, not to delay access to content.
- Keep hover transitions around 200–250ms.
- Respect `prefers-reduced-motion` globally.
- Maintain visible keyboard focus, semantic headings, descriptive link text, and a skip link.
- No cursor replacement, scroll hijacking, autoplay media, or animation-dependent content.

## Content rules

- Describe what a project does, not what it supposedly proves about its author.
- Be specific about prototypes, experiments, and work in progress.
- Do not invent users, metrics, awards, impact, or production readiness.
- Prefer plain language over self-congratulatory claims and inflated adjectives.
- Keep skill labels honest: “used or studied” is preferable to implying expert proficiency.
- Every project link must point to its real repository; remove a project rather than inventing a destination.
