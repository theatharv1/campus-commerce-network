# CCN UI Component Library — Architecture & Governance

`@ccn/ui` is the design system **and** the component library. It builds on the
tiered tokens (see tokens.md) and adds the theme model and, in later increments,
the theme engine and components.

## Library architecture

```
packages/ui/src/
  tokens/      core (reference) design tokens            [Stage 2 · Increment 1]
  theme/       semantic token layer + Theme model        [Stage 3 · Increment 1]
  # later increments:
  # runtime/   ThemeProvider, useTheme, NativeWind config
  # primitives/ Box, Text, PressableWithHaptic, Icon
  # components/ Button, Card, Input, Modal, ...
  index.ts     single public entry (barrel)
```

## Export strategy

- **One public entry** (`@ccn/ui`), re-exporting the token + theme surfaces.
- Consumers import role/theme tokens, never core ramps directly.
- Components (later) are named exports; each ships its typed props and is
  tree-shakeable via the source-consumed package (MR-ADR-02).

## Theme model (Increment 1)

- `SemanticColors` — role-based colors (background/surface/text/border/accent/
  status/overlay). Two concrete sets: `lightColors`, `darkColors`.
- `Theme` — semantic colors + theme-invariant core scales (space/radius/
  typography/…) in one object. `lightTheme`, `darkTheme`, `themes` lookup.
- `ColorPreference` = `light | dark | system`; `ThemeMode` = `light | dark`.
- The runtime that resolves preference → mode and injects the theme (Zustand +
  MMKV + provider, per Frontend Architecture §6) is Increment 2.

## Versioning

- The library versions with the monorepo (release-please, SemVer).
- Token/theme value changes are additive or documented breaking changes (see
  Governance); the token/theme **types** are the compile-time contract.

## Component governance

- **Contribution:** a new component is proposed via ADR when it introduces a new
  pattern; it must be typed, theme-aware (reads `theme`), accessible (labels /
  roles / touch targets), and tested to the layer's bar (SRS §12).
- **Deprecation:** components/tokens are deprecated for one minor release before
  removal; never silently removed.
- **Breaking changes:** prop/behaviour breaks bump the major and ship with a
  migration note; the semantic layer insulates consumers from core value shifts.

## Architectural Decision Records (Stage 3 · Increment 1)

- **UI-ADR-01** — The component library and design system share one package
  (`@ccn/ui`) with a single public entry; components consume semantic/theme
  tokens, never core ramps.
- **UI-ADR-02** — The `Theme` object bundles theme-varying semantic colors with
  theme-invariant core scales, so components read one source.
- **UI-ADR-03** — Two first-class themes (light/dark) are defined as data now;
  the resolution runtime (preference→mode, provider, hooks, NativeWind) is a
  separate increment to keep RN/NativeWind version wiring isolated and reviewable.
