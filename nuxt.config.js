const Sass = require('sass')
const Fiber = require('fibers')
require('dotenv').config()
const { GOOGLE_ANALYTICS_ID } = process.env;
export default {
  head: {
    title: 'postdle',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Postdle' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://postdle.netlify.app/' },
      { hid: 'og:title', property: 'og:title', content: 'Postdle' },
      { hid: 'og:description', property: 'og:description', content: '郵便番号版Wordleです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://postdle.netlify.app/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/destyle.css@3.0.2/destyle.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    config: {
      anonymize_ip: true,
      send_page_view: false,
    },
    debug: true,
    disableAutoPageTrack: true,
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },
  env: {
    GOOGLE_ANALYTICS_ID
  }
}
