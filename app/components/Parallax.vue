<template>
  <section 
    ref="target"
    class="relative h-[400px] flex items-center justify-center overflow-hidden"
  >
    <img 
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      class="absolute inset-0 w-full h-full object-cover"
      :style="{ transform: `translateY(${offset}px)` }"
    />
    
    <div class="relative z-10">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const target = ref(null)
const offset = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    const top = target.value.getBoundingClientRect().top
    offset.value = top * -0.2 
  })
})
</script>
