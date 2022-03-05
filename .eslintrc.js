/** @format */

module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/vue3-ts')],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/indent': 'off',
    'react/prop-types': 'off',
    'operator-linebreak': 'off',
    'unicorn/number-literal-case': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'arrow-parens': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    'brace-style': ['error', '1tbs'],
    'vue/require-prop-types': 'off',
  },
};
