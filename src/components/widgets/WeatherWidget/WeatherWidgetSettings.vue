<script setup>
import {useWeatherStore} from "@/stores/weatherStore.js";
import {storeToRefs} from "pinia";
import {computed, ref, watch} from "vue";
import {VueSpinnerIos} from "vue3-spinners";

const store = useWeatherStore()
const {place, searchPlaces, isSearchLoading, tempPreference} = storeToRefs(store)
const searchQuery = ref('')
const isFocused = ref(false)
const isHasSearchPlaces = computed(() => searchPlaces.value.length > 0)
const isNoResults = computed(() => isFocused.value && !isHasSearchPlaces.value && searchQuery.value.length > 0 && !isSearchLoading.value)

watch(searchQuery, (newValue) => store.getLocations(newValue))

const handleTempChange = (value) => store.setTempPreference(value)
const handleSelectPlace = (name) => {
  store.setPlace(name)
  searchQuery.value = ''
  isFocused.value = false
}
const handleFocus = () => isFocused.value = true
const handleBlur = () => isFocused.value = false;

</script>

<template>
  <Transition appear>
    <div class="settings__container">
      <div class="search__container">
        <div class="settings-input__container">
          <input type="text"
                 placeholder="Поиск города"
                 v-model="searchQuery"
                 @focus="handleFocus"
                 @blur="handleBlur"
          />
          <img src="/src/assets/icons/SearchIcon.svg" alt="SearchIcon">
        </div>

        <div class="search-results__container">
          <div :class="{'opacity': isSearchLoading}">
            <div v-for="place in searchPlaces"
                 :key="place.id"
                 class="search-results__item"
                 v-show="isHasSearchPlaces"
                 @click="handleSelectPlace(place.name)">
              {{ place.name }},<span>{{ place.country }}</span>
            </div>
          </div>

          <div v-if="isNoResults" class="search-results__item">Ничего не найдено</div>
          <div v-if="isSearchLoading" class="loader-container">
            <VueSpinnerIos size="20" color="gray"/>
          </div>
        </div>
      </div>

      <div class="settings-item__container">
        <span class="settings-item__title">Текущее место</span>
        <span class="settings-item__value">{{ place }}</span>
      </div>

      <div class="settings-item__container">
        <span class="settings-item__title">Формат температуры</span>
        <select
            name="temp_select"
            id="temp_select"
            v-model="tempPreference"
            @change="(e) => handleTempChange(e.target.value)">
          <option value="temp_c">C°</option>
          <option value="temp_f">F°</option>
        </select>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.settings__container {

  .search__container {
    position: relative;

    .search-results__container {
      position: absolute;
      top: 40px;
      background-color: #FFFFFF;
      width: 100%;
      margin: 8px 14px 0;
      display: flex;
      flex-direction: column;

      .search-results__item {
        padding: 6px 0;
        font-size: 16px;
        color: #000000;
        font-weight: 400;

        span {
          color: #9B9B9D;
        }
      }
    }
  }

  .settings-input__container {
    width: 100%;
    margin-bottom: 12px;
    position: relative;

    img {
      position: absolute;
      top: 10px;
      left: 10px;
    }

    input {
      width: 100%;
      height: 36px;
      border: none;
      background-color: #EFEFF0;
      padding: 7px 8px 7px 32px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 400;

      &:focus {
        background-color: rgba(118, 118, 128, 0.08);
        box-shadow: inset 0 0 0 1px rgba(0, 122, 255, 0.3),
        0 0 0 2px rgba(0, 122, 255, 0.1);
      }
    }
  }

  .settings-item__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 0;
    margin: 0 16px;
    font-size: 16px;
    border-bottom: 0.5px solid #B9B9BB;

    .settings-item__title {
      font-weight: 400;
    }

    .settings-item__value {
      color: #B9B9B9;
    }

    #temp_select {
      border: none;
      color: #B9B9B9;
      font-size: 16px;
      font-weight: 400;
    }
  }
}

.opacity {
  opacity: 0.2;
}

.loader-container {
  position: absolute;
  top: 45%;
  left: 45%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
