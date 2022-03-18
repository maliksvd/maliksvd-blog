module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animationDuration: {
        3000: '3s',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#A0A0A0',
            h2: {
              color: '#EDEDED',
            },
            h3: {
              color: '#EDEDED',
            },
            strong: {
              color: '#EDEDED',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
}
