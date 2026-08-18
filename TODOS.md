# TODOS

## Frontend / Site Polish

### Favicon + web app manifest

**What:** Derive a favicon (multiple sizes) and a `manifest.json` from the new logo asset.

**Why:** Browser tabs currently show a blank/default icon, and there's no manifest for "Add to Home Screen." Small but real "looks unfinished" signal for any visitor with several tabs open.

**Context:** Deferred out of the logo/preloader round only because the logo source file wasn't in hand at plan time. Once `public/images/logo.png` (transparent, QA'd) exists from that work, this is a near-mechanical follow-up — generate icon sizes from it, add `app/icon.png` / `app/apple-icon.png` (Next.js file-based convention) and a `manifest.json`.

**Effort:** S
**Priority:** P1
**Depends on:** Logo integration (transparent `public/images/logo.png` must exist first)

### Privacy Policy / Terms page

**What:** Add a Privacy Policy and Terms of Service page.

**Why:** Borderline expected for any site collecting even localStorage-based order lists and linking out to SMS (`sms:` links in the order-ahead flow). Currently nothing exists beyond the footer's copyright line.

**Context:** The order-list feature (`lib/order-context.tsx`) persists to `localStorage` and the order page builds `sms:`/`tel:` links from it — no server-side data collection, but a policy page is still the expected baseline for a commerce-adjacent site. Should live at `/privacy` and `/terms` (or one combined `/legal` page), linked from the footer.

**Effort:** S-M
**Priority:** P2
**Depends on:** None

### Add a test framework to the project

**What:** Introduce an automated test framework (unit + basic E2E) — currently zero automated coverage exists anywhere in the codebase.

**Why:** Every fix in the logo/preloader round (storage try/catch, image `onError` fallback, GSAP failsafe timeout, AgeGate/Preloader focus-trap sequencing) is currently verified by hand only. Real risk of silent regression on any of these on a future edit.

**Context:** This is a Next.js 15 App Router / TypeScript / Tailwind v4 static-export site with no backend (no DB, no auth, no API routes) — so the test surface is client-side component/interaction tests plus maybe a handful of E2E smoke tests (does the order flow work, does the age gate block correctly, does the preloader fail gracefully). Framework choice (Vitest + Testing Library is the natural fit given the stack; Playwright for E2E) and CI wiring are real, standalone scope — not a fit to bundle into a feature round.

**Effort:** L (human) → M (with CC + gstack)
**Priority:** P2
**Depends on:** None

## Completed
