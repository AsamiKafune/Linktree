<script setup>
const data = ref([
  {
    name: "📌 เว็บไซต์หลัก",
    link: "https://kfn.moe"
  },
  {
    name: "📦 Discord @Mirror",
    link: "https://discord.gg/tPgvkjhakm"
  },
  {
    name: "✨ แอดออนสกินสำหรับมือถือ",
    link: "https://magicskin-bedrock.kfn.moe/"
  },
  {
    name: "💸 ร้านรับทำฟิกุร่าและโมเดล",
    link: "https://figura.kfn.moe/"
  },
  {
    name: "❤️ Youtube @funeehe",
    link: "https://www.youtube.com/@funeehe"
  },
  {
    name: "💜 Tiktok @funeehe",
    link: "https://www.tiktok.com/@funeehe"
  }
])
</script>
<template>
  <title>
    MagicLab Linktree
  </title>
  <div class="bg-zinc-900 text-white min-h-[calc(100dvh)]">
    <div class="text-center mx-auto p-3 max-w-5xl w-full py-5">
      <img src="/icon.webp" class="rounded-full max-w-[130px] mx-auto pointer-events-none" alt="">
      <div class="grid gap-2 mt-1 max-w-xl mx-auto w-full">
        <div>
          <div class="text-2xl font-bold">
            FU-NE
          </div>
          <div class="text-sm -mt-1 opacity-65">
            ฟุเนะเองนะ! ฉันจะมานำทางพวกนายเอง อยากไปที่ไหนหรอ?<br>︶︶⊹︶꒰ จิ้มปุ่มด้านล่างนี้เลย ꒱︶⊹︶︶
          </div>
        </div>
        <NuxtLink v-for="item in data" :to="item.link" target="_blank" class="text-start max-w-[400px] w-full mx-auto">
          <div
            class="bg-white/5 backdrop-blur-sm px-3 text-white rounded-full w-full py-2 transition-all duration-200 hover:bg-white/90 hover:text-black">
            {{ item.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <footer class="fixed bottom-5 left-5 text-white opacity-40">
    © MagicLab {{ new Date().getFullYear() }}
  </footer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: "Kanit", sans-serif;
}
</style>
