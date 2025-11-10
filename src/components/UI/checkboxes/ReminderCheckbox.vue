<script setup>
const props = defineProps(['id', 'disabled'])
const emit = defineEmits(['removeItem'])
</script>

<template>
  <input type="checkbox"
         class="checkbox-round"
         :id="props.id"
         :disabled="props.disabled"
         @change="() => emit('removeItem', props.id)"
         @click.stop
  />
</template>

<style scoped lang="scss">

@import '@/assets/styles/_variables.scss';

.checkbox-round {
  width: clamp(22px, 6vw, 26px);
  min-width: clamp(22px, 6vw, 26px);
  height: clamp(22px, 6vw, 26px);
  background-color: transparent;
  border-radius: 50%;
  vertical-align: middle;
  border: 1.5px solid #9B9B9D;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: $gray-400!important;
  }

  &:checked {
    outline: 1.5px solid $orange;
    border: 2px solid transparent;
    background-color: $orange;

    width: clamp(21px, 5.8vw, 25px);
    min-width: clamp(21px, 5.8vw, 25px);
    height: clamp(21px, 5.8vw, 25px);
    margin: 1px 0 0 1px;
  }
}
</style>
