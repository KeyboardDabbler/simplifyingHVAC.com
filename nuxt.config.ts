// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui'
  ],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  ui: {
    icons: ['heroicons'],
  },
  colorMode: {
    preference: 'dark'
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  fontMetrics: {
    fonts: ['DM Sans']
  },
})
