import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Red Fox',
  description: 'Shaping software & teams',
  cleanUrls: true,
  head: [
    ['meta', { name: 'twitter:site', content: '@milosmih' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://rfs.rs/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
    // ,
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'NYHGSGQV',
    //     'data-spa': 'auto',
    //     defer: ''
    //   }
    // ]
  ],
  buildEnd: genFeed
})
