<template>
  <footer class="bg-blue-600 text-white py-8">
    <div class="max-w-screen-xl mx-auto px-8 py-4">
      <div
        class="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6"
      >
        <div>
          <NuxtLink to="/" class="flex items-center gap-2">
            <Icon name="mdi:school" size="28" class="text-blue-600 bg-white" />
            <span class="font-bold text-xl text-white">KelasMu</span>
          </NuxtLink>
        </div>

        <ul
          class="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6"
        >
          <li>
            <NuxtLink href="#home" class="text-white hover:underline text-base"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="#features"
              class="text-white hover:underline text-base"
              >Features</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="#about" class="text-white hover:underline text-base"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="#" class="text-white hover:underline text-base"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>

      <hr class="my-6 border-white" />

      <p class="text-center text-white text-base">
        © KelasMu. Semua Orang Berhak Untuk Belajar.
      </p>
    </div>
  </footer>
</template>
