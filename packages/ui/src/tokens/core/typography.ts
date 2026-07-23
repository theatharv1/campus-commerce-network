import type { FontWeightValue } from '../types';

/**
 * Core typography primitives. Font families are logical names resolved to real
 * fonts by the font-loading contract (Increment 4). Default families derive
 * from the CampusCircle wireframe (Poppins display / Inter body) and are
 * swappable with the brand decision (OQ8).
 *
 * Primitives are internal; the public surface is `core.typography`.
 */

const fontFamily = {
  display: 'Poppins',
  body: 'Inter',
  mono: 'SpaceMono',
} as const;

/** Font-size scale (device-independent pixels). */
const fontSize = {
  xs: 11,
  sm: 12,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  '2xl': 21,
  '3xl': 23,
  '4xl': 32,
  '5xl': 44,
} as const;

const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const satisfies Readonly<Record<string, FontWeightValue>>;

/** Unitless line-height multipliers. */
const lineHeight = {
  none: 1,
  tight: 1.15,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.6,
} as const;

/** Letter-spacing in device-independent pixels. */
const letterSpacing = {
  tighter: -1,
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 2.5,
} as const;

export const coreTypography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} as const;

export type CoreTypography = typeof coreTypography;
