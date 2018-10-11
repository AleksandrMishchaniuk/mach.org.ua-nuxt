const fs = require('fs-extra')
const path = require('path')

let fileName = fs.pathExistsSync('.env.' + process.env.NODE_ENV) ? '.env.' + process.env.NODE_ENV : '.env'

require('dotenv').config({ path: path.resolve(process.cwd(), fileName) })

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - mach.org.ua',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Machine building useful site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/resource.js',
    '~/plugins/vuelidate.js',
    '~/plugins/i18n.js'
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  env: {
    baseUrl: process.env.SCHEMA + '://' + process.env.DOMAIN,
    apiUrl: process.env.API_URL,
    developerUrl: process.env.DEVELOPER_URL
  },
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/resource.js',
      '~/plugins/vuelidate.js',
      '~/plugins/i18n.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
