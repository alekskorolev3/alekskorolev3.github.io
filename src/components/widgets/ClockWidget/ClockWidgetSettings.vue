<script setup>

import {useClockStore} from "@/stores/clockStore.js";
import {storeToRefs} from "pinia";
import {VueSpinnerIos} from "vue3-spinners";
import {computed, ref, watch} from "vue";

const store = useClockStore()
const {place, searchPlaces, isSearchLoading} = storeToRefs(store)
const searchQuery = ref('')
const isFocused = ref(false)
const isHasSearchPlaces = computed(() => searchPlaces.value.length > 0)
const isNoResults = computed(() => isFocused.value && !isHasSearchPlaces.value && searchQuery.value.length > 0 && !isSearchLoading.value)

watch(searchQuery, (newValue) => store.getLocations(newValue))

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
              {{ place.name }}, <span>{{ place.country }}</span>
            </div>
          </div>

          <div class="search-results__item" v-if="isNoResults">
            Ничего не найдено
          </div>

          <div class="loader-container" v-if="isSearchLoading">
            <VueSpinnerIos size="20" color="gray"/>
          </div>
        </div>
      </div>

      <div class="settings-item__container">
        <span class="settings-item__title">Текущее место</span>
        <span class="settings-item__value">{{ place }}</span>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
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
