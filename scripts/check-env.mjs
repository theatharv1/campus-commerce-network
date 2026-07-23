// CCN environment validator. Dependency-free. Fails fast on missing
// required variables. Usage:
//   node scripts/check-env.mjs [--scope=server|client] [--file=.env]
// In CI the environment is injected; locally it can parse a .env file.

import { readFileSync, existsSync } from 'node:fs';

const REQUIRED = {
  server: ['APP_ENV', 'SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'DATABASE_URL'],
  client: ['EXPO_PUBLIC_APP_ENV', 'EXPO_PUBLIC_SUPABASE_URL', 'EXPO_PUBLIC_SUPABASE_ANON_KEY'],
};

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  }),
);

const scope = args.scope && REQUIRED[args.scope] ? args.scope : null;
const file = typeof args.file === 'string' ? args.file : '.env';

const env = { ...process.env };
if (existsSync(file)) {
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim();
    if (!(key in env) || env[key] === '') env[key] = val;
  }
}

const scopes = scope ? [scope] : Object.keys(REQUIRED);
const missing = [];
for (const s of scopes) {
  for (const key of REQUIRED[s]) {
    if (!env[key] || env[key] === '' || String(env[key]).includes('__SET_IN_SECRETS_STORE__')) {
      missing.push(`${s}:${key}`);
    }
  }
}

if (missing.length > 0) {
  console.error('Missing/unset required environment variables:');
  for (const m of missing) console.error(`  - ${m}`);
  process.exit(1);
}
console.error('Environment validation passed.');
