<script setup>
import {computed, ref, watch} from "vue";
import {useSlideableModal} from "@/composables/useSlideableModal.js";


const props = defineProps(['open', 'title', 'name'])
const emit = defineEmits(['close'])

const modalRef = ref(null)
const isOpenModal = computed(() => props.open)
const closeModal = () => emit('close')

const {currentY} = useSlideableModal(modalRef, isOpenModal, closeModal)

watch(() => props.open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
  } else {
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  }
})
</script>

<template>
  <div ref="modalRef"
       class="widgets-palette"
       :class="props.open ? 'open' : ''"
  >
    <div class="widgets-palette-line__container">
      <span class="widgets-palette-line"></span>
    </div>
    <span v-if="props.title" class="widgets-palette__title">{{ props.title }}</span>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.widgets-palette {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 20px 20px 0 0;
  background-color: #FFFFFF;
  padding: 6px 16px 32px 16px;
  width: 100%;
  box-shadow: 4px -4px 16px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate3d(0, 100%, 0);
  transition: 0.3s ease all;
  min-height: 500px;
  max-height: 70vh;
  touch-action: pan-y;
  will-change: transform;

  .widgets-palette__title {
    font-size: 20px;
    font-weight: 600;
  }
}

.open {
  transform: translate3d(0, 0, 0);
}

.widgets-palette-line__container {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 8px 0;
  margin: -8px 0;
  border-radius: 2px;
  cursor: grab;
  touch-action: none;
}

.widgets-palette-line {
  width: 60px;
  height: 3px;
  color: #DFDFE2;
}

.widgets-palette:active {
  cursor: grabbing;
}

.no-transition {
  transition: none !important;
}
</style>
