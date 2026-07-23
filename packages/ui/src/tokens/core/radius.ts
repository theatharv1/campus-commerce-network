import type { RadiusScale } from '../types';

/** Core corner-radius scale (device-independent pixels). */
export const radius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 14,
  xl: 18,
  '2xl': 24,
  '3xl': 34,
  pill: 999,
  full: 9999,
} as const satisfies RadiusScale;

export type Radius = typeof radius;
