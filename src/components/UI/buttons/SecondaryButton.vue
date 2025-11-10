<script setup>

</script>

<template>
<button class="secondary-button">
  <slot></slot>
</button>
</template>

<style scoped>
.secondary-button {
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 450;
  color: #007AFF;
  display: flex;
  justify-content: center;
}
</style>
