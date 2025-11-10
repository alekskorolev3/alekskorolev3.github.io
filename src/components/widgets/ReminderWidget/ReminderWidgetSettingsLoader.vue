<script setup>

</script>

<template>
<div class="container">
  <div class="item button__container">
    <div class="skeleton-shimmer"/>
  </div>

  <div class="item item__container">
    <div class="skeleton-shimmer"/>
  </div>
</div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item {
  border-radius: 10px;
  position: relative;
  background-color: #EFEFF0;
  overflow: hidden;
}

.button__container {
  height: 30px;
}

.item__container {
  height: 96px;
}

.skeleton-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}
</style>
