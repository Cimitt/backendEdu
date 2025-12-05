export default defineNuxtConfig({
  app: {
    head: {
      title: 'KelasMu'
    }
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "motion-v/nuxt",
  ],

   css: [
    '~/assets/robe.css'
  ],

  // ⬅ ENV Nuxt untuk base URL API Laravel
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://127.0.0.1:8000",
    },
  },
});
