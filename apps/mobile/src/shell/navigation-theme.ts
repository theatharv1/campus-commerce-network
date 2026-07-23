import type { Theme } from '@ccn/ui';
import {
  DarkTheme as NavDarkTheme,
  DefaultTheme as NavDefaultTheme,
  type Theme as NavigationTheme,
} from '@react-navigation/native';

/**
 * Bridges the CCN design-system theme (@ccn/ui) into the shape React Navigation
 * expects. This keeps the navigation container, headers, and native transitions
 * visually consistent with the design system. When the full theme runtime lands
 * (Stage 3 · Increment 2), the shell resolves the theme via `useTheme()` and
 * feeds it through this same bridge.
 */
export function toNavigationTheme(theme: Theme): NavigationTheme {
  const base = theme.mode === 'dark' ? NavDarkTheme : NavDefaultTheme;
  return {
    ...base,
    dark: theme.mode === 'dark',
    colors: {
      ...base.colors,
      primary: theme.color.accent.primary,
      background: theme.color.background.default,
      card: theme.color.surface.default,
      text: theme.color.text.primary,
      border: theme.color.border.default,
      notification: theme.color.status.danger.solid,
    },
  };
}
