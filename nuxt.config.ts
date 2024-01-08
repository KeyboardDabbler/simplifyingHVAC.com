// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: false },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/content',
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
