import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useDebounceFn, useStorage} from "@vueuse/core";
import {useWeatherApi} from "@/composables/useWeatherApi.js";

export const useClockStore = defineStore('clock', () => {

    const localStore = useStorage('clockStore', {
        place: 'Минск',
        tz_id: 'Europe/Minsk'
    })

    const {searchPlaces, isError, errorMessage, isSearchLoading, getLocations, getTimezone} = useWeatherApi()
    const place = ref(localStore.value.place)
    const tz_id = ref(localStore.value.tz_id)

    watch(place, async (newPlace) => localStore.value.place = newPlace)
    watch(tz_id, (newTimezone) => localStore.value.tz_id = newTimezone)

    const setPlace = async (value) => {
        try {
            let timezone = await getTimezone(value)
            place.value = value
            tz_id.value = timezone
        }
        catch (e) {
            console.log(errors.timezoneError.error.message)
        }
        finally {
            isSearchLoading.value = false
            searchPlaces.value = []
        }
    }

    return {
        place,
        isError,
        errorMessage,
        tz_id,
        isSearchLoading,
        searchPlaces,
        setPlace,
        getLocations: useDebounceFn(getLocations, 500)
    }

})
