<script setup>

</script>

<template>
  <div class="settings__container">
    <div class="search__container">
      <div class="skeleton-shimmer"/>
    </div>

    <div class="settings-item__container">
      <div class="skeleton-shimmer"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.settings__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.search__container {
  height: 36px;
  border-radius: 10px;
  background-color: #EFEFF0;
  position: relative;
  overflow: hidden;
}

.settings-item__container {
  height: 44px;
  border-radius: 10px;
  background-color: #EFEFF0;
  position: relative;
  overflow: hidden;
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
