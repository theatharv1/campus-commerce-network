# CCN Design Token Architecture

The design system is one visual language every screen, component, and future
feature inherits. It is built as tiered tokens; nothing hardcodes a raw value.

## Token tiers (inheritance flows down; overrides never flow up)

| Tier | Purpose | Naming | Owner | Example |
|---|---|---|---|---|
| **core** (reference) | Raw, meaning-free primitives | hue + scale, t-shirt steps | Design Systems | `indigo.600`, `space.xl` |
| **semantic** | Role assignment (Increment 2) | role-based | Design Systems | `background.default`, `text.primary` |
| **component** | Per-component slots (later) | component.part.state | Component owners | `button.primary.bg` |
| **theme** | Light/dark/system value sets (Increment 3) | theme → semantic | Design Systems | `theme.dark.surface` |
| **motion** | Duration/easing/spring (later) | intent-based | Design Systems | `motion.duration.fast` |

**Rule:** core tokens are hue/scale-named and carry no meaning. Meaning is
assigned only at the semantic tier. Components consume semantic (or component)
tokens — never core directly. Themes remap semantic → concrete values.

## Increment 1 scope (this milestone)

Core tier only: `color` (neutral, indigo, mint, amber, coral, sky, white,
black, transparent ramps), `space`, `radius`, `opacity`, `borderWidth`,
`zIndex`, `breakpoint`, `typography` (family/size/weight/lineHeight/
letterSpacing). Plus the TypeScript token type system.

Exposed as `core` from `@ccn/ui`:

```ts
import { core } from '@ccn/ui';
core.color.indigo[600]; // '#4F46E5'
core.space.xl;          // 16
core.typography.fontSize['4xl']; // 32
```

## Ownership & override rules

- **Core tokens are immutable in consumers.** A value change is a design-system
  PR that ripples through semantic/theme by design.
- **Brand is pending (OQ8).** The default reference palette (from the
  CampusCircle wireframe) is intentionally swappable — a rebrand edits only the
  core color ramps and font families; no consumer code changes. This is the
  "token swap" guarantee from Frontend Architecture §6.
- **No raw values in components.** Components read semantic/component tokens so a
  theme or brand change propagates without touching component code.
- **Additive evolution.** New tokens are added; existing tokens are deprecated
  (never silently removed) so consumers never break. See Governance below.

## Governance (how tokens evolve without breaking consumers)

1. Propose via ADR (context → decision → consequences).
2. Add new tokens additively; mark replaced tokens deprecated for one release.
3. CI type-checks every consumer against the token types (compile-time contract).
4. Semantic/component tiers insulate consumers from core value changes.

## Architectural Decision Records (Increment 1)

- **DS-ADR-01** — Tiered tokens (core → semantic → component → theme). Core is
  reference-only; meaning lives at the semantic tier.
- **DS-ADR-02** — Tokens are typed TypeScript constants (`as const satisfies`)
  in `@ccn/ui`, framework-agnostic (no React Native import), so they compile and
  are consumable by any surface (mobile now; web/desktop later).
- **DS-ADR-03** — Default reference palette + font families are placeholders
  pending the brand decision (OQ8); a rebrand is a values-only edit to the core
  tier (token-swap guarantee).
- **DS-ADR-04** — Font weights are string values (`'600'`) for React Native
  compatibility; sizes/spacing are unitless device-independent pixels.
