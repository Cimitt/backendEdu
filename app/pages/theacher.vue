<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen bg-white w-full overflow-hidden">
    <Sidebar />

    <main class="flex min-w-0 flex-col p-4">
      <!-- Header -->
      <header class="flex justify-between items-center mb-4 mx-4">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2">
            <Icon name="mdi:arrow-left" size="30" class="text-blue-600" />
            <span class="font-bold text-xl text-gray-800">Nama Users</span>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-3 cursor-pointer">
          <NuxtLink>
            <div class="w-8 h-8 bg-green-400 rounded-full overflow-hidden">
              <NuxtImg src="https://i.pravatar.cc/150?img=3" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
          </NuxtLink>
        </div>
      </header>

      <section class="flex-1 flex flex-col md:flex-row gap-6">
        <div class="rounded-2xl w-full max-w-full">
          <VideoPlayer :src="'https://www.youtube.com/watch?v=dQw4w9WgXcQ'" />

          <div class="py-0 overflow-hidden">
            <ClassMenu />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>