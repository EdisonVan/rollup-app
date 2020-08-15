module.exports = {
  parser: 'babel-eslint', //定义ESLint的解析器
  extends: [
    'plugin:react/recommended',
  ], //定义文件继承的子规范
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    ENV: true
  },
  plugins: [
    "react"
  ],//定义了该eslint文件所依赖的插件
  env: {                          //指定代码的运行环境
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  settings: {             //自动发现React的版本，从而进行规范react代码
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: {        //指定ESLint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures": {
      jsx: true
    }
  },
  rules: {
    "react/prop-types": 'off',
    "react/display-name": 'off',
    "react/no-string-refs": 0,
    "react/no-children-prop": 0,
    "react/jsx-no-target-blank": 0,
    "react/no-render-return-value": 0,
    "react/no-direct-mutation-state": 'off',
    "react/no-unescaped-entities": 'off',
    "react/no-find-dom-node": 'off',
    "react/no-deprecated": 'off',
    "prefer-rest-params": 'off',
    "prefer-spread": 'off',
    "eol-last": 0
  }
}