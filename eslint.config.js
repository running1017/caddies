import * as tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['**/dist/**', '**/node_modules/**'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: ['./backend/tsconfig.json'],
      tsconfigRootDir: '.',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: eslintConfigPrettier.settings || {},
};
