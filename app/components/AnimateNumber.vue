<script setup lang="ts">
import { animate, useMotionValue, useTransform, RowValue } from "motion-v";
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  from: { type: Number, default: 0 },
  to: { type: Number, required: true },
  duration: { type: Number, default: 3 },
});

const count = useMotionValue(props.from);
const rounded = useTransform(() => Math.round(count.get()));

let controls: ReturnType<typeof animate> | null;

onMounted(() => {
  controls = animate(count, props.to, { duration: props.duration });
});

onUnmounted(() => {
  controls?.stop();
});
</script>

<template>
  <span>
    <RowValue :value="rounded" />
  </span>
</template>
