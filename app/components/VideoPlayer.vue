<script setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-youtube'

const props = defineProps({
  src: { type: String, required: true }
})

const videoPl = ref(null)
let player

onMounted(() => {
  player = videojs(videoPl.value, {
    controls: true,
    preload: 'auto',
    responsive: true,
    fluid: true,
    techOrder: ['youtube'],
    sources: [{ src: props.src, type: 'video/youtube' }]
  })
})

onBeforeUnmount(() => {
  if (player) player.dispose()
})
</script>

<template>
  <div class=" bg-black rounded-2xl overflow-hidden">
    <video ref="videoPl" class="video-js vjs-big-play-centered w-full h-full" playsinline></video>
  </div>
</template>
