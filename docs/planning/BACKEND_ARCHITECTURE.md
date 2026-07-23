# CCN — Backend Architecture

_Stage 10 · Chief Backend Architect · v1.0_

## 1. Vision & Tech Decisions

"Why backend first": data integrity, trust, real-time fulfillment. Supabase foundation →
NestJS/Node at Year-2 (Django rejected, DL-002). Postgres+PostGIS SoT; Redis at tier; modular
monolith structured for extraction.

## 2. Layered Architecture

Transport → Service (pure logic, no HTTP/SQL) → Repository (only layer touching Postgres/Redis/
storage/SDKs). Deps inward; DI.

## 3. Service Architecture

Modular monolith, domain boundaries. Domains: Identity & Trust, Marketplace, Discovery, Chat,
Orders, Logistics (adapter), Payments, Reputation, Ambassador, Admin/T&S, Notifications. Cross-
domain effects via OrderService or events. Extraction seams: Logistics, Payments (then Chat).

## 4. Business Logic Strategy

OrderService = atomic transaction orchestrator (reserve listing under row lock, coordinate
Payment/Logistics, compensating refunds). Explicit one-directional state machines. Idempotency
first-class. Deny-by-default. Provider-agnostic Logistics (ADR-104). Escrow excluded (ADR-108).

## 5. Auth & Authorization

Supabase Auth issues short JWT + refresh; Redis session blocklist. RLS primary authZ backstop +
RBAC gate. Verification gate; Level-2 for rides. Service role for system transitions. Verification
pipeline consults an injected decision policy (criteria PENDING OQ4).

## 6. Database Interaction

Repository pattern DI; order creation single transaction + row lock (double-sell guard);
idempotent writes; GiST radius + composite feed indexes; cursor pagination; forward-only
backward-compatible migrations; no cross-domain joins.

## 7. Realtime — Supabase Realtime (chat presence/typing/receipts; rider GPS; push-on-DB-change;

media via pre-signed URL). Dedicated WS gateway deferred (ADR-106).

## 8. Background Processing — Redis/BullMQ at tier. Job typologies: transactional, heavy compute,

scheduled. Exponential backoff + dead-letter (zero silent failures).

## 9. Storage — bucket segregation (public profile/marketplace WebP; private ID docs; [V3] notes/

lost-found). Pre-signed direct-to-bucket upload; object-created events; OTPs hashed.

## 10. Caching — edge/CDN (MVP), Redis (from ~1k: geo-cache, blocklist, rate limit), Postgres SoT

- materialized views (Year-2); write-through + TTL invalidation.

## 11. Security — WAF/TLS/CORS/rate-limits; short JWT + secure refresh + blocklist; RLS-primary +

least-privilege roles; ID docs restricted bucket; hashed OTPs; validate inputs; signature-verify
webhooks; idempotency + immutable audit; DPDP-aligned (PENDING OQ10); escrow gated (OQ3).

## 12. Observability — Sentry across Edge/Node/DB; correlation-id tracing; structured logs (no

secrets/PII); immutable audit; admin ops signals (liquidity, delivery completion, dead-letter
depth, RLS-denied).

## 13. Performance — stateless services, Redis geo-cache, cursor pagination, GiST/GIN indexes,

replicas + MVs at Year-2, edge compute for light logic → Node clusters for heavy.

## 14. Error Handling — global handler (sanitized out, full traces in); fail-safe deny-by-default;

stable error codes; compensating transactions; dead-letter routing.

## 15. Testing & DevOps — pyramid with DI isolation; RLS-bypass/idempotency/concurrency/webhook

tests; GitHub Actions CI/CD, blue-green, secrets manager, migrations via CI, DR backups+PITR.

## 16. Scalability Roadmap — 100 monolith → 1k–10k Redis/PostGIS → 100k replicas + extract

Logistics/Payments → 1M extract Chat + regional → 10M multi-region + financial. Invariant:
stateless, Postgres SoT, idempotent, provider-agnostic logistics, clean boundaries.

## 17. ADRs & Standards

ADR-201 repository+DI sole data path · ADR-202 OrderService sole orchestrator · ADR-203 RLS
enforced backstop · ADR-204 webhooks authoritative + signature-verified · ADR-205 async/queue
at tier + dead-letter mandatory. Standards: clean layering, boundaries, deny-by-default,
idempotency, validate inputs, sign webhooks, no secret/PII logs, immutable audit, forward-only
migrations, small PRs.
