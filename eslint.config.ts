import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

import { globalIgnores } from 'eslint/config'

import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs([
  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  globalIgnores(['node_modules/*']),
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'error',
      'no-sparse-arrays': 0,
      'no-inner-declarations': 0,
      'no-constant-condition': 0,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'node/no-callback-literal': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'vue/attributes-order': 'off',
      'vue/one-component-per-file': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/require-default-prop': 'off',
      semi: [2, 'never'],
      quotes: [2, 'single'],
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
])
