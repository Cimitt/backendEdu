<template>
  <div class="flex min-h-screen bg-white min-w-screen mx-auto rounded-2xl shadow-md overflow-hidden mt-8">
    <Sidebar />
    
    <main class="flex-1 p-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          class="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div class="flex items-center space-x-3">
          <div class="text-sm font-medium text-gray-700">admin</div>
          <div class="w-11 h-11 bg-green-400 rounded-full">
            <NuxtImg src="https://i.pravatar.cc/150?img=3" alt="User Avatar" class="w-full h-full rounded-full"></NuxtImg>
        </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div class="col-span-1">
          <VideoPlayer />
        </div>
        <RightPanel />
      </div>
    </main>
  </div>
</template>
