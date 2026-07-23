// Conventional Commits (ENGINEERING_BIBLE.md §7). Scope is optional; if
// present it must name a real workspace area.

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 100],
    'scope-empty': [0],
    'scope-enum': [
      2,
      'always',
      ['types', 'core', 'api-client', 'ui', 'mobile', 'config', 'repo', 'deps', 'ci', 'release'],
    ],
  },
};
