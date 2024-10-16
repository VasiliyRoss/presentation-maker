import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        'no-self-compare': 'error',
        'camelcase': "error",
        'eqeqeq': 'error',
        '@stylistic/quotes': ['warn', 'single'],
        '@stylistic/semi': ['warn', 'always'],
        '@stylistic/comma-dangle': ['warn', 'always-multiline'],
        '@stylistic/function-paren-newline': ['warn', 'never'],
        '@stylistic/block-spacing': ['warn', 'always'],
        '@stylistic/function-call-spacing': ['warn'],
        '@stylistic/no-multi-spaces': ['warn'],
        '@stylistic/quote-props': ['warn', 'always'],
        '@stylistic/brace-style': ['warn', '1tbs'],
        '@stylistic/indent': ['warn'],
        '@stylistic/object-curly-spacing': ['warn', 'always'],
    },
  },
)
