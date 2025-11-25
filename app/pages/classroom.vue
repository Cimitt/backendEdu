<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen bg-white max-h-screen max-w-screen mx-auto overflow-hidden">
    <main class="flex-1 flex flex-col p-4">
      <header class="flex justify-between items-center mb-4 mx-4">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2">
            <Icon name="mdi:arrow-left" size="30" class="text-blue-600" />
            <span class="font-bold text-xl text-gray-800">Nama Kelas</span>
          </NuxtLink>
        </div>
        <div class="flex flex-row items-center space-x-3 cursor-pointer">
          <span class="text-lg font-medium text-gray-700">username</span>
          <NuxtLink>
            <div class="w-8 h-8 bg-green-400 rounded-full overflow-hidden">
              <NuxtImg src="https://i.pravatar.cc/150?img=3" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
          </NuxtLink>
        </div>
      </header>

      <section class="flex-1 flex flex-col md:flex-row gap-8">
        <div class="flex-1 rounded-2xl overflow-hidden">
          <div>
            <VideoPlayer :src="'https://www.youtube.com/watch?v=dQw4w9WgXcQ'" />
          </div>
          <div class="py-0 overflow-hidden">
            <ClassMenu />
          </div>
        </div>
        
        <div
          class="flex flex-col justify-between w-full md:w-1/3 h-full bg-gray-50 border-l border-gray-200 rounded-xl items-center">
          <div>
            <ContentList />
            <div class="flex flex-row gap-5 justify-center">
              <NuxtLink
                class="px-6 py-2.5 rounded-md cursor-pointer text-sm tracking-wider font-medium border-0 outline-0 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl">
                Back</NuxtLink>
              <NuxtLink
                class="px-6 py-2.5 rounded-md cursor-pointer text-sm tracking-wider font-medium border-0 outline-0 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl">
                Next</NuxtLink>
            </div>
          </div>

          <RightPanelStudent />

        </div>
      </section>
    </main>
  </div>
</template>
