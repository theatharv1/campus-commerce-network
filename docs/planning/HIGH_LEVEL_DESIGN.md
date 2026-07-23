# CCN — High Level Design
*Stage 5 · Chief Software Architect · v1.0*

## 1. Goals & Context
Trustworthy/correct on money/identity/delivery; cheap at single-cluster; extractable to
services; HA & horizontally scalable by structure; cost-efficient (managed-first). Stance:
modular monolith on Supabase, clean domain boundaries. Reject microservices launch as
over-engineering.

## 2. Overall Architecture & Modules
Layered clean architecture + feature/domain modularity. Domains: Identity & Trust, Marketplace,
Discovery, Chat, Orders, Logistics (adapter), Payments, Reputation, Ambassador, Admin/T&S,
Notifications. Frontend feature-isolated; admin console separate; RLS primary authZ.

## 3. Communication & Diagrams
Sync request path (HTTPS→authZ RLS→service→Postgres); async/eventful (queue→worker→
dead-letter, introduced at tier); realtime (chat presence, rider GPS, push-on-DB-change; media
never over socket). Inter-college transaction sequence documented.

## 4. Deployment & Infrastructure
MVP: Cloudflare (DNS/WAF/CDN/DDoS) + Supabase (Postgres/Auth/Realtime/Storage/Edge Functions) +
object storage/CDN + external adapters + Sentry. Envs dev/staging/prod. GitHub Actions,
blue-green, OTA. DR: managed backups + PITR; multi-AZ/K8s deferred.

## 5. Scalability & Caching
Stateless + Postgres SoT + clean boundaries. Caching tiers: client (MMKV/query cache), CDN/edge,
Redis (from ~1k tier), DB (PostGIS at ~10k). Cursor pagination only. Logistics/Payments first
extraction candidates.

## 6. Realtime & Failure Handling
Supabase Realtime at MVP; dedicated WS gateway deferred. Offline-first mutation queue. Fail-safe
deny-by-default; idempotency; condition-mismatch halts; no-rider fallback; dead-letter; graceful
degradation; global error boundary.

## 7. Security & Observability
Network (WAF/TLS/cert-pinning/CORS/rate-limits) · app/session (short JWT + keychain refresh +
blocklist) · authZ (RLS primary + RBAC) · data (segregated buckets, biometric gate) · input
validation · DPDP-ready ID handling (PENDING OQ10). Observability: Sentry, correlation-id
tracing, immutable audit, admin metrics.

## 8. Performance Goals — TTI<2s, 60fps, discovery p95 sub-second, ≥99.5% availability,
offline resilience, cursor pagination. Cost-efficiency via managed primitives.

## 9. ADRs
ADR-101 modular monolith over microservices · ADR-102 managed-first (Supabase+Cloudflare) ·
ADR-103 authZ at DB (RLS-primary) · ADR-104 logistics as provider-agnostic abstraction ·
ADR-105 first extractions Logistics+Payments · ADR-106 progressive Redis/realtime/queues ·
ADR-107 defer multi-region/AZ/K8s · ADR-108 escrow excluded until legally cleared.

## 10. Future Evolution
1k–10k activate Redis/PostGIS; 100k replicas + extract Logistics/Payments; 1M extract Chat +
regional; 10M multi-region + financial layer. Invariant: stateless, Postgres SoT, idempotent,
provider-agnostic logistics, clean boundaries.
