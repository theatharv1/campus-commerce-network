// babel-preset-expo covers Hermes/JSX/TS transforms. The module-resolver keeps
// the `@/*` alias (TS-ADR-04) working at runtime. The Reanimated plugin MUST be
// last. See Risks R2 re: Reanimated 3 vs 4 (worklets) plugin path.
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: { '@': './src' },
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
