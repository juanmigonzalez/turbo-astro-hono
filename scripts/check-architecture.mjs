import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const errors = [];

function repositoryFiles() {
  return execFileSync(
    'git',
    ['ls-files', '--cached', '--others', '--exclude-standard'],
    { cwd: root, encoding: 'utf8' }
  )
    .trim()
    .split('\n')
    .filter(Boolean);
}

function requireFile(path) {
  if (!existsSync(resolve(root, path))) {
    errors.push(`Missing required harness file: ${path}`);
  }
}

for (const file of [
  'AGENTS.md',
  'docs/architecture.md',
  'docs/product-context.md',
  'apps/frontend/astro.config.mjs',
  'apps/frontend/src/pages/index.astro',
  'apps/backend/src/app.ts',
  'apps/backend/src/app.test.ts',
]) {
  requireFile(file);
}

for (const file of repositoryFiles()) {
  if (/(^|\/)\.env($|\.)/.test(file) && !file.endsWith('.example')) {
    errors.push(`Tracked environment file may contain secrets: ${file}`);
  }

  if (!/\.(?:astro|ts|tsx|js|mjs)$/.test(file)) continue;

  const source = readFileSync(resolve(root, file), 'utf8');
  if (
    file.startsWith('apps/frontend/') &&
    /from\s+['"][^'"]*backend\//.test(source)
  ) {
    errors.push(`Frontend imports backend internals: ${file}`);
  }
  if (
    file.startsWith('apps/backend/') &&
    /from\s+['"][^'"]*frontend\//.test(source)
  ) {
    errors.push(`Backend imports frontend internals: ${file}`);
  }
}

const serverEntry = resolve(root, 'apps/backend/src/index.ts');
if (existsSync(serverEntry)) {
  const source = readFileSync(serverEntry, 'utf8');
  if (!source.includes("from './app.js'")) {
    errors.push(
      'Backend entrypoint must import the testable app from ./app.js'
    );
  }
}

if (errors.length > 0) {
  console.error('Architecture checks failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Architecture checks passed from ${relative(process.cwd(), root) || '.'}.`
);
