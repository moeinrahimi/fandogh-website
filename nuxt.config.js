module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    API: process.env.API || 'http://fandogh.cloud:8080/fa'
  },
  router: {
    middleware: ['authentication']
  },
  css: [
    'flexboxgrid/css/flexboxgrid.css',
    '@/assets/css/main.styl'
  ],
  head: {
    title: 'سرویس های ابری فندق',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'سرویس های ابری فندق، همه چیز با داکر فایل شروع میشه' }
    ],
    link: [
      { rel: 'iScon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  //css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    extractCSS: true,
    vendor: ['axios']
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['style'].includes(type)
      }
    }
  },
  plugins: ['~/plugins/progress-hover']
}
