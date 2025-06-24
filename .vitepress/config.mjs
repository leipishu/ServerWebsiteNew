import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leipishu 服务器",
  description: "新服务器网站！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '服务器准则', link: '/rules' },
      { text: '服务器公告', link: '/notices' },
      { text: '服务器备案', link: '/records' }
    ],

    sidebar: [
      {
        text: '服务器重要文档',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '服务器准则', link: '/rules' },
          { text: '服务器公告', link: '/notices' },
          { text: '服务器备案', link: '/records' },
          { text: '租借记录', link: '/records/borrows' }
        ]
      },
      {
        text: '服务器教程',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '导航页', link: '/tutorials' },
          { text: '下载服务器文件', link: '/tutorials/download-server-files' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/leipishu/ServerWebsiteNew' }
    ],

    footer: {
      message: '基于MIT协议开源',
      copyright: 'Copyright © 2024-2025 Leipishu',
      links: [
        { text: '隐私政策', link: '/privacy' },
        { text: '使用条款', link: '/terms' }
      ]
    },

    search: {
      provider: 'local',
    }
  }
})
