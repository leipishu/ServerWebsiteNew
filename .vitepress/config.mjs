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
      },
      {
        text: '常见错误解决',
        collapsible: true,
        collapsed: false,
        items: [
          { 
            text: '无法连接至服务器？', 
            link: '/troubleshooting',
            items: [
              { text: '连接超时', link: '/troubleshooting#_1-connection-timed-out-连接超时' },
              { text: '模组不匹配', link: '/troubleshooting#_2-mod-rejection-模组不匹配' },
              { text: '缺少模组', link: '/troubleshooting#_3-missing-mods-xxx-缺少模组' },
              { text: '登录失败', link: '/troubleshooting#_4-failed-to-login-登录失败' },
              { text: '版本不符', link: '/troubleshooting#_5-outdated-server-版本不符' },
              { text: '无效会话', link: '/troubleshooting#_6-invalid-session-无效的会话' },
              { text: '未知主机', link: '/troubleshooting#_7-unknown-host-未知的主机' },
              { text: '验证服务器宕机', link: '/troubleshooting#_8-authentication-servers-are-down-身份验证服务器宕机' }
            ]
          },
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
    },
    editLink: {
      pattern: 'https://github.com/leipishu/ServerWebsiteNew/edit/main/:path',
      text: '编辑此页'
    },
    lastUpdated: true
  }
})
