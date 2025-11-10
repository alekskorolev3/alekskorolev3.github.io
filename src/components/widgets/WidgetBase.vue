<script setup>
import { useDraggable } from '@vue-dnd-kit/core';
import {computed, ref} from "vue";
import RemoveButton from "@/components/UI/buttons/RemoveButton.vue";
import {storeToRefs} from "pinia";
import {useDashboardStore} from "@/stores/dashboardStore.js";

const props = defineProps(['source', 'index', 'id', 'isFixed', 'wrapperClass'])
const emit = defineEmits(['handleDrag', 'handleClick'])

const store = useDashboardStore()
const {isEdit} = storeToRefs(store)

const draggableDisabled = computed(() => props.isFixed);

const { elementRef, handleDragStart, isDragging, isOvered } = useDraggable({
  disabled: draggableDisabled,
  data: computed(() => ({
    index: props.index,
    source: props.source,
  })),
});

const dragStartPosition = ref({ x: 0, y: 0 })

const handlePointerDown = (event) => {
  emit("handleDrag", true)
  dragStartPosition.value = {
    x: event.clientX,
    y: event.clientY
  }

  handleDragStart(event)
}

const handlePointerUp = (event) => {
  const distance = Math.sqrt(
      Math.pow(event.clientX - dragStartPosition.value.x, 2) +
      Math.pow(event.clientY - dragStartPosition.value.y, 2)
  )

  if (distance < 5) {
    emit("handleDrag", false)
    handleClick(event)
  }
}

const handleClick = () => emit('handleClick', props.id)
const handleRemove = () => store.handleRemove(props.id)

</script>

<template>
  <div
      ref="elementRef"
      :class="{
      'is-over': isOvered,
      'is-dragging': isDragging,
      'shake-widget': isEdit,
      }"
      @pointerdown="handlePointerDown"
      @pointerup="handlePointerUp"
      class="draggable"
  >
    <Transition>
      <RemoveButton v-if="isEdit" @click="handleRemove" @pointerdown.stop/>
    </Transition>
    <slot :class="props.wrapperClass"/>
  </div>
</template>

<style scoped>
.draggable {
  position: relative;
  cursor: grab;
  transition: all 0.2s ease;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
}

.is-dragging {
  opacity: 0.3;
}

.is-over {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.shake-widget {
  animation: shake 0.4s ease-in-out infinite;
}

@keyframes shake {
   0% { transform: translateX(0) rotate(0deg); }
   25% { transform: translateX(-1px) rotate(-0.5deg); }
   50% { transform: translateX(1px) rotate(0.5deg); }
   75% { transform: translateX(-1px) rotate(-0.5deg); }
   100% { transform: translateX(0) rotate(0.5deg); }
 }
</style>
