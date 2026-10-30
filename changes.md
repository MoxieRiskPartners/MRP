# Site Content Changes — Staging Branch

**Branch:** `staging` (off `main`)
**Date:** 2026-10-28
**Status:** Uncommitted working-tree changes. Nothing committed or pushed.

All changes below are copy/content edits driven by client + beta-user feedback. No functionality, data structures, or styling logic were changed except where noted (hidden elements / removed display blocks). Underlying data (e.g. coverage amounts) was left in the files where only the on-screen display was removed, so changes are easily reversible.

---

## 1. Hero section (`src/LandingPages/Hero.tsx`)
- **Removed the right-side quote form** from the homepage hero (changed its container to `hidden`; form markup + logic left intact for easy restore).
- **Updated the hero description** from the long "Specialized commercial insurance for trucking, construction… Fast quotes and expedited service…" to simply: **"Specialized commercial insurance and risk management solutions."**
- **Removed the "24/7 Claims Support" stat** from the hero trust bar (now shows: 48 States, 100% Compliant).

## 2. "DOT compliance support" → "Risk Management support" rebrand
Client/beta-user concern: we shouldn't promise a compliance *service* we don't yet provide.
- `src/Files/comingsoon.tsx` — "DOT compliance support" → "Risk Management support"
- `src/LandingPages/Overview.tsx` — same
- `src/ServicesPages/motorTruckCargo.tsx` — special-features list: same

### DOT compliance → Risk Management Support (this session, additional)
- `src/app/layout.tsx` — SEO keyword "DOT compliance" → "Risk Management Support"; service-list item "DOT Compliance Services" → "Risk Management Support"
- `src/app/trucking-transportation/page.tsx` — descriptions: "…and DOT compliance" → "…and Risk Management Support"
- **FAQ answer trio kept in sync** ("essential for DOT compliance" → "essential for Risk Management Support"): `src/ServicesPages/commAuto.tsx`, `src/UtilityPages/faq.tsx`, `src/app/layout.tsx` (JSON-LD)

### DOT compliance *service promises* reworded (option B)
- `src/IndustriesPages/truckingTransportation.tsx` — card "DOT Compliance" / "Complete compliance support including BMC-91X filings and regulatory guidance" → **"Risk Management Support"** / "Risk management support tailored to your trucking operation's needs"
- `src/IndustriesPages/truckingTransportation.tsx` — "Get expert guidance on **DOT compliance**…" → "Get expert guidance on **Risk Management**…"
- `src/ServicesPages/commAuto.tsx` — benefit card "DOT Compliance" → "Risk Management Support" (+ dropped "for DOT compliance" tail); feature badge 'DOT Compliance' → 'Risk Management Support'
- `src/ServicesPages/coverage.tsx` — feature bullet 'DOT compliance for trucking' → 'Risk management support for trucking'

**Left as-is (factual product descriptions — insurance genuinely meets DOT requirements):** "DOT-compliant coverage/protection" on trucking/ownerOperator/motorTruckCargo/coverage, and "Get DOT Compliant" / "ensures DOT compliance" on commAuto.

