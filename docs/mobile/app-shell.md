# CCN Mobile — Application Shell & Navigation

## Provider hierarchy (Increment 1)

```
index.ts (import 'react-native-gesture-handler' first) → registerRootComponent(App)
App
└─ GestureHandlerRootView (flex:1)        gesture system root; must wrap all
   └─ SafeAreaProvider                     safe-area insets for every screen
      └─ NavigationContainer(theme)        navigation tree + design-system theme bridge
         ├─ StatusBar (themed)
         └─ RootNavigator                  native-stack (single "Shell" route for now)
```

## Navigation

- **Library:** React Navigation 7 (Bible-locked choice), native-stack.
- **Typing:** `RootStackParamList` + global `ReactNavigation.RootParamList`
  augmentation → fully typed navigation across the app.
- **Theme bridge:** `toNavigationTheme(theme)` maps the `@ccn/ui` theme onto the
  React Navigation `Theme` shape so container/headers/transitions match the
  design system.
- **Theme source (interim):** the OS color scheme selects light/dark statically.
  The full theme runtime (preference store + MMKV persistence, Stage 3 ·
  Increment 2) plugs into the same position without changing the shell shape.

## Not in this increment (later increments)

Route organization (auth/tabs/modal hierarchy), deep linking + Zod-validated
link contract, modal/overlay + bottom-sheet + toast hosts, route guards,
navigation-state restoration, transitions, navigation analytics, error recovery.

## ADRs (Stage 4 · Increment 1)

- **SHELL-ADR-01** — GestureHandlerRootView is the outermost provider; SafeArea
  and NavigationContainer nest inside; theme is bridged into navigation.
- **SHELL-ADR-02** — React Navigation 7 native-stack is the navigation
  foundation; param lists are `type` aliases (ParamListBase index-signature).
- **SHELL-ADR-03** — The shell consumes the design-system theme via a bridge, so
  swapping the interim OS-scheme resolver for the theme runtime is localized.
