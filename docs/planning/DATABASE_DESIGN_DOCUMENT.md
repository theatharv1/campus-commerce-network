# CCN — Database Design Document

_Stage 7 · Chief Database Architect · PostgreSQL/Supabase · v1.0_

## 1. Philosophy & Overview

Why Postgres/Supabase: ACID, 3NF, row-locking (double-sell), PostGIS radius discovery, RLS
kernel authZ, full-text search; Supabase packages Auth/Realtime/Storage. Normalized, UUID PKs,
FKs, soft-delete, geospatial+btree indexing. Money = exact decimals; timestamps = timestamptz.

## 2. Entity Inventory (MVP)

colleges, users, verification_documents, categories, listings, listing_images, favorites, chats,
messages, orders, payments, deliveries, reviews, ambassadors, referrals, reports, suspensions,
audit_log, notifications. Rider identity external (Spynzo) — opaque ref on deliveries (PENDING).

## 3. Table Specifications

Each table specified column-by-column (type/constraints/notes) — see repo Stage-7 source.
Highlights: users.verification_status enum + role enum + reputation_score; verification_documents
(private bucket ref, document_hash unique, review_status); listings (status enum, condition enum,
geography point, search_vector, delivery_available); orders (fulfillment_type, status enum,
partial-unique non-terminal per listing); payments (purpose=delivery_fee, idempotency_key unique);
deliveries (provider, external_ref, status enum, otp hashes); reviews (unique order_id+reviewer);
audit_log (append-only).

## 4. Relationships, Keys, Indexes, Constraints

UUID PKs; college 1–N users/listings; listing 1–N images/chats; order 1–1 delivery, 1–N payments,
1–N reviews. Double-sell guard = partial unique on orders(listing_id) non-terminal + row lock.
Indexes: btree FKs, GiST geography (radius), GIN search_vector, composite active-feed, partial
unique orders. 3NF; only denormalization = listings.college_id/location from seller campus.

## 5. Transactions & Concurrency

Order creation = single transaction (lock listing → assert active → reserve → insert order).
Idempotent payment capture. Compensating refunds. Delivery transitions one-directional;
condition mismatch → halted. Read-committed + explicit row locks.

## 6. Security (RLS, Roles, Encryption)

RLS on every user-data table (primary boundary). Policy matrix per table. DB roles mirror RBAC +
service role for system transitions. TLS in transit; managed at-rest; ID docs in most-restricted
private bucket; OTPs hashed; no secrets in DB.

## 7. Performance & Storage

GiST radius + composite active-feed; Redis hot-cache at tier; cursor pagination; media/docs as
references (public WebP bucket vs private ID bucket); materialized views at Year-2.

## 8. Migration Strategy

Versioned forward-only, backward-compatible (additive→backfill→constrain), zero-downtime; RLS &
indexes migration-managed; idempotent seeds (colleges, categories).

## 9. Backup/Recovery & Monitoring

Managed daily backups + PITR (MVP); cross-region at scale; slow-query/index/replication
monitoring; dead-letter/refund-queue depth + RLS-denied spikes surfaced.

## 10. Mermaid ER Diagram — full erDiagram in Stage-7 source (colleges/users/listings/orders/

deliveries/payments/reviews/etc.).

## 11. Future Evolution

Escrow (payments.purpose extends + escrow_holds), rentals, swaps (listings.swap_open exists),
wishlists, community (isolated), PostGIS scale (indexes present), analytics (replicas + MVs),
chat migration (messages append-optimized, chats stays relational).
