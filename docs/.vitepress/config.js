const base = process.env.NODE_ENV === 'production' ? '/' : '';
const { resolve } = require('path');

module.exports = {
  title: 'element-meteor-ui',
  description: '基于 element-ui 二次封装的前端业务组件库',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'element-meteor-ui'
    [`element-meteor-ui`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'element-meteor-ui',
        description: '基于 element-ui 二次封装的前端业务组件库',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/' },
          { text: 'Button', link: '/components/button/' },
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'element-meteor-ui',
        description: '基于 element-ui 二次封装的前端业务组件库',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Button', link: '/en/components/button/' },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'https://github.com/xiaohouye1995/element-meteor-ui',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
