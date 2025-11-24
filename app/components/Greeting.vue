<script></script>

<template>
  <div
    style="
      background-image: url(https://readymadeui.com/images/bg-gradient.webp);
      background-size: cover;
    "
  >
    <div class="px-4 sm:px-10 py-12 md:py-[120px]">
      <div class="relative max-w-screen-xl mx-auto">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="lg:text-[54px] md:text-5xl text-4xl text-slate-900 font-bold !leading-tight mb-6"
          >
            Selamat Datang di <br />
            <span class="text-blue-700">Pendidikan Masadepan</span>
          </h1>
          <p class="text-slate-600 text-base font-medium leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dolorum in omnis, fugit rerum esse nesciunt officiis nisi, cumque, hic dignissimos adipisci! Maiores debitis, quam quasi enim nemo aperiam repudiandae..
          </p>

          <div class="mt-12 flex items-center justify-center flex-wrap gap-6">
            <NuxtLink to="/loginas"
              class="px-5 py-3 rounded-full text-base font-medium tracking-wide text-white border border-blue-700 bg-indigo-700 hover:bg-indigo-800 transition-all cursor-pointer"
            >
              Coba Sekarang
            </NuxtLink>
            <NuxtLink to="#about"
              class="px-5 py-3 rounded-full text-base font-medium tracking-wide text-slate-900 border border-gray-300 bg-white hover:bg-gray-100 transition-all cursor-pointer"
            >
              Pelajari Lebih Lanjut
            </NuxtLink>
          </div>
        </div>

        <div class="max-w-5xl w-full mx-auto mt-20">
          <img
            src="https://readymadeui.com/images/kpi-img-3.webp"
            class="w-full"
            alt="kpi-img-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
