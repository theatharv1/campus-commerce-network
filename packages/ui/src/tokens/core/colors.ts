import type { ColorScale } from '../types';

/**
 * Core (reference) color ramps. Hue-named and meaning-free — semantic roles are
 * assigned in the semantic layer (Increment 2). Default reference palette is
 * derived from the CampusCircle wireframe and is intentionally swappable: the
 * brand is pending (Discovery Report OQ8), and a rebrand is a values-only edit
 * here (CQ: token-swap, Frontend Architecture §6).
 */

export const neutral = {
  0: '#FFFFFF',
  50: '#F6F6FB',
  100: '#ECECF2',
  200: '#E7E7F3',
  300: '#D5D5E0',
  400: '#A9A8B8',
  500: '#7C7B8C',
  600: '#5B5A72',
  700: '#454458',
  800: '#2B2B3D',
  900: '#14142B',
  950: '#0E0E1A',
  1000: '#000000',
} as const satisfies ColorScale;

export const indigo = {
  50: '#EEECFC',
  100: '#DEDAFA',
  200: '#C4BCF6',
  300: '#A99EF1',
  400: '#8B7CF6',
  500: '#6D5EF0',
  600: '#4F46E5',
  700: '#372FBF',
  800: '#2A2496',
  900: '#201B72',
} as const satisfies ColorScale;

export const mint = {
  50: '#E3F9F3',
  100: '#C1F1E4',
  200: '#8FE6CE',
  300: '#57D8B4',
  400: '#2ACF9F',
  500: '#16C79A',
  600: '#0FA37E',
  700: '#0B8062',
  800: '#086349',
  900: '#064B38',
} as const satisfies ColorScale;

export const amber = {
  50: '#FFF3DC',
  100: '#FFE4B0',
  200: '#FFD180',
  300: '#FFC152',
  400: '#FFB633',
  500: '#FFB020',
  600: '#E0940C',
  700: '#B8790A',
  800: '#8A5A05',
  900: '#5E3D03',
} as const satisfies ColorScale;

export const coral = {
  50: '#FFE9E9',
  100: '#FFCACA',
  200: '#FFA3A3',
  300: '#FF8585',
  400: '#FF7676',
  500: '#FF6B6B',
  600: '#E24B4B',
  700: '#C13636',
  800: '#952A2A',
  900: '#701F1F',
} as const satisfies ColorScale;

export const sky = {
  50: '#E7F1FF',
  100: '#C7DEFF',
  200: '#94C1FF',
  300: '#5EA0FF',
  400: '#3385FF',
  500: '#0A6CFF',
  600: '#0056D6',
  700: '#0043A8',
  800: '#00347F',
  900: '#002356',
} as const satisfies ColorScale;

/** Full core color palette. */
export const coreColors = {
  neutral,
  indigo,
  mint,
  amber,
  coral,
  sky,
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type CoreColors = typeof coreColors;
