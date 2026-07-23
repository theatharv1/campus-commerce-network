import type { BreakpointScale } from '../types';

/**
 * Core responsive breakpoints (min-width, device-independent pixels).
 * Phone-first; `lg`/`xl` anticipate tablet and future web/desktop surfaces.
 */
export const breakpoint = {
  sm: 360,
  md: 480,
  lg: 768,
  xl: 1024,
} as const satisfies BreakpointScale;

export type Breakpoint = typeof breakpoint;
