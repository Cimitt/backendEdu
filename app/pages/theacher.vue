<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen bg-white w-full mx-auto overflow-hidden">
    <Sidebar />

    <main class="flex-1 flex flex-col p-4">
      <!-- Header -->
      <header class="flex justify-between items-center mb-4">
        <input type="text" placeholder="Search"
          class="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <div class="flex items-center space-x-3 cursor-pointer">
          <NuxtLink>
            <span class="text-sm font-medium text-gray-700">username</span>
            <div class="w-10 h-10 bg-green-400 rounded-full overflow-hidden">
              <NuxtImg src="https://i.pravatar.cc/150?img=3" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
          </NuxtLink>
        </div>
      </header>

      <section class="flex-1 flex flex-col md:flex-row gap-6">
        <div class="flex-1 rounded-2xl overflow-hidden">
          <VideoPlayer :src="'https://www.youtube.com/watch?v=dQw4w9WgXcQ'" />

          <div class="py-5">
            <ClassMenu />
          </div>
        </div>

        <div class="w-full md:w-1/3 h-full bg-gray-50 border-l border-gray-200 rounded-xl">
          <RightPanel />
        </div>
      </section>
    </main>
  </div>
</template>
