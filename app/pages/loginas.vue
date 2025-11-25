<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const selectedRole = ref<"pemateri" | "siswa" | null>(null);

function openModal(role: "pemateri" | "siswa") {
  selectedRole.value = role;
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-12">Login Sebagai</h2>

    <div class="grid md:grid-cols-2 gap-10">
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
        @click="openModal('pemateri')">
        <Icon name="mdi:account-school" class="text-blue-600 text-4xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Pembuat Materi</h3>
        <p class="text-gray-600">Login sebagai pembuat materi.</p>
      </div>

      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
        @click="openModal('siswa')">
        <Icon name="mdi:account" class="text-blue-600 text-4xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Siswa</h3>
        <p class="text-gray-600">Login sebagai siswa.</p>
      </div>
    </div>
  </div>

  <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click.self="closeModal">
    <div class="bg-white w-80 p-6 rounded-xl shadow-lg text-center">
      <h3 class="text-xl font-bold mb-3">
        Anda akan login sebagai:
        <span class="text-blue-600 capitalize">{{ selectedRole }}</span>
      </h3>

      <p class="text-gray-600 mb-6">
        Silakan login sebagai <strong>{{ selectedRole }}</strong>.
      </p>

      <div class="flex justify-center gap-5">
        <button @click="closeModal" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Masuk
        </button>

        <button @click="closeModal" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Tutup
        </button>
      </div>
    </div>
  </div>
</template>
