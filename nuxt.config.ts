import path from 'path'

export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],
  modules: ['@nuxt/content'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;\n@use "@/assets/scss/_fonts.scss" as *;',
        }
      },
    }
  }
})