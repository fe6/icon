/** @format */

module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/vue3-ts')],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/indent': 'off',
    'react/prop-types': 'off',
    'operator-linebreak': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'arrow-parens': 'off',
    'space-before-function-paren': 'off',
    'brace-style': ['error', '1tbs'],
  },
};
