import { core } from '../tokens';

import { darkColors, lightColors, type SemanticColors } from './semantic-colors';
import type { ThemeMode } from './types';

/**
 * A fully resolved theme: theme-varying semantic colors plus the theme-invariant
 * core scales (spacing, radius, typography, etc.), exposed as one object so a
 * component reads everything it needs from `theme`.
 */
export interface Theme {
  readonly mode: ThemeMode;
  readonly color: SemanticColors;
  readonly space: typeof core.space;
  readonly radius: typeof core.radius;
  readonly opacity: typeof core.opacity;
  readonly borderWidth: typeof core.borderWidth;
  readonly zIndex: typeof core.zIndex;
  readonly breakpoint: typeof core.breakpoint;
  readonly typography: typeof core.typography;
}

const invariant = {
  space: core.space,
  radius: core.radius,
  opacity: core.opacity,
  borderWidth: core.borderWidth,
  zIndex: core.zIndex,
  breakpoint: core.breakpoint,
  typography: core.typography,
} as const;

export const lightTheme: Theme = {
  mode: 'light',
  color: lightColors,
  ...invariant,
};

export const darkTheme: Theme = {
  mode: 'dark',
  color: darkColors,
  ...invariant,
};

/** Lookup of concrete themes by mode. */
export const themes: Readonly<Record<ThemeMode, Theme>> = {
  light: lightTheme,
  dark: darkTheme,
};
