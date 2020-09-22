module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-CN'
    },
    title: '江苏蚂蚁云数据技术有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '立足政务互联网和工业信息化互联网两大领域；整合行业生态合作伙伴技术资源，打造具有蚂蚁云特色的互联网+政务和互联网+工业信息化解决方案' },
      { hid: 'keywords', name: 'keywords', content: '云计算、大数据、智慧城市、软件定制开发' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // server: {
  //   port: 3001,
  //   host: '0.0.0.0'
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF0000' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/static/css/animate.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/vue-awesome-swiper', ssr: false},
    '@/plugins/bootstrap-vue'
  ],
  /**
   * 关闭遥感采集
   */
  telemetry: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
 /**
  * 取消预加载
  */
  render: {
    resourceHints: false
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    // analyze: true,
    productionSourceMap: false,
    extractCSS: {
      allChunks: true
    }
  }
}
