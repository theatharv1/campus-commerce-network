# CCN — Frontend Architecture
*Stage 9 · Principal React Native Architect · v1.0*

## 1. Vision & Tech Decisions
Instant, trustworthy, offline-resilient app. Governing rule: strict inversion of control (dumb
UI, logic in hooks/stores). Locked stack: RN+Expo, TS strict, NativeWind, Zustand, TanStack
Query, MMKV, FlashList, Reanimated+Gesture Handler, React Navigation, Zod.

## 2. Application Architecture
Layered feature-first: Presentation → Feature/Container → Domain logic → State → Data access.
Deps downward only. Three consumers (student app, admin console) on one API contract.

## 3. Feature Architecture
Feature isolation is a hard boundary (no cross-feature imports). MVP features: Auth/Verification,
Marketplace, Discovery/Search, Chat, Orders/Delivery, Payments, Profile/Reputation, Ambassador,
Admin. Shared foundation = business-logic-free primitives.

## 4. State Management
Server state → TanStack Query (auto-refetch on focus, invalidate on mutation, cursor pagination,
optimistic favorite/message). Global → Zustand (session, verification, campus, theme, filters,
unread). Local → useState + RHF. Persistent → MMKV (refresh token in keychain, NOT MMKV).

## 5. Navigation
Guarded React Navigation flows; auth/verification guard; deep links Zod-validated; modals overlay
without unmounting; typed params.

## 6. Design System & Components
Atoms→Molecules→Organisms. Design tokens drive NativeWind; theme from MMKV→Zustand→NativeWind
(avoid Context repaints). Dumb components, virtualized lists, skeletons, haptics, cached images,
UI-thread animation.

## 7. Form Architecture
React Hook Form + Zod (single validation source shared with API contract); inline errors.

## 8. API Consumption
Typed client generated from OpenAPI; all reads/writes via TanStack Query; centralized envelope +
error mapping; one auth/refresh interceptor; idempotency keys on money/order; prefetch on intent;
realtime via isolated hooks (media never over socket).

## 9. Performance — virtualized lists, cursor pagination, skeletons, granular selectors + memo,
WebP image caching, UI-thread animation, prefetch, MMKV instant boot. Profiler: zero renders>16ms.

## 10. Offline — persisted query cache reads; persistent mutation queue idempotent flush; server
authoritative on money/order; optimistic UI with silent rollback; tracking degrades to polling.

## 11. Accessibility & Security — SR labels + contrast/touch tokens; keychain tokens, no client
secrets, TLS+cert pinning, biometric gate, Zod input validation, sanitized errors, RLS the real
boundary.

## 12. Error Handling & Logging — layered error boundaries; typed error states; fail-safe money/
identity/delivery; Sentry with correlation id; never log tokens/PII.

## 13. Testing & Standards — pyramid; feature-isolation lint; typed client only; cursor
pagination; skeletons; small PRs; AI reads Bible + API contract first.

## 14. Future Evolution — new features attach as isolated modules; design system scales under
fixed tokens; realtime scale behind hooks; AI via /ai hooks with graceful degradation.
