module.exports = {
  "root":true,//限定eslint范围始终在当前项目
  'env': {//全局变量
    'browser': true,
    'es6': true,
    'node': true
  },
  "extends": [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],

  'parserOptions': {//解析配置
    "parser": "@typescript-eslint/parser",//指定eslint解析器
  },
  'plugins': [//插件
    'vue'
  ],
  'rules': {//规则，0关闭,1警告,2报错
    'no-console': process.env.config_env === 'prod' ? 'error' : 'off',
    'no-debugger': process.env.config_env === 'prod' ? 'error' : 'off',

    
  }
}
