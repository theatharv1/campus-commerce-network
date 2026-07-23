import type { BorderWidthScale } from '../types';

/** Core border-width scale (device-independent pixels). */
export const borderWidth = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  thick: 1.5,
  heavy: 2,
} as const satisfies BorderWidthScale;

export type BorderWidth = typeof borderWidth;
