import withNuxt from './.nuxt/eslint.config.mjs'
// @ts-expect-error This plugin doesn't ship types. We just blindly apply all of them
import prettierPlugin from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  // Your custom ESLint rules here
  {
    rules: {
      // Example custom rules
      'no-console': 1, // Warn on console.log statements
      'no-multi-assign': 2, // Disallow multiple assignments (const foo = bar = 0;)
      'no-param-reassign': 2, // Disallow reassigning function parameters
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true, // Allow modifiers in v-slot syntax
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      // eslint-disable-next-line no-dupe-keys
      'no-console': 0, // Warns on console logs (0 = off, 1 = warn, 2 = error)
      'no-debugger': 2, // Disallows debugger statements
      eqeqeq: ['error', 'always'], // Requires === and !== instead of == and !=
      'vue/no-unused-components': 'warn', // Warn on unused Vue components
      'vue/no-multiple-template-root': 'off', // Turn off multiple template root rule (Vue 3 no longer needs it)
    },
  },
  prettierPlugin // Prettier integration
)
