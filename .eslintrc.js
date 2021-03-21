module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      process.env.NODE_ENV === 'production' ? 'off' : 'error',
      // prettier 规则配置
      {
        printWidth: 150, // 一行代码超过这个值换行
        endOfLine: 'auto', // 换行cr检查
        singleQuote: true, // 使用单引号
        semi: false, // 语句结尾无分号
        trailingComma: 'none' // 对象最后一个属性不加添加逗号
      }
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    // 'no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ]
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^h$',
    //     varsIgnorePattern: '^h$'
    //   }
    // ],
    // 'space-before-function-paren': 'off',
    // quotes: ['error', 'single'],
    // 'comma-dangle': ['error', 'never']
  }
}
