<script setup>
import {VueSpinnerIos} from "vue3-spinners";

import {useWeatherStore} from "@/stores/weatherStore.js";
import {storeToRefs} from "pinia";
import {computed, onMounted} from "vue";

const store = useWeatherStore()

const {
  place,
  currentTemperature,
  tempPreference,
  icon,
  description,
  minTemperature,
  maxTemperature,
  colorState,
  isLoading,
} = storeToRefs(store)

onMounted(() => store.getCurrentWeather(tempPreference, place))

const isError = computed(() => store.isError)

const handleReload = () => store.getCurrentWeather(tempPreference, place)

</script>

<template>
  <div class="widget-item" :class="[colorState, {'opacity': isLoading}]">
    <div class="widget-item__container" v-if="!isLoading && !isError">
      <div class="widget-item__place">{{ place }}</div>
      <div class="widget-item__temperature">{{ currentTemperature }}°</div>
    </div>
    <div class="widget-item__container" v-if="!isLoading && !isError">
      <figure>
        <img class="widget-item__icon" :src="icon" alt="CurrentWeatherIcon">
      </figure>
      <div class="widget-item__description">{{ description }}</div>
      <div class="temp-container">
        <div class="temp-container__inner">
          <img src="/src/assets/icons/Down.svg" alt="Down">
          <div class="temp-container__value">{{ minTemperature }}°</div>
        </div>
        <div class="temp-container__inner">
          <img src="/src/assets/icons/Up.svg" alt="Up">
          <div class="temp-container__value">{{ maxTemperature }}°</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mask-container" v-if="isLoading">
    <VueSpinnerIos size="20" color="gray"/>
  </div>

  <div class="mask-container" v-if="isError" @click="handleReload">
    <img src="/src/assets/icons/ReloadIcon.svg" alt="ReloadIcon">
  </div>
</template>

<style scoped lang="scss">

.mask-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
}

.opacity {
  opacity: 0.2;
}

.sunny {
  background: linear-gradient(135deg, #FFE000 0%, #799F0C 100%) !important;
}

.night {
  background-image: linear-gradient(to bottom, #04041a, #111528, #1a2136, #232c46, #2c3956) !important;
}

.cloudy {
  background-image: linear-gradient(to bottom, #0c4783, #2b5b94, #4270a4, #5a85b5, #719bc5) !important;
}

.widget-item {
  position: relative;
  min-width: 160px;
  min-height: 160px;
  max-width: 220px;
  max-height: 220px;
  aspect-ratio: 1/1;
  border-radius: 22px;
  background-image: linear-gradient(to bottom, #0c4783, #2b5b94, #4270a4, #5a85b5, #719bc5);
  cursor: grab;
  user-select: none;
  align-content: center;
  text-align: center;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: clamp(16px, 4vw, 20px);
  color: white;
  transition: 0.3s ease opacity;

  .widget-item__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .widget-item__place {
    font-size: clamp(14px, 3.8vw, 20px);
    font-weight: 600;
    text-align: left;
  }

  figure {
    width: 24px;
    height: 24px;
    margin: 0;
    overflow: hidden;
  }

  .widget-item__icon {
    width: 28px;
    height: 28px;
    margin: -3px 0 0 -2px;
  }

  .widget-item__temperature {
    font-size: clamp(32px, 8vw, 52px);
    font-weight: 400;
    letter-spacing: 1px;
  }

  .widget-item__description {
    text-align: left;
    font-size: clamp(12px, 3.5vw, 20px);
  }

  .temp-container {
    display: flex;
    flex-direction: row;
    gap: 4px;

    .temp-container__inner {
      display: flex;
      flex-direction: row;
      gap: 4px;
      align-items: center;

      img {
        width: 14px;
        height: 14px;
      }

      .temp-container__value {
        font-size: 14px;
      }
    }
  }
}
</style>
