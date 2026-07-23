// Node Jest config with passWithNoTests until the RN runner (jest-expo + RTL)
// is activated in the Asset Architecture increment (TEST-ADR-04).
const base = require('@ccn/config/jest/node.cjs');

module.exports = {
  ...base,
  displayName: 'mobile',
};
