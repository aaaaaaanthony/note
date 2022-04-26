module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        sidebar:[
          {
            text: 'ES6',
            children: [
              '/ES6/1.let和const命令.md',
              '/ES6/2.变量的解构赋值.md',
              '/ES6/3.字符串扩展.md',
              '/ES6/4.字符串的新增方法.md',
              '/ES6/5.Module的语法.md',
            ],
          },
        ]
    },
    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
              '/zh/': {
                placeholder: '搜索',
              },
            },
          },
        ],
      ],
    
}