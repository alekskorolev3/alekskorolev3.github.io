<script setup>
import {useTimestamp} from "@vueuse/core";
import {computed} from "vue";
import {useClockStore} from "@/stores/clockStore.js";
import {storeToRefs} from "pinia";
import {DAYS_OF_WEEK, MONTHS} from "@/const/index.js";

const store = useClockStore()
const {place, tz_id} = storeToRefs(store)
const timestamp = useTimestamp({offset: 0})

const currentDate = computed(() => new Date(timestamp.value))
const time = computed(() => {
  return {
    hours: currentDate.value.toLocaleString('ru-RU', {
      hour: '2-digit',
      hour12: false,
      timeZone: tz_id.value
    }),
    minutes: currentDate.value.toLocaleString('ru-RU', {
      minute: '2-digit',
      timeZone: tz_id.value
    }).padStart(2, '0')
  }
})

const date = computed(() => {
  return {
    month: MONTHS[currentDate.value.getMonth()],
    day: currentDate.value.getDate(),
    dayOfWeek: DAYS_OF_WEEK[currentDate.value.getDay()]
  }
})

</script>

<template>
  <div class="widget-item">
    <div class="date__container">
      <span>{{ date.dayOfWeek }}</span>,
      <span>{{ date.month }}</span>
      <span>{{ date.day }}</span>
    </div>

    <div class="time__container">
      {{ time.hours }}:{{ time.minutes }}
    </div>

    <div class="place__container">
      {{place}}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixins.scss';
@import '@/assets/styles/_variables.scss';

.widget-item {
  @include flex-column;
  background: $gradient-red;
  align-content: center;
  text-align: center;
  color: $white;
  align-items: center;
  justify-content: center;

  .date__container {
    @include flex-row;
    font-size: 18px;
    font-weight: 500;
    gap: 2px;
  }

  .time__container {
    font-size: clamp(48px, 12vw, 72px);
  }

  .place__container {
    font-size: 14px;
  }
}
</style>
