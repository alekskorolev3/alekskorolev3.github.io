<script setup>

</script>

<template>
<button class="remove-button">
  <img src="/src/assets/icons/MinusIcon.svg" alt="Minus Icon">
</button>
</template>

<style scoped lang="scss">
.remove-button {
  width: 28px;
  height: 28px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7C7C7C;
  z-index: 999;

  position: absolute;
  top: -6px;
  left: -6px;

  img {
    width: 14px;
    height: 2px;
  }
}
</style>
