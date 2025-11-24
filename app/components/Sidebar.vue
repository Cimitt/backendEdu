<template>
  <aside
    class="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between hidden md:block"
  >
    <div>
      <div class="flex items-center space-x-2 mb-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="mdi:school" size="28" class="text-blue-600" />
          <h1 class="text-lg font-bold">KelasMu</h1>
        </NuxtLink>
      </div>

      <nav>
        <h2 class="text-blue-600 font-semibold mb-2 uppercase">• Home</h2>
        <ul class="mb-8 space-y-2">
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Beranda </NuxtLink>
          </li>
        </ul>
        <h2 class="text-blue-600 font-semibold mb-2 uppercase">
          • Pembelajaran
        </h2>
        <ul class="mb-8 space-y-2">
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Video Interaktif </NuxtLink>
          </li>
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Quiz Interaktif </NuxtLink>
          </li>
        </ul>

        <h2 class="text-blue-600 font-semibold mb-2 uppercase">• Monitoring</h2>
        <ul class="mb-6 space-y-2">
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Monitoring Siswa </NuxtLink>
          </li>
        </ul>

        <h2
          class="text-xs text-blue-600 font-semibold mb-2 uppercase text-blue-500"
        >
          Settings
        </h2>
        <ul class="space-y-2">
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Setting </NuxtLink>
          </li>
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Logout </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
