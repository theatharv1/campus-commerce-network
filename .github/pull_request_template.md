## What & why

<!-- Describe the change and link the requirement (SRS FR/NFR, PRD, or milestone). -->

## Definition of Done (ENGINEERING_BIBLE.md §7)

- [ ] Meets the stated requirement
- [ ] Conforms to the Engineering Bible and locked architecture docs
- [ ] Typed and validated (TypeScript strict; Zod where applicable)
- [ ] Respects module/feature boundaries (no cross-feature imports)
- [ ] Tests appropriate to the layer are present and passing
- [ ] CI green (lint, format, typecheck, tests, build)
- [ ] Observable where it matters (logs/metrics; no secrets/PII logged)
- [ ] Docs updated where this change invalidates them
- [ ] For money / identity / delivery paths: idempotency & fail-safe reviewed

## Notes / risks
