/** @format */

module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/vue3-ts')],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/indent': 'off',
    'operator-linebreak': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'arrow-parens': 'off',
    'brace-style': ['error', '1tbs'],
  },
};
