# CCN — Low Level Design
*Stage 6 · Principal Mobile/Backend Architect · v1.0*

## 1. Overview & App Breakdown
Predictable implementation via fixed components/services/flows/rules/edge-cases. Three surfaces:
mobile app (dumb UI + hooks + query cache + offline), admin console, backend modular monolith.

## 2. Module Design
Identity & Trust (root; no transaction without verified) · Marketplace (listing lifecycle
draft→active→reserved→sold→hidden) · Discovery (never returns sold/hidden) · Chat (participant-
only, relational) · Orders (atomic reservation, double-sell prevention, one-way status) ·
Logistics (delivery lifecycle, OTP both ends, provider-agnostic) · Payments (delivery-fee only,
idempotent) · Reputation (one rating/party/order) · Ambassador · Admin/T&S (audit-logged) ·
Notifications (no PII).

## 3. Component Design (Frontend)
Shared atoms (Button/Card/Avatar/Badge/PriceTag/Skeleton…). Features: Auth/Verification,
Marketplace, Chat, Orders/Delivery, Profile/Reputation, Ambassador, Admin. Rules: dumb UI, logic
in hooks, virtualized lists, skeletons, haptics, cached images.

## 4. Service Design (Backend)
Auth/Verification, Listing, Discovery, Chat, Order (atomic orchestrator), Logistics (adapter),
Payment (delivery-fee), Reputation, Ambassador, Admin/Moderation, Notification. DI; no
cross-domain data access; effects flow through OrderService or events.

## 5. Business Logic Flows & State
State machines: Verification (unverified→pending→verified|rejected), Listing, Order, Delivery.
Client state: server state (TanStack Query), global (Zustand), local (RHF/useState), persistent
(MMKV; refresh token in keychain). Offline: cache reads, queue writes, idempotent flush.

## 6. Navigation, Errors, Validation, Permissions
Guarded flows (Splash→Onboarding→SignIn→CampusSelect→IdUpload→Verify→Tabs; modals overlay).
Auth guard, deep-link Zod validation. Layered error handling; fail-safe money/identity/delivery.
Validation rules per field. Permissions matrix (RLS primary + RBAC) across roles.

## 7. Diagrams — Create Listing, Buy-with-Delivery, Verification activity, Discovery interaction.

## 8. Edge Cases
Sold mid-negotiation; simultaneous checkout (atomic); payment success/order fail (compensating
refund); payment retry (idempotent); no rider; pickup mismatch; failed delivery; connectivity
drop; verification rejected; suspended user; retaliatory rating; empty discovery; deep link to
removed item; blocked user.

## 9. Performance, Security & Extensibility
Virtualized lists, cursor pagination, prefetch, skeletons, granular selectors, UI-thread
animation. RLS primary, validate-at-edge, keychain tokens, biometric gate, sanitized errors,
audit. Seams: logistics adapter, escrow-as-added-flow, PostGIS activation, chat migration,
new isolated feature domains.
