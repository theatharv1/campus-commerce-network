import type { SpaceScale } from '../types';

/**
 * Core spacing scale on a 4pt grid (values in device-independent pixels).
 * Keys are t-shirt/step names; `px` is a 1pt hairline gap.
 */
export const space = {
  none: 0,
  px: 1,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
  '7xl': 64,
  '8xl': 80,
  '9xl': 96,
} as const satisfies SpaceScale;

export type Space = typeof space;
