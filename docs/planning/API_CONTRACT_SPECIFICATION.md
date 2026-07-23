# CCN — API Contract Specification

_Stage 8 · Chief API Architect · OpenAPI-3.1-aligned · v1.1 (AMEND-001 full surface)_

## 1. Philosophy & Naming

REST, noun-based plural resources under /api/v1; no verbs in paths; cursor pagination only;
standard envelope; Idempotency-Key on money/creation; snake_case; zero-trust validation; the
generated OpenAPI doc is the single binding source.

## 2. Auth & Authorization

Bearer JWT (~15m) + refresh endpoint; refresh token in keychain; server revocation. RLS primary
authZ + RBAC. Verification gate on transactional routes; Ride Sharing requires Level-2.

## 3. Standard Envelope & Error Codes

{status, data, metadata:{next_cursor}, error:{code,message,details}}. HTTP 200/201/202/204/400/
401/403/404/409/422/429/500. Stable codes: validation_error, not_verified, already_sold,
duplicate_request, payment_failed, delivery_unavailable, no_rider_available, condition_mismatch,
ride_full, content_hidden, claim_denied, ai_unavailable, rate_limited, suspended_account, etc.

## 4. Endpoint Specs by Domain

[MVP] Auth/Verification · Reference (colleges/categories) · Profile/Reputation · Marketplace
(listings) · Discovery/Search · Favorites · Chat · Orders · Payments (delivery-fee; escrow
reserved+gated) · Delivery (provider-agnostic, PENDING Spynzo) · Reviews · Ambassador · Admin/
Moderation · Notifications · Analytics (admin subset).
[V1] Swap, Wishlists. [V2] Rentals, AI (cold-start gated). [V3] Rides (Level-2 + split-fare
escrow gated), Community, Notes/Academic Exchange (pre-signed upload, free/paid unlock),
Lost & Found (AI matching, private claim Q&A). Reserved/gated routes return 404 until activated.

## 5. Pagination & Rate Limiting

Cursor-based (?cursor=&limit=, metadata.next_cursor). Per-identity/IP token buckets; 429 +
Retry-After; payload-size limits.

## 6. Webhooks

Signature-verified, idempotent, dead-letter. /webhooks/payments (authoritative payment truth);
/webhooks/delivery (PENDING Spynzo, provider-agnostic); /webhooks/storage [V3].

## 7. Security & Versioning

TLS+cert pinning, Bearer JWT+revocation, RLS re-asserted, verification/Level-2 gates, ownership
checks, idempotency, rate/size limits, signature-verified webhooks, sanitized errors, deep-link
schema validation, no client secrets. URI-versioned /api/v1; breaking → /api/v2; OpenAPI
regenerated to prevent drift.

## 8. OpenAPI 3.1 Examples — Envelope schema; POST /orders (Idempotency-Key, 201/409/403);

GET /discovery (scope/radius/filters/cursor); POST /rides/{id}/requests (V3, 404 until active).

## 9. Testing Guidelines

Contract tests vs OpenAPI; authZ/RLS-bypass; idempotency; concurrency (one 201 + one 409
already_sold); webhook signature/dead-letter; phase-gating 404; cursor pagination. Typed clients
generated from the document; no hand-rolled shapes.

**AMEND-001:** full long-term surface contracted; escrow/split-fare (OQ3), delivery webhook
shape (Spynzo OQ1/2), and AI pricing (needs history) are forward contracts, not build
authorizations.
