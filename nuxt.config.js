export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Malik - Building digital respectfully & beautifully',
    titleTemplate: '%s - maliksvd.dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Digital is now the heart of our lives, so let's try to improve it respectfully and beautifully. My personal blog deals with the topics of web design, web development HTML, CSS, TailwindCSS and many other areas.",
      },
      /**
       * Open Graph
       */
      {
        property: 'og:site_name',
        content: 'Malik - Building digital respectfully & beautifully',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://maliksvd.dev',
      },
      {
        hid: 'og:image',
        content: '/images/default.png',
        property: 'og:image',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Malik - Building digital respectfully & beautifully',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Digital is now the heart of our lives, so let's try to improve it respectfully and beautifully. My personal blog deals with the topics of web design, web development HTML, CSS, TailwindCSS and many other areas.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.maliksvd.dev/images/default.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      /**
       * Twitter Card
       */
      { name: 'twitter:site', content: '@maliksvd' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://maliksvd.dev',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Malik - Building digital respectfully & beautifull',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "Digital is now the heart of our lives, so let's try to improve it respectfully and beautifully. My personal blog deals with the topics of web design, web development HTML, CSS, TailwindCSS and many other areas.",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.maliksvd.dev/images/default.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxtjs/pwa', '@nuxt/image', '@nuxtjs/google-fonts'],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      Inter: true,
    },
  },
  pwa: {
    meta: {
      title: 'Malik',
      author: 'maliksvd',
    },
    manifest: {
      name: 'Malik - Blog',
      short_name: 'Malik',
      lang: 'en',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
