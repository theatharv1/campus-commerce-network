// Enforces branch naming: `main`, or `<type>/<slug>` where type is a
// Conventional-Commit type. Dependency-free.

import { execSync } from 'node:child_process';

const ALLOWED = ['feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'ci', 'build', 'perf', 'release'];
const PATTERN = new RegExp(`^(main|(${ALLOWED.join('|')})\\/[a-z0-9._-]+)$`);

let branch = '';
try {
  branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
} catch {
  console.error('Could not determine current branch.');
  process.exit(1);
}

if (branch === 'HEAD') process.exit(0);

if (!PATTERN.test(branch)) {
  console.error(`Invalid branch name: "${branch}"`);
  console.error(`Expected "main" or "<type>/<slug>", type in {${ALLOWED.join(', ')}}`);
  console.error('Example: feat/listing-lifecycle');
  process.exit(1);
}
process.exit(0);
