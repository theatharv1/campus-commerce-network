// CCN root ESLint (flat config, ESLint v9). Single authoritative config:
// type-aware base for all TS, path-scoped React Native overrides, module-
// boundary + import discipline. Prettier handles formatting (disabled here
// via eslint-config-prettier). See CQ-ADR-01/02.

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importX from 'eslint-plugin-import-x';
import boundaries from 'eslint-plugin-boundaries';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.expo/**',
      '**/.turbo/**',
      '**/coverage/**',
      'pnpm-lock.yaml',
    ],
  },

  // Type-aware base for all TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'import-x': importX,
      boundaries,
    },
    settings: {
      'import-x/resolver': { typescript: { alwaysTryTypes: true }, node: true },
      'boundaries/elements': [
        { type: 'app', pattern: 'apps/*' },
        { type: 'pkg-types', pattern: 'packages/types' },
        { type: 'pkg-core', pattern: 'packages/core' },
        { type: 'pkg-api', pattern: 'packages/api-client' },
        { type: 'pkg-ui', pattern: 'packages/ui' },
        { type: 'pkg-config', pattern: 'packages/config' },
      ],
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'import-x/no-cycle': ['error', { maxDepth: Infinity }],
      'import-x/no-unresolved': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [{ pattern: '@ccn/**', group: 'internal', position: 'before' }],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: ['app'], allow: ['pkg-types', 'pkg-core', 'pkg-api', 'pkg-ui', 'pkg-config'] },
            { from: ['pkg-ui'], allow: ['pkg-core', 'pkg-types'] },
            { from: ['pkg-api'], allow: ['pkg-types'] },
            { from: ['pkg-core'], allow: ['pkg-types'] },
            { from: ['pkg-types'], allow: [] },
            { from: ['pkg-config'], allow: [] },
          ],
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      complexity: ['warn', 12],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', { max: 80, skipComments: true, skipBlankLines: true }],
    },
  },

  // React Native / React platform overrides
  {
    files: ['apps/mobile/**/*.{ts,tsx}', 'packages/ui/**/*.{ts,tsx}'],
    plugins: { react, 'react-hooks': reactHooks },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/jsx-key': 'error',
      'react/no-danger': 'error',
      'react/self-closing-comp': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // JS / config files: no type-checking, node globals
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'no-console': 'off',
    },
  },

  eslintConfigPrettier,
);
