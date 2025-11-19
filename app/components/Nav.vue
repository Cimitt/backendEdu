<template>
  <header class="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="mdi:school" size="28" class="text-blue-600" />
          <span class="font-bold text-xl text-gray-800">KelasMu</span>
        </NuxtLink>
      </div>

      <ul class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li><NuxtLink to="/#home" class="hover:text-blue-600 transition-colors">Beranda</NuxtLink></li>
        <li><NuxtLink to="/#features" class="hover:text-blue-600 transition-colors">Fitur</NuxtLink></li>
        <li><NuxtLink to="/#about" class="hover:text-blue-600 transition-colors">Tentang</NuxtLink></li>
        <li><NuxtLink to="#contact" class="hover:text-blue-600 transition-colors">Kontak</NuxtLink></li>
      </ul>

      <div class="hidden md:block">
        <NuxtLink to="/loginas"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Coba KelasMu
        </NuxtLink>
      </div>

      <button @click="toggleMenu" class="md:hidden">
        <Icon name="mdi:menu" size="28" class="text-gray-700" />
      </button>
    </nav>

      <div
        v-if="isOpen"
        class="md:hidden bg-white shadow-lg flex flex-col items-center py-4 space-y-4"
      >
        <NuxtLink to="/#home" class="hover:text-blue-600" @click="toggleMenu">Home</NuxtLink>
        <NuxtLink to="/#features" class="hover:text-blue-600" @click="toggleMenu">Features</NuxtLink>
        <NuxtLink to="/#about" class="hover:text-blue-600" @click="toggleMenu">About</NuxtLink>
        <NuxtLink to="/#contact" class="hover:text-blue-600" @click="toggleMenu">Contact</NuxtLink>
        <NuxtLink
          href="#start"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
          @click="toggleMenu"
        >
          Coba KelasMu
        </NuxtLink>
      </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

onMounted(() => {
  if (process.client) {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
