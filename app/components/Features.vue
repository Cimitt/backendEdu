<script setup lang="ts">
import Parallax from "./Parallax.vue";
</script>

<template>
  <Parallax>
    <div class="m-3 bg-white/70 backdrop-blur-md rounded-2xl p-10">
      <div
        class="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-12 lg:divide-x lg:divide-gray-300"
      >
        <div class="text-center">
          <Icon name="mdi:account" size="36" class="text-blue-600" />
          <h3 class="text-3xl font-bold text-blue-600 mt-6"><AnimateNumber :to="600" /></h3>
          <h6 class="text-base text-slate-900 font-medium mt-2">
            Pendidikan Indonesia
          </h6>
        </div>
        <div class="text-center">
          <Icon name="mdi:chart-line" size="36" class="text-blue-600" />
          <h3 class="text-3xl font-bold text-blue-600 mt-6"><AnimateNumber :to="450"/>+</h3>
          <h6 class="text-base text-slate-900 font-medium mt-2">
            Pemerataan Pendidikan
          </h6>
        </div>
        <div class="text-center">
          <Icon name="mdi:bookshelf" size="36" class="text-blue-600" />
          <h3 class="text-3xl font-bold text-blue-600 mt-6"><AnimateNumber :to="300"/>+</h3>
          <h6 class="text-base text-slate-900 font-medium mt-2">
            Kemudahan pendidikan
          </h6>
        </div>
        <div class="text-center">
          <Icon name="mdi:account" size="36" class="text-blue-600" />
          <h3 class="text-3xl font-bold text-blue-600 mt-6"><AnimateNumber :to="100"/>+</h3>
          <h6 class="text-base text-slate-900 font-medium mt-2"></h6>
        </div>
      </div>
    </div>
  </Parallax>
  <div class="m-3"></div>
</template>
