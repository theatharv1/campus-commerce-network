# CCN — Software Requirements Specification
*Stage 4 · Senior Systems Analyst & QA Architect · IEEE-29148-style · v1.0*

## 1. Introduction
Purpose: complete FR/NFR for MVP so architecture can begin. Scope: Verification & Trust,
Marketplace, Discovery, Chat, Delivery, Delivery-Fee Payments, Ratings, Ambassador, Admin/T&S.
Deferred modules out of scope. Assumptions A1–A6 (cluster density, delivery-fee willingness,
verification tolerance, Spynzo coverage [PENDING], team/runway [PENDING], launch timing
[PENDING]). Constraints: mobile-first, delivery-fee-only payments, verification-gated,
DPDP-bound, locked stack/architecture.

## 2. System Overview
Mobile app + backend platform + admin console. Integrations: delivery (Spynzo, PENDING),
payments, maps, notifications, identity, storage/CDN, observability.

## 3. User Classes
Unverified (read-only) · Verified Student (full) · Buyer/Seller (contextual) · Delivery Partner
(PENDING) · Ambassador · Moderator · Admin/SuperAdmin. RLS-enforced.

## 4. System Features
Formal specs (actors/pre-post/behavior/rules/errors) for Verification, Marketplace, Discovery,
Chat, Delivery, Payments, Ratings, Ambassador, Admin.

## 5. Functional Requirements (FR-001…FR-062)
Auth/Verification FR-001–010 · Marketplace FR-011–018 · Discovery FR-019–024 · Chat FR-025–029
· Delivery FR-030–039 · Payments FR-040–044 · Ratings FR-045–048 · Ambassador FR-049–051 ·
Admin FR-052–057 · Cross-cutting FR-058–062 (validate inputs, fail-safe, offline-first, push,
verified badges).

## 6. Non-Functional Requirements (NFR-001…NFR-024)
Performance (TTI<2s, 60fps, skeletons, sub-second discovery p95) · Availability (offline-first,
idempotent flush, ≥99.5%) · Security (TLS+cert pinning, keychain refresh token, RLS, biometric
gate, no client secrets, rate limits, DPDP PENDING) · Accessibility (SR labels, contrast) ·
Observability (Sentry, correlation ids, immutable audit) · Scalability (unchanged core flows,
cursor pagination).

## 7. Business Rules (BR-001…BR-010)
Verification-gated · duplicate rejection · owner-only listing · rider condition-check ·
one-rating-per-order · report auto-hide · suspension + appeal · free basic trade · prohibited
items · dispute/returns policy owed.

## 8. Use Cases
UC-01 Verify · UC-02 Sell · UC-03 Buy · UC-04 Inter-College Delivery · UC-05 Report & Suspend.

## 9. User Stories (US-01…US-10) with acceptance criteria.

## 10. Constraints & External Interfaces
Mobile-first; DPDP + payments/escrow regulatory; locked stack; identity/payments/maps/
notifications/storage/delivery(Spynzo) interfaces; AI excluded at MVP.

## 11. Security/Performance/Reliability — per §6, plus fail-safe, idempotency, audit, biometric.

## 12. Testing Requirements
TR-001 unit (~60%) · TR-002 integration (~30%) · TR-003 E2E (~10%, onboarding/buy-sell-delivery/
payment mandatory) · TR-004 regression · TR-005 security · TR-006 a11y · TR-007 performance ·
TR-008 acceptance.

## 13. Traceability Matrix — Business Goal → Feature → Requirement → AC → Test Case.

## 14. MoSCoW (MVP)
Must: verification, marketplace, discovery, chat, delivery, payments, ratings, admin, security/
offline. Should: ambassador, nearby-expansion, scheduled delivery. Could: favorites/quick-reply/
admin analytics. Won't (MVP): escrow, AI, rentals, swap, wishlists, community, move-in/out,
services, housing, events, rides, lost & found, Aadhaar, multi-city.

## 15. Open Questions OQ1–OQ13 (Spynzo, escrow, verification, MVP scope, moderation, dispute,
analytics, NFR budgets, DPDP, chat storage, team, launch timing).
