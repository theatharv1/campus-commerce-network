# The CCN Engineering Bible

_Stage 2 · CTO & Principal Software Architect · v1.0_

> The constitution. Every feature, service, table, screen, test, and PR must conform.
> When this Bible and any other artifact disagree, this Bible wins — until amended.

## 1. Project Identity

**Vision:** the trusted operating system for student commerce in India — verified students
buy, sell, swap, rent, and receive goods across nearby campuses.
**Mission:** solve transaction completion (the 80%) via verified identity + inter-college
discovery + real delivery (Spynzo).
**Values:** trust is the product; ship the wedge not the super-app; correctness over
cleverness on money/identity/delivery; boring durable tech; operability from day one.
**Objectives:** Year 1 ~20k students/10 colleges; Year 2 ~150k/100 colleges. A modular
monolith that is trustworthy, cheap at 5-college scale, and extractable into services later.
**Success metric:** North Star = Completed Student Transactions.

## 2. Engineering Philosophy

Security & correctness first · Simplicity (KISS) & YAGNI (blueprints are over-built for MVP;
build simplest thing that ships the wedge on a stack that grows) · Maintainability &
readability · Scalability by structure not premature optimization · Reliability & operability
(observable, idempotent, fail-safe) · Testability · Perceived performance · Developer experience.

## 3. Architecture Principles

Layered/Clean Architecture (backend: transport→logic→data, deps inward) · Feature-based
structure (frontend, features never cross-import) · DDD lightly (organize by domain) · SOLID
(esp. Dependency Inversion) · DRY with a limit (eliminate duplicate knowledge, wait for 3rd
occurrence) · KISS/YAGNI as tie-breakers · Dependency Injection · Modularity & strict
boundaries. Conflict order: security/correctness > simplicity > maintainability > rest.

## 4. Technology Stack

Frontend: React Native + Expo · TypeScript strict · NativeWind · Zustand (client state) ·
TanStack Query (server state) · MMKV (persistence; refresh token in keychain/keystore, NOT
MMKV) · FlashList · Reanimated + Gesture Handler · React Navigation · Zod.
Backend: Supabase (Postgres/Auth/Realtime/Storage/Edge Functions) as MVP foundation →
dedicated NestJS/Node at Year-2 scale (Django rejected — DL-002) · PostgreSQL + PostGIS ·
Redis (activated at tier) · Chat persistence = PostgreSQL for MVP (DL-003) · Razorpay · Google
Maps/Mapbox · Spynzo (provider-agnostic logistics interface) · FCM/APNs · Cloudflare/Supabase
Storage/S3 · Sentry · GitHub Actions.

> Everything permitted; not everything needed at launch. Components activate per §9 tier.

## 5. Project Standards

Frontend by feature; backend by domain; within each, group by responsibility. No cross-feature
imports; no domain reaching into another's internals. Names describe intent. Imports flow one
direction (UI→logic→data→infra). `shared` holds only business-logic-free primitives.

## 6. Coding Philosophy

Functions do one thing; small units; low complexity. Errors fail safe/deny-by-default on
money/identity/delivery; user-facing errors sanitized, full detail logged. Structured, leveled,
correlation-ID logs; never log secrets/PII/ID docs. Comments explain why not what. Reviews
check correctness→security→boundaries→testability→readability.

## 7. Development Workflow

Trunk-based, short-lived branches. Conventional Commits. Small focused PRs, ≥1 review, no
self-merge, branch protection on main. Definition of Done. SemVer + changelog from commits;
blue-green/staged rollout + Expo OTA.

## 8. Quality, Security & Performance

Testing pyramid 60/30/10; onboarding/escrow/delivery = mandatory E2E. Auth: 15m access in
memory + 7d refresh in keychain/keystore + server revocation. AuthZ: RLS primary boundary +
RBAC roles. Validate every input (Zod). Secrets never in repo/client. TLS + cert pinning +
biometric gate for money/identity. Perf: <2s TTI, 60fps, skeletons not spinners, offline-first,
cursor pagination only.

## 9. Scalability Standards

100 → 1k → 10k → 100k → 1M → 10M tiers; activate a component only at the tier that needs it.
Invariant: stateless services, Postgres source of truth, idempotent money/delivery ops, clean
boundaries so scaling is lift-and-shift.

## 10. Documentation Standards & Decision Log

Every feature documents purpose, boundaries, data ownership, failure modes, security, tests.
ADRs immutable once approved.
DL-001 product name (PENDING OQ8) · DL-002 Supabase→NestJS, Django rejected · DL-003 chat in
Postgres · DL-004 logistics as abstraction · DL-005 escrow gated on legality · DL-006 component
activation by tier.

## 11. AI Collaboration Rules

Read this Bible first; respect locked decisions; don't invent unknowns (stop & ask); don't
duplicate code; honor boundaries; security non-negotiable; test what you write; small
reviewable changes; surface tradeoffs; stay in scope.

## 12. Engineering Commandments (32)

Trust is the product · security/correctness > speed · ship the wedge · simplicity earned ·
YAGNI beats completeness · TS everywhere · validate every input · money/identity/delivery fail
safe · idempotent retries · no secrets in repo/client · refresh token in keychain not MMKV ·
authZ at the database (RLS) · never log secrets/PII · UI dumb, logic in hooks · no cross-feature
imports · data layer only touches DB/SDKs · hard-to-test = wrong design · critical paths need
E2E · cursor pagination only · no spinners/white screens · offline-first · delivery is an
abstraction · don't build escrow until legal · activate components at their tier · prefer
duplication over wrong abstraction · names state intent · comments explain why · small PRs ·
record decisions as ADRs · stop and ask when unclear · nothing ships unobservable · this Bible
outranks habit.
