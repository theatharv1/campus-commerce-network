import type { ColorValue } from '../tokens';
import { core } from '../tokens';

/**
 * Semantic color roles. Components consume these role-based tokens, never core
 * ramps directly (DS-ADR-01). Each concrete theme (light/dark) provides a full
 * set, so a component is theme-aware by construction.
 */
export interface StatusColor {
  /** Foreground/content color on a subtle background. */
  readonly fg: ColorValue;
  /** Subtle background fill. */
  readonly bg: ColorValue;
  /** Border for subtle containers. */
  readonly border: ColorValue;
  /** Solid fill for emphasis. */
  readonly solid: ColorValue;
  /** Content color on the solid fill. */
  readonly onSolid: ColorValue;
}

export interface SemanticColors {
  readonly background: {
    readonly default: ColorValue;
    readonly subtle: ColorValue;
    readonly elevated: ColorValue;
    readonly inverse: ColorValue;
  };
  readonly surface: {
    readonly default: ColorValue;
    readonly subtle: ColorValue;
    readonly raised: ColorValue;
    readonly overlay: ColorValue;
  };
  readonly text: {
    readonly primary: ColorValue;
    readonly secondary: ColorValue;
    readonly tertiary: ColorValue;
    readonly disabled: ColorValue;
    readonly inverse: ColorValue;
    readonly link: ColorValue;
    readonly onAccent: ColorValue;
  };
  readonly border: {
    readonly default: ColorValue;
    readonly subtle: ColorValue;
    readonly strong: ColorValue;
    readonly focus: ColorValue;
  };
  readonly accent: {
    readonly primary: ColorValue;
    readonly primaryPressed: ColorValue;
    readonly primarySubtle: ColorValue;
    readonly onPrimary: ColorValue;
    readonly secondary: ColorValue;
  };
  readonly status: {
    readonly success: StatusColor;
    readonly warning: StatusColor;
    readonly danger: StatusColor;
    readonly info: StatusColor;
  };
  readonly overlay: {
    /** Full-screen dim behind modals/sheets (8-digit hex includes alpha). */
    readonly scrim: ColorValue;
  };
}

const c = core.color;

export const lightColors = {
  background: {
    default: c.neutral[50],
    subtle: c.neutral[100],
    elevated: c.neutral[0],
    inverse: c.neutral[900],
  },
  surface: {
    default: c.neutral[0],
    subtle: c.neutral[50],
    raised: c.neutral[0],
    overlay: c.neutral[0],
  },
  text: {
    primary: c.neutral[900],
    secondary: c.neutral[600],
    tertiary: c.neutral[500],
    disabled: c.neutral[400],
    inverse: c.neutral[0],
    link: c.indigo[600],
    onAccent: c.neutral[0],
  },
  border: {
    default: c.neutral[200],
    subtle: c.neutral[100],
    strong: c.neutral[300],
    focus: c.indigo[600],
  },
  accent: {
    primary: c.indigo[600],
    primaryPressed: c.indigo[700],
    primarySubtle: c.indigo[50],
    onPrimary: c.neutral[0],
    secondary: c.mint[500],
  },
  status: {
    success: {
      fg: c.mint[700],
      bg: c.mint[50],
      border: c.mint[200],
      solid: c.mint[500],
      onSolid: c.neutral[0],
    },
    warning: {
      fg: c.amber[800],
      bg: c.amber[50],
      border: c.amber[200],
      solid: c.amber[500],
      onSolid: c.neutral[900],
    },
    danger: {
      fg: c.coral[700],
      bg: c.coral[50],
      border: c.coral[200],
      solid: c.coral[500],
      onSolid: c.neutral[0],
    },
    info: {
      fg: c.sky[700],
      bg: c.sky[50],
      border: c.sky[200],
      solid: c.sky[600],
      onSolid: c.neutral[0],
    },
  },
  overlay: {
    scrim: '#0E0E1A99',
  },
} as const satisfies SemanticColors;

export const darkColors = {
  background: {
    default: c.neutral[950],
    subtle: c.neutral[900],
    elevated: c.neutral[800],
    inverse: c.neutral[50],
  },
  surface: {
    default: c.neutral[900],
    subtle: c.neutral[950],
    raised: c.neutral[800],
    overlay: c.neutral[800],
  },
  text: {
    primary: c.neutral[50],
    secondary: c.neutral[300],
    tertiary: c.neutral[400],
    disabled: c.neutral[600],
    inverse: c.neutral[900],
    link: c.indigo[300],
    onAccent: c.neutral[0],
  },
  border: {
    default: c.neutral[700],
    subtle: c.neutral[800],
    strong: c.neutral[600],
    focus: c.indigo[400],
  },
  accent: {
    primary: c.indigo[500],
    primaryPressed: c.indigo[400],
    primarySubtle: c.indigo[900],
    onPrimary: c.neutral[0],
    secondary: c.mint[400],
  },
  status: {
    success: {
      fg: c.mint[300],
      bg: c.mint[900],
      border: c.mint[800],
      solid: c.mint[500],
      onSolid: c.neutral[950],
    },
    warning: {
      fg: c.amber[300],
      bg: c.amber[900],
      border: c.amber[800],
      solid: c.amber[500],
      onSolid: c.neutral[950],
    },
    danger: {
      fg: c.coral[300],
      bg: c.coral[900],
      border: c.coral[800],
      solid: c.coral[500],
      onSolid: c.neutral[0],
    },
    info: {
      fg: c.sky[300],
      bg: c.sky[900],
      border: c.sky[800],
      solid: c.sky[500],
      onSolid: c.neutral[0],
    },
  },
  overlay: {
    scrim: '#00000099',
  },
} as const satisfies SemanticColors;
