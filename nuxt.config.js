export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Novies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500' },
    ]
  },

  env: {
    API_KEY: process.env.API_KEY || '',
    API_LANG: process.env.API_LANG || 'tr-TR',
    API_COUNTRY: process.env.API_COUNTRY || 'TR',
    IMG_URL: process.env.IMG_URL,
  },

  css: [
    '~/assets/styles/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],

  plugins: [{ src: '@/plugins/vue-slick-carousel', mode: 'client' }],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      directiveOnly: false,
      // Default image must be in the static folder
      defaultImage: '/images/novies.png',
      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      }
    }]
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
      name: 'The Novies',
      short_name: 'Novies',
      description: 'Browse Popular Movies, TV Shows and People',
      theme_color: '#2196f3',
      background_color: '#000000',
    }
  },
}
