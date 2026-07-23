/**
 * Theme model types. The theme engine runtime (store/provider/hooks) is built
 * in Increment 2; this file defines the shared theme vocabulary.
 */

/** A concrete, resolved theme. */
export type ThemeMode = 'light' | 'dark';

/** A user preference, where `system` follows the OS appearance. */
export type ColorPreference = 'light' | 'dark' | 'system';
