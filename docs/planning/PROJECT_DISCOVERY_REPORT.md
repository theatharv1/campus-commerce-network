# CCN — Technical Discovery Report

_Prepared by: Technical Co-Founder / CTO · Stage 1_

> Naming note: the product appears as Campusfrnd, CampusCircle, and Campus Commerce
> Network across source docs. **CCN** is the settled name.

## 1. Executive Understanding

**Problem.** Students transact constantly (books, cycles, electronics, furniture, hostel
essentials) through WhatsApp/Telegram/Facebook/OLX. All fail on three axes: no trust
(scams, ghosting), no liquidity beyond one campus, no way to complete a transaction when
buyer and seller can't meet. The marketplace listing is ~20% of the problem; the other
80% is transaction completion — trust, meeting, transport, verification.

**Why the startup exists.** Every competitor (Sloop/ex-Swappr, CampusSwap, CampusKart,
HostelBucket, rumie) optimizes for same-campus, meet-in-person trading. The gap is
inter-college discovery + verified delivery. CCN's unlock: the founder runs **Spynzo**, a
hyperlocal delivery operation — the delivery layer is an existing asset.

**Users.** Student Buyer, Seller, Renter, Service Provider, Campus Ambassador, Admin.

**Why they'd switch:** verified identity removes scam risk; reach across nearby colleges;
delivery removes meet-up coordination; escrow protects higher-value items.

**Defensibility:** (1) logistics (Spynzo), (2) trust graph (verified identity + reputation),
(3) liquidity density per cluster.

**Long-term value:** "operating system for student life" — resale → rentals → move-in/out
→ storage → roommates/housing → gigs → events → student credit profile.

**CTO read:** the wedge and Spynzo tie-in are real. Biggest risk: docs describe a 15-module
super-app while the business needs to win one seasonal use-case (move-out resale) in one
cluster first. Scope discipline is the #1 execution risk.

## 2. Business Analysis

**Audience:** verified students, Bengaluru clusters (South Bengaluru + Whitefield),
~80k–100k beachhead.
**Behavior rhythm:** daily (deals/rides/community), weekly (gigs/notes/events), seasonal
(move-out supply Apr–Jun, move-in demand Jul–Aug, semester start, placements).
**Growth:** one college first, one problem ("sell hostel items before graduation"), seed
seniors (500 listings pre-launch), acquire freshers, one ambassador/college, cluster-by-cluster.
**Revenue (staged):** free → delivery fees (₹39–99) → escrow fee (1–2%) → featured listings
→ merchant ads → services commission.
**Network effects:** liquidity, trust, logistics density loops.
**Retention weakness:** pure resale is seasonal/transactional; MVP has a retention problem by
design; daily-use layers are Phase 2–4.
**SWOT:** Strengths (Spynzo, wedge, verified trust, seasonality, founder domain). Weaknesses
(cold-start liquidity, thin MVP retention, huge scope, brand inconsistency, multi-sided
complexity). Opportunities (inter-college gap, rentals ignored, move-in/out engine, expansion).
Threats (funded competitor Sloop, WhatsApp/OLX inertia, trust/fraud incidents, delivery
economics, payments regulation).

## 3. Feature Analysis (15 modules)

Verification & Trust (P0) · Marketplace Buy/Sell (P0) · Swap/Barter (P2) · Rentals (P2/P3) ·
Inter-College Discovery (P0/P1) · Logistics & Delivery (P0/P1) · Escrow & Payments (P1/P3) ·
AI Layer (P2) · Move-In/Move-Out (P1) · Wishlists/Demand (P2) · Community (P3) ·
Student Services (P4) · Housing (P4) · Events/Tickets (P4) · Campus Ambassador (P1) · Admin (P0).
**Tension:** the documented MVP is over-scoped vs. the go-to-market thesis (resale wedge).

## 4. Engineering Analysis

Frontend (High): RN+Expo, TS+NativeWind, Zustand+TanStack Query, MMKV, FlashList, Reanimated.
Backend (Very High): Supabase/PostgreSQL+PostGIS, Edge Functions/Node→NestJS, Redis, clean
architecture. DB (High): 3NF, PostGIS, RLS, row-locking. Realtime (High), AI (High, deferrable),
Infra (High), Security (High), Scalability (designed), Testing (60/30/10), Deployment (defined).
**Summary:** engineering thinking is mature; blueprints are enterprise-grade (150k users)
and over-built for a 5-college MVP. Build the simplest thing that ships the wedge on a stack
that grows into that design.

## 5. Architecture Readiness — Known vs Missing

Known: vision, market, user types, feature set, journeys, wireframes, stacks, data entities,
security/testing/deployment strategy, revenue model, GTM.
Missing/blocking: Spynzo integration contract; verification decision logic; escrow legal model;
delivery unit economics; chat persistence decision; launch-scale NFR targets; content
moderation policy; DPDP data-privacy model.

## 6. Missing Documentation (before build)

Spynzo Integration Spec; Trust & Safety/Verification Policy; Payments & Escrow Operating Model;
Delivery/Marketplace Unit Economics; Data Privacy & Compliance (DPDP); Content Moderation
Policy; consolidated NFRs per tier; Brand/Naming decision; Analytics & Metrics doc; Dispute
Resolution & Returns; Ambassador Program doc; API Contract.

## 7. Technical Risks + Mitigations

Cold-start liquidity (seed + ambassadors + one college); over-scope (enforce tight MVP);
Spynzo single-point dependency (abstraction + courier fallback); architecture over-build (defer);
PII/ID security (bucket segregation, DPDP); realtime+geo scaling (Redis geo-cache + replicas);
escrow licensing (legal review, launch delivery-fee-only); trust collapse (verification,
in-app chat, rider condition-check, escrow); fraud (dup-ID rejection, tamper detection);
delivery condition disputes (pickup verification + returns policy); payment double-charge
(idempotency + webhook signatures); verification friction vs safety (manual review); AI
cold-start (defer).

## 8. Scalability Vision

100 (manual, monolith) → 1k (semi-auto, one cluster) → 10k (geo primary, Redis, Year-1) →
100k (replicas, realtime scaling, service extraction, Year-2) → 1M (microservices, multi-city)
→ 10M (multi-region, financial layer). Docs specify up to ~150k; beyond is directional.

## 9. Project Development Strategy

Phase 0 (Foundations & decisions) → Phase 1 (Core wedge MVP: verification, buy/sell, chat,
Spynzo delivery, ratings, ambassador, admin) → Phase 2 (retention) → Phase 3 (network effects
& trust) → Phase 4 (moat/ecosystem). Insert Phase 0 explicitly.

## 10. Open Questions (must resolve before dev)

OQ1/2 Spynzo API + delivery economics; OQ3 escrow legality; OQ4 verification bar; OQ5 MVP
scope; OQ6 chat storage; OQ7 backend runtime; OQ8 brand/name + analytics taxonomy; OQ9 NFR
budgets; OQ10 DPDP/Aadhaar; OQ11 chat storage confirm; OQ12 team/runway; OQ13 launch timing.

**Stop condition:** reviewed; the two load-bearing items are Spynzo reality (OQ1/2) and MVP
scope (OQ5).
