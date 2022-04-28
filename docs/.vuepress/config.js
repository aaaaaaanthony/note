module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        sidebar: {
          '/es6/': [
            {
              text: 'es6',
              children: [
                '/es6/1.let和const命令.md',
                '/es6/2.变量的解构赋值.md',
                '/es6/3.字符串扩展.md',
                '/es6/4.字符串的新增方法.md',
                '/es6/5.Module的语法.md',
              ],
            },
          ],
          '/TypeScript/': [
            {
              text: 'TypeScript',
              children: [
                '/TypeScript/1.安装.md'
              ],
            },
          ],
        },
        navbar: [
          // NavbarItem
          {
            text: '首页',
            link: '/',
          },
          {
            text: 'es6',
            link: '/es6/1.let和const命令.html',
          },
          {
            text: 'TS',
            link: '/TypeScript/1.安装.html',
          },
          // NavbarGroup
          {
            text: '测试组',
            children: ['/group/foo.md', '/group/bar.md'],
          },
        ],
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