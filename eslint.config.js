// eslint.config.ts
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import wildpastryConfig from '@wildpastry/eslint-config';
import { fileURLToPath } from 'node:url';

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig([
  globalIgnores(['dist', '**/*.spec.tsx']),

  // keep this, but make sure your later blocks can override if needed
  ...wildpastryConfig,

  // ✅ App (browser) files → tsconfig.app.json
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // NOTE: spread (it’s an array)
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir
      }
    }
  },

  // ✅ Node/tooling files → tsconfig.node.json
  {
    files: [
      '*.{ts,js}',
      '**/*.{config,config.*}.{ts,js}',
      'vite.config.*',
      'eslint.config.*'
    ],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: ['./tsconfig.node.json'],
        tsconfigRootDir
      }
    }
  }
]);
