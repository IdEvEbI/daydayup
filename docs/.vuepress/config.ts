import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/daydayup/',

  head: [[
    'link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/daydayup/images/icons/favicon-32x32.png`,
    }]
  ],

  // 站点配置
  lang: 'zh-CN',
  title: '天天向上',
  description: '学习学习再学习',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/avatar.png',
    navbar: [{
      text: '职业认证',
      children: [
        {
          text: '教师资格证',
          link: '/teacher-cert/overview.md',
        },
        {
          text: '软件设计师',
          link: '/software-cert/',
        }],
    }],
    sidebar: {
      '/teacher-cert/': [
        {
          text: '教师资格证',
          children: [
            'overview.md',
            'professional-idea.md',
            'composition.md',
            'education-basic.md',
            'course.md'
          ],
        }
      ],
    }
  },
})
