import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default tseslint.config(
  {
    ignores: [
      // Config files
      'eslint.config.js',
      '*.config.{js,mjs,cjs}',
      'turbo.json',
      'pnpm-workspace.yaml',
      // Build outputs
      'dist/',
      'build/',
      '.astro/',
      '.angular/',
      '.turbo/',
      // Dependencies
      'node_modules/',
      // Lock files
      'pnpm-lock.yaml',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['apps/backend/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './apps/backend/tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    files: ['apps/frontend/**/*.{ts,tsx,astro}'],
    languageOptions: {
      parserOptions: {
        project: './apps/frontend/tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  }
);
