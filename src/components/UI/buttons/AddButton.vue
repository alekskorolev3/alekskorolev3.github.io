<script setup>
const props = defineProps(['disabled'])
</script>

<template>
<button class="add-button" :disabled="props.disabled">
  <slot></slot>
</button>
</template>

<style scoped>
.add-button {
  background-color: #7C7C7C33;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  color: #000000;
  font-size: 28px;

  display: flex;
  justify-content: center;
  line-height: 28px;
}
</style>
