// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: "description",
          content: "ลิ้งก์สำหรับนำพาเหล่าภูติตัวน้อยไปยังสถานที่ต่างๆ",
        },
        { name: "keywords", content: "funeehe, magiclab, minecraft, kafunech" },
        { name: "author", content: "MagicLab" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "Thailand" },
        { name: "theme-color", content: "#00000" },
        { name: "og:title", content: "Magiclab Linktree" },
        { name: "og:description", content: "ลิ้งก์สำหรับนำพาเหล่าภูติตัวน้อยไปยังสถานที่ต่างๆ" },
        { name: "og:image", content: "" },
      ],
      link: [
        { rel: "icon", href: "/icon.webp" }
      ]
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})