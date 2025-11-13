<script setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
  src: { type: String, required: true }
})

const videoPl = ref(null)
let player

onMounted(() => {
  player = videojs(videoPl.value, {
    controls: true,
    autoplay: false,
    preload: 'auto',
    responsive: true,
    fluid: true,
    sources: [{ src: props.src, type: 'video/mp4' }]
  })
})

onBeforeUnmount(() => {
  if (player) player.dispose()
})
</script>


<template>
  <div class="w-full h-full bg-black rounded-2xl overflow-hidden">
    <div ref="videoPl" class="video-js w-full h-full"></div>
  </div>
</template>