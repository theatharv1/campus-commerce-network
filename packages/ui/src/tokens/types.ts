/**
 * CCN Design Token — type system.
 *
 * Token tiers (see docs/design-system/tokens.md):
 *   core (reference) → semantic → component → theme
 *
 * This file defines the shared value types. Core tokens are hue/scale-named and
 * carry no meaning; semantic tokens (Increment 2) assign roles.
 */

/** A hex color string, e.g. `#4F46E5`. */
export type HexColor = `#${string}`;

/** Any usable color value in the system. */
export type ColorValue = HexColor | 'transparent';

/** A numeric-keyed color ramp (e.g. 50..900). */
export type ColorScale = Readonly<Record<string, ColorValue>>;

/** Spacing/size scale in device-independent pixels. */
export type SpaceScale = Readonly<Record<string, number>>;

/** Corner-radius scale in device-independent pixels. */
export type RadiusScale = Readonly<Record<string, number>>;

/** Opacity scale, 0..1. */
export type OpacityScale = Readonly<Record<string, number>>;

/** Border-width scale in device-independent pixels. */
export type BorderWidthScale = Readonly<Record<string, number>>;

/** Z-index scale (unitless stacking order). */
export type ZIndexScale = Readonly<Record<string, number>>;

/** Responsive breakpoints (min-width, device-independent pixels). */
export type BreakpointScale = Readonly<Record<string, number>>;

/** Font-weight values as strings (React Native accepts numeric strings). */
export type FontWeightValue = '400' | '500' | '600' | '700' | '800';
