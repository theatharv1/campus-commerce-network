// babel-preset-expo covers Hermes/JSX/TS transforms. The module-resolver keeps
// the `@/*` alias (TS-ADR-04) working at runtime. Reanimated 4 uses the
// Worklets Babel plugin, which MUST be listed last.
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
      'react-native-worklets/plugin',
    ],
  };
};
