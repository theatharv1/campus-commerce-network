import { borderWidth } from './border';
import { breakpoint } from './breakpoints';
import { coreColors } from './colors';
import { opacity } from './opacity';
import { radius } from './radius';
import { space } from './spacing';
import { coreTypography } from './typography';
import { zIndex } from './z-index';

export { borderWidth } from './border';
export { breakpoint } from './breakpoints';
export { coreColors } from './colors';
export { opacity } from './opacity';
export { radius } from './radius';
export { space } from './spacing';
export { coreTypography } from './typography';
export { zIndex } from './z-index';

export type { BorderWidth } from './border';
export type { Breakpoint } from './breakpoints';
export type { CoreColors } from './colors';
export type { Opacity } from './opacity';
export type { Radius } from './radius';
export type { Space } from './spacing';
export type { CoreTypography } from './typography';
export type { ZIndex } from './z-index';

/**
 * The complete core (reference) token tier. This is the immutable foundation
 * every higher tier (semantic → component → theme) inherits from.
 */
export const core = {
  color: coreColors,
  space,
  radius,
  opacity,
  borderWidth,
  zIndex,
  breakpoint,
  typography: coreTypography,
} as const;

export type Core = typeof core;
