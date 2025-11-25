<script>

</script>

<template>
  <div class="flex min-h-screen bg-white w-full mx-auto overflow-hidden">
    <SidebarStudent />

    <main class="flex-1 flex flex-col p-4">
      <!-- Header -->
      <header class="flex justify-end items-center mb-4">
        <div class="flex flex-row items-center space-x-3 cursor-pointer">
        <span class="text-sm font-medium text-gray-700">username</span>
          <NuxtLink>
            <div class="w-10 h-10 bg-green-400 rounded-full overflow-hidden">
              <NuxtImg src="https://i.pravatar.cc/150?img=3" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
          </NuxtLink>
        </div>
      </header>
    </main>
  </div>
</template>