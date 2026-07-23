# CCN — Product Requirements Document
*Stage 3 · Product Manager & Founder · v1.0*

## 1. Executive Summary
Vision: trusted OS for student commerce in India. Differentiator: inter-college discovery +
verified delivery (Spynzo). TAM ~₹33,750 Cr; Bengaluru beachhead ~80k–100k.

## 2. Problem Statement
Trust failure, liquidity failure, completion failure, timing failure. Existing products are
"student OLX" — listings only, single-campus, manual meetup.

## 3. Personas
A Student Seller (senior exiting) · B Student Buyer (fresher/restocker) · C Student Renter ·
D Campus Ambassador (growth engine) · E Delivery Partner/Spynzo Rider (PENDING OQ1/2) ·
F Admin (T&S) · G Moderator.

## 4. Product Goals
Short (MVP): prove one transaction loop in one cluster. Mid (Year 1): 20k/10 colleges,
delivery economics proven. Long (Year 2+): 150k/100 colleges, retention + higher-trust features.

## 5. Core Principles
Trust before scale · convenience wins deals · affordability · speed & reliability · security &
privacy · community (long-term) · seasonality as a feature.

## 6. Feature Inventory (P0–P4)
M1 Verification & Trust (P0) · M2 Marketplace Buy/Sell (P0) · M3 Inter-College Discovery (P0/P1)
· M4 Chat (P0) · M5 Logistics & Delivery (P0/P1) · M6 Ratings (P0) · M7 Ambassador (P1) ·
M8 Admin/T&S (P0) · M9 Wishlists (P2) · M10 Swap (P2) · M11 Move-In/Out (P1/P2) · M12 Rentals
(P2/P3) · M13 Escrow & Payments (P1/P3, gated) · M14 AI (P2) · M15 Community (P3) · M16–18
Services/Housing/Events (P4). MVP is deliberately narrower than the full inventory.

## 7. User Journeys
J1 Registration & Verification · J2 Sell · J3 Buy · J4 Inter-College Delivery (moat) · J5 Swap
· J6 Rent · J7 Wishlist · J8 Community/Rides (out of MVP).

## 8. Functional Requirements
Verification, listings, discovery, chat, delivery, payments (delivery-fee), ratings, ambassador,
admin — each with inputs/outputs/validation/permissions/edge cases (no implementation).

## 9. Non-Functional Requirements
Perceived-instant UI, <2s TTI, 60fps, offline-first, verified-identity gating, encrypted
transport, DPDP (PENDING OQ10), fail-safe idempotent money/delivery.

## 10. Business Rules
Verification-gated transacting; duplicate rejection; owner-only listing mutation; rider
condition-check at pickup; one rating per party per completed transaction; report thresholds
auto-hide; suspension hides listings + appeal; basic trade free, convenience monetized; escrow
not offered until legally cleared; dispute/returns policy owed.

## 11. KPIs
North Star: Completed Student Transactions. + acquisition, liquidity, fulfillment, trust,
retention/health metrics.

## 12. Risks & Assumptions
Cold-start liquidity · over-scope vs capacity (OQ12) · Spynzo dependency (OQ1/2) · escrow
legality (OQ3) · retention weakness · trust collapse · compliance (OQ10) · launch timing (OQ13).

## 13. Roadmap
MVP (wedge) → V1 (retention: wishlist/deals/move-in-out/swap) → V2 (escrow/rentals/AI/community)
→ Expansion (services/housing/events/wallet/multi-city).

## 14. Out of Scope (MVP)
Escrow, AI, rentals, swap, wishlists, community, move-in/out bundles, rides, lost & found,
services, housing, events, Aadhaar verification, multi-city.

## 15. Acceptance Criteria (per MVP module)
Defined per module (verification, listings, discovery, chat, delivery, payments, ratings,
ambassador, admin).
