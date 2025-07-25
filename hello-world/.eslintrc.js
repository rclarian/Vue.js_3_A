module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/no-v-for-template-key': 'off'
    // You can optionally turn off the rule completely:
    // 'vue/no-multiple-template-root': 'off'
  },
};