## 3. Removed "24/7" / around-the-clock claims (site-wide)
- **"24/7 Available" badge** removed from 13 pages (industries + services + faq).
- **"Quick Response" badge** (email-card subtext) removed from the same 13 pages.
- **Footer** (`src/Components/footer.tsx`): removed "24/7 Support" trust badge; renamed nav link "24/7 Claims Support" → "Claims Support".
- **Claims page** (`src/UtilityPages/claims.tsx`): all "24/7" removed (headings, hotline, section comment, stat labels, "24/7/365"); "Round-the-clock…" → "Expert assistance…"; "Always available for urgent claims" → "Here to help with urgent claims".
- **Contact page** (`src/UtilityPages/contact.tsx`): all "24/7" removed (footer text, help box, "Report a claim 24/7").
- **comingsoon** (`src/Files/comingsoon.tsx`): removed "24/7 Claims Support" stat; "24/7 claims advocacy" → "dedicated claims advocacy"; "Fast quotes and expedited service" → "Specialized expertise and dedicated service".
- **callToAction** (`src/Components/callToAction.tsx`): "24/7" stat → "Expert"; "Fast quote turnaround time" → "Dedicated quote support"; "Fast Response" badge → "Dedicated Support".
- **coverage** (`src/ServicesPages/coverage.tsx`): two '24/7 claims support' → 'Claims support'; '24/7 Expert Support' → 'Expert Support'; heading "24/7 Support" → "Dedicated Support" (+ "Round-the-clock…always available" rewritten).
- **workersComp** (`src/ServicesPages/workersComp.tsx`): '24/7 Claims Support' → 'Claims Support'; "24/7 expert support" → "expert support"; "24/7 Claims Hotline" → "Claims Hotline"; "Immediate assistance available" → "Here to help with your claim".
- **manufacturing** (`src/IndustriesPages/manufacturing.tsx`): '24/7 claims support' → 'Claims support'; '24/7 hotline' → 'Dedicated hotline'.
- **truckingTransportation** (`src/IndustriesPages/truckingTransportation.tsx`): "Fast Service" → "Dedicated Service"; "Same-day certificates, instant filings, and 24/7 claims support" → "Certificates, filings, and claims support".
- **ownerOperator / motorTruckCargo**: '24/7 Claims Support' → 'Claims Support'.
- **Injury-reporting FAQ answers** (`workersComp.tsx`, `faq.tsx`): kept the "report within 24-48 hours" guidance; dropped only the trailing "24/7" ("We provide 24/7 claims support" → "We provide claims support").

## 4. Removed time commitments (1-hour guarantee, same-day, instant, fast response)
- **1-hour response guarantee** removed everywhere (`faq.tsx`, `claims.tsx`): FAQ wording softened; process step "Within 1 Hour" → "Promptly" (later reworked); "responds within 1 hour guaranteed" → "responds promptly"; hero "1-hour response guarantee" removed; feature "1-Hour Response" → "Rapid Response" → later "Dedicated Claims Team".
- **"rapid response"**: `claims.tsx` feature 'Rapid Response' → 'Dedicated Claims Team'; `contact.tsx` manufacturing footer "provides rapid response" → "provides dedicated support".
- **"within 24 hours"** contact/response promises softened (option A): `publicE.tsx` ("will be in touch shortly"), `contact.tsx` (thank-you + form intro reworded). Injury-reporting "within 24 hours" in `workersComp.tsx` kept.
- **serviceAreas** (`src/LandingPages/serviceAreas.tsx`): "Fast Quote Response"/"Quick turnaround…" → "Quote Assistance"/"Help with quotes and policy questions".
- **about** (`src/UtilityPages/about.tsx`): "fast responses" → "responsive service".
- **quote** (`src/UtilityPages/quote.tsx`): feature 'Fast Response Within Hours' → 'Dedicated Expert Support'.
- **commAuto** (`src/ServicesPages/commAuto.tsx`): "instant certificate issuance" → "certificate issuance".
- **"instant / same-day certificates"** FAQ trio synced (`faq.tsx`, `commAuto.tsx`, `ownerOperator.tsx`, + `layout.tsx` JSON-LD): "instant certificates" → "certificates of insurance"; "same-day coverage and instant certificates…submitted immediately" → "arrange coverage and provide certificates…submitted upon binding". Feature labels 'Instant Certificates' → 'Certificates of Insurance' (`commAuto.tsx`, `ownerOperator.tsx`).

## 5. SEO metadata cleanup (time/24/7 claims in search descriptions)
- `src/app/layout.tsx`, `src/app/page.tsx` — "Licensed nationwide with 24/7 support" → "expert support"; OG/Twitter "24/7 support" → "dedicated support".
- `src/app/file-claims/page.tsx` — titles "24/7 Claims Support" → "Claims Support"; descriptions "Access 24/7 claims support" → "Access claims support" (+ dropped "Fast and").
- `src/app/trucking-transportation/page.tsx` — "competitive quotes in 24 hours" → "competitive quotes".
- `src/app/quote-form/page.tsx` — "Same-day quotes available…" → "Quotes from A+ rated carriers" / "Backed by A+ rated carriers".
- `src/app/owner-operator/page.tsx` — "same-day coverage and instant certificates…submitted immediately" → "flexible coverage and certificates of insurance…handled upon binding".
- `src/app/contact-us/page.tsx` — "Fast response times, competitive rates…" → "Competitive rates and expert guidance…".

