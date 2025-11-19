<script setup lang="ts">

</script>

<template>
    <div class="lg:min-h-screen flex flex-col items-center justify-center">
      <div class="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
        <div class="hidden lg:block ">
          <h1 class="lg:text-5xl text-4xl font-bold text-slate-900">
            Daftar untuk mengakses KelasMu
          </h1>
          <p class="text-[15px] mt-6 text-slate-600"><span class="font-semibold">Semua Orang Berhak Untuk Belajar -KelasMu.</span></p>
          <p class="text-[15px] mt-6 lg:mt-12 text-slate-600">Sudah memiliki akun? <NuxtLink to="/login" class="text-blue-600 font-medium hover:underline ml-1">Daftar disini</NuxtLink></p>
        </div>

        <form class="max-w-md lg:ml-auto w-full">
          <h2 class="text-slate-900 text-3xl font-semibold mb-8">
             Register
          </h2>

          <div class="space-y-6">
            <div>
              <label class='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
              <input name="email" type="email" required class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Email" />
            </div>
            <div>
              <label class='text-sm text-slate-900 font-medium mb-2 block'>Password</label>
              <input name="password" type="password" required class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Password" />
            </div>
          </div>

          <div class="!mt-12">
            <button type="button" class="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
</template>