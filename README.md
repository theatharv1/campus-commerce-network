# Campus Commerce Network (CCN)

Monorepo for CCN — an inter-college, verified student commerce + logistics platform
for India (mobile-first, React Native + Expo; Supabase/PostgreSQL backend).

> Working product name is **CCN**; brand is pending (Discovery Report Open Question 8).
> This repository is the **platform foundation**. No business features (Auth, Marketplace,
> Orders, Payments, Delivery, Chat, etc.) are implemented yet — by design.

## Requirements

- Node.js `>= 22` (see `.nvmrc`)
- pnpm `>= 9` (`corepack enable` recommended)

## Setup

```sh
corepack enable
pnpm install
# mobile app (after Expo version reconcile):
cd apps/mobile && npx expo install --fix
```

## Scripts (root)

| Command | Purpose |
| --- | --- |
| `pnpm lint` / `pnpm lint:ci` | ESLint (zero-warning in CI) |
| `pnpm format:check` | Prettier check |
| `pnpm typecheck` / `pnpm typecheck:workspaces` | TypeScript |
| `pnpm test` | Turbo test |
| `pnpm build` | Turbo build |
| `pnpm deadcode` | knip |
| `pnpm audit` / `pnpm deps:dedupe` | supply-chain gates |
| `pnpm env:check` | env validation |
| `pnpm check` | lint + format + typecheck |

## Workspace layout

```
apps/
  mobile/           Expo / React Native app (Phase 2 · Stage 1 · Increment 1)
packages/
  types/            shared TypeScript types
  core/             framework-agnostic domain utilities
  api-client/       typed API client (from API contract)
  ui/               React Native design system
  config/           shared tsconfig + jest presets
config/             feature flags, observability schemas
docs/
  planning/         the locked Phase-1 engineering documents (Stages 1–12)
  incident/         runbook + postmortem templates
.github/workflows/  CI, security, release-please
.maestro/           mobile E2E (Maestro) scaffold
```

## Build / delivery chain (status)

**Phase 1 — Documentation (Stages 1–12, LOCKED):** Discovery Report, Engineering Bible,
PRD, SRS, HLD, LLD, Database Design, API Contract, Frontend Architecture, Backend
Architecture, Engineering Execution Plan. See `docs/planning/`.

**Phase 1 — Foundation milestones (Stages 13–21, implemented):**
Repo Init · Monorepo · TypeScript Foundation · Dev Environment & Config · Package Manager ·
Code Quality · CI/CD · Testing Foundation · Observability.

**Phase 2 — Platform (in progress):**
- Stage 1 (Mobile Platform Foundation) — **Increment 1 of 9 complete**: Expo app init +
  native platform config wired into the monorepo. Increments 2–9 pending approval.

## Engineering source of truth

The Engineering Bible (`docs/planning/ENGINEERING_BIBLE.md`) and Frontend/Backend
Architecture govern this codebase. Read them before contributing.

## Notes / caveats

- Expo/React Native version pins target **SDK 53**; reconcile with `npx expo install --fix`
  against the latest stable SDK before the first native build.
- CI third-party Actions are pinned to major tags; SHA-pin for supply-chain hardening.
- Branch protection, CODEOWNERS, secrets, and the EAS project are manual host-side setup.