## 6. Claims page accuracy (`src/UtilityPages/claims.tsx`) — "we are the adjuster" fix
Beta user: we don't assign an adjuster who reviews the case — Moxie is the broker/advocate; the carrier's adjuster adjudicates.
- Process step 02: "Expert Assigned" / "adjuster reviews your case" → **"We Advocate for You"** / "Right Away" / "We report your claim and advocate with your carrier on your behalf".
- Process step 03: "Investigation" / "Immediate Start" / "Evidence gathering…" → **"Claim Review"** / "Ongoing" / "We help you gather documentation and keep your claim moving with the carrier".
- supportSteps #1 title "Instant Response" → "Responsive Support".
- supportSteps #2: "Specialized adjusters who understand your business…" → "Specialists who know your industry and advocate with your carrier on your behalf".
- claimsResources badge "Immediate Response" → "Dedicated Support".
- FAQ: "Industry-specialized adjusters…" → "Industry-specialized claims advocacy…".

## 7. Experience figure
- `src/LandingPages/Overview.tsx` — "over 25 years of combined experience" → **"over 45 years"**.
- `src/UtilityPages/about.tsx` — "over 26 years of combined industry experience" → **"over 45 years"**.

## 8. "And more" coverage messaging
- `src/ServicesPages/coverage.tsx` (`/coverage-options`) — intro subheading now adds "— and more. These are just some of the lines we write."
- `src/IndustriesPages/truckingTransportation.tsx` — "Comprehensive Insurance Solutions" intro → "…we provide coverage tailored to your trucking operation's unique needs. These are some of our most common coverages, and we write many more."
- `src/IndustriesPages/manufacturing.tsx` — "Choose Your Manufacturing Coverage" intro → "…tailored to your manufacturing operations. These are some of our most common coverages, and we write many more."
- `src/IndustriesPages/construction.tsx` — "Choose Your Construction Coverage" intro → "…Select a coverage type below… These are some of our most common coverages, and we write many more."

## 9. Removed displayed coverage-amount figures
Beta user: don't list specific "up to"/limit amounts on the coverage boxes.
- `src/IndustriesPages/construction.tsx` — removed the "Coverage: {amount}" badge in the coverage detail panel.
- `src/IndustriesPages/manufacturing.tsx` — same badge removed.
- `src/ServicesPages/motorTruckCargo.tsx` — same badge removed.
- `src/ServicesPages/coverage.tsx` — removed the entire "Coverage Amount" block from the detail modal.
- `src/ServicesPages/coverage.tsx` — cargo Overview reworded to drop hard figures: "…customizable limits from $100,000 to over $250,000 per load… up to $1M…" → "…with customizable limits tailored to your freight — and higher limits available for specialized cargo."
- *(Data values for `coverageAmount` left in the files — only the display was removed.)*

---

## Still open / not yet done (flagged during the session)
- Other "up to $" figures still present: motorTruckCargo "Included Coverage" sub-limits table ("Up to $10,000"/"Up to $5,000"); coverage.tsx feature bullets ("Umbrella policies up to $10M", "Higher limits available up to $1M"); motorTruckCargo:369 prose "broad form coverage up to $250,000".
- "And more" not yet added to: the *service* pages (ownerOperator, commAuto, physicaldamage, motorTruckCargo) coverage lists, nor the footer coverage column.
- `nonProfit.tsx` / `publicE.tsx` have **no** coverage-line list (only advisory services) — would need a list *added* to show "and more".
- Minor residual "immediate" in claims-page prose (lines ~203, ~339) left as acceptable/honest.
- The "+ And More" interactive tab idea for the construction coverage selector was NOT implemented (only the intro text was updated).

## Pre-existing (not from this session)
- `package-lock.json` — was already modified before the session.
- `src/IndustriesPages/truckingTransportation.tsx:127` "Risk Management support" in a feature list predates this session (file had uncommitted changes at start).
- Numerous unused-import lint warnings across files are pre-existing and were not introduced by these edits.
- `src/IndustriesPages/nonProfit.tsx` / `publicE.tsx` show as modified but only via the "within 24 hours" → "in touch shortly" edit (publicE) and no content edits (nonProfit may reflect prior/editor state).
