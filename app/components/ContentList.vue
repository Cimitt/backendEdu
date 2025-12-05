<template>
  <div class="w-full mx-auto p-6">
    <h2 class="text-2xl font-semibold mb-6">Materi</h2>

    <div class="lg:space-y-6 flex flex-col gap-5 max-lg:flex-row max-lg:flex-nowrap lg:gap-0">

      <div
        v-for="event in events"
        :key="event.id"
        class="bg-white rounded-xl shadow p-6 flex flex-col justify-center w-150"
      >
        <div class="flex items-start gap-4">

          <div>
            <h3 class="text-lg font-semibold text-gray-800">
              Nama Materi
            </h3>
            <p class="text-gray-600 text-sm mt-1 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolorem.
            </p>
          </div>
        </div>

        <!-- Add to calendar button -->
        <button
          class="mt-4 self-start md:self-center px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 transition"
        >
          <span>+</span> Submit
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
const events = [
  {
  },
  {

  },
  {
    
  }

];
</script>

<style>
/* Optional: smooth card shadow or custom tweaks */
</style>
