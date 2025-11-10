<script setup>
import {VueSpinnerIos} from "vue3-spinners";
</script>

<template>
<div class="widget-item">
  <VueSpinnerIos size="20" color="gray"/>
</div>
</template>

<style scoped lang="scss">
.widget-item {
  min-width: 160px;
  min-height: 160px;
  max-width: 220px;
  max-height: 220px;
  aspect-ratio: 1/1;
  border-radius: 22px;
  cursor: grab;
  user-select: none;
  background: rgba(118, 118, 128, 0.08);
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
