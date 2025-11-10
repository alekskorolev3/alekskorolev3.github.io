import {defineStore} from "pinia";
import {ref, toRefs, watch} from "vue";
import {useDebounceFn, useStorage} from "@vueuse/core";
import {useWeatherApi} from "@/composables/useWeatherApi.js";

export const useWeatherStore = defineStore('weather', () => {

    const localStore = useStorage('weatherStore', {
        place: 'Минск',
        tempPreference: 'temp_c'
    })
    const {options, isError, errorMessage, isWeatherLoading, searchPlaces, isSearchLoading, getLocations, getCurrentWeather} = useWeatherApi()
    const {
        currentTemperature,
        icon,
        description,
        minTemperature,
        maxTemperature,
        colorState
    } = toRefs(options)

    const place = ref(localStore.value.place)
    const tempPreference = ref(localStore.value.tempPreference)

    watch(place, async (newPlace) => {
        localStore.value.place = newPlace
        await getCurrentWeather(tempPreference, place)
    })

    watch(tempPreference, async (newTempPreference) => {
        localStore.value.tempPreference = newTempPreference
        await getCurrentWeather(tempPreference, place)
    })
    const setPlace = (name) => {
        isSearchLoading.value = false
        place.value = name
        searchPlaces.value = []
    }
    const setTempPreference = (value) => {
        tempPreference.value = value
    }
    const setIsSearch = (value) => isSearchLoading.value = value

    return {
        place,
        tempPreference,
        currentTemperature,
        icon,
        description,
        minTemperature,
        maxTemperature,
        colorState,
        isLoading: isWeatherLoading,
        searchPlaces,
        isSearchLoading,
        isError,
        errorMessage,
        setPlace,
        getCurrentWeather,
        getLocations: useDebounceFn(getLocations, 500),
        setIsSearch,
        setTempPreference
    }
})
