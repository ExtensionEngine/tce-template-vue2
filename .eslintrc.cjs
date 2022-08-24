module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: '@extensionengine',
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['index']
    }]
  }
};
