<script setup>
import './assets/styles/reset.css'
import AddButton from "@/components/UI/buttons/AddButton.vue";
import DashboardGrid from "@/components/dashboard/DashboardGrid.vue";
import SecondaryButton from "@/components/UI/buttons/SecondaryButton.vue";
import {useDashboardStore} from "@/stores/dashboardStore.js";
import {storeToRefs} from "pinia";
import {useClockStore} from "@/stores/clockStore.js";

import {useWeatherStore} from "@/stores/weatherStore.js";
import {watch} from "vue";
import {useErrorToast} from "@/composables/useErrorToast.js";
import {useMobile} from "@/composables/useMobile.js";

const {isMobile} = useMobile()

const store = useDashboardStore()
const {isEditable, isEdit} = storeToRefs(store)
const {openErrorToast} = useErrorToast()

const clockStore = useClockStore()
const weatherStore = useWeatherStore()
const {isError: isErrorClock, errorMessage: clockErrorMessage} = storeToRefs(clockStore)
const {isError: isErrorWeather, errorMessage: weatherErrorMessage} = storeToRefs(weatherStore)

watch([() => isErrorWeather.value, () => isErrorClock.value],
    ([isWeatherError, isClockError]) => {
      if (isWeatherError && weatherErrorMessage.value) {
        openErrorToast(weatherErrorMessage.value);
      }
      if (isClockError && clockErrorMessage.value) {
        openErrorToast(clockErrorMessage.value);
      }
    }
);

</script>

<template>
  <main class="app" v-if="isMobile">
    <header class="app-header">
      <h1 v-once>Виджеты</h1>
      <div class="app-header-buttons__container">
        <SecondaryButton v-if="isEditable && !isEdit" @click="store.handleEdit()">Изменить</SecondaryButton>
        <SecondaryButton v-if="isEdit" @click="store.handleSave()">Сохранить</SecondaryButton>
        <AddButton :disabled="isEdit" @click="store.handlePaletteOpen()">+</AddButton>
      </div>
    </header>

    <DashboardGrid/>
  </main>

  <main class="app" v-else>
    Приложение поддерживает только мобильные устройства!
  </main>
</template>

<style lang="scss">

@import '@/assets/styles/_variables.scss';

.app {
  padding: 32px;
  -webkit-font-smoothing: antialiased;
  user-select: none;

  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      font-size: clamp(22px, 7vw, 32px);
    }

    &-buttons__container {
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
    }
  }
}


@media screen and (max-width: 568px) {
  .app {
    padding: 16px;
  }
}
</style>
