module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript'
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    'import/prefer-default-export': false
  }
};
