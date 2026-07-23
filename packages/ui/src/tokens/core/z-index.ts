import type { ZIndexScale } from '../types';

/** Core z-index (stacking order) scale. */
export const zIndex = {
  hide: -1,
  base: 0,
  raised: 10,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  toast: 1400,
  tooltip: 1500,
} as const satisfies ZIndexScale;

export type ZIndex = typeof zIndex;
