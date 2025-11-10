import axios from "axios";
import {API, WEATHER_STATES} from "@/const/index.js";
import {reactive, ref} from "vue";
import {useError} from "@/composables/useError.js";

export function useWeatherApi() {

    const options = reactive({
        currentTemperature: null,
        description: '',
        icon: '',
        minTemperature: null,
        maxTemperature: null,
        colorState: ''
    })
    const {isError, errorMessage, setError, resetError} = useError()

    const searchPlaces = ref([])
    const isSearchLoading = ref(false)
    const isWeatherLoading = ref(false)

    const setColorState = (is_day, code) => {
        if (is_day === 0) options.colorState = "night"
        else options.colorState = WEATHER_STATES[code] || 'cloudy'
    }
    const getLocations = async (q) => {
        resetError()
        if (!q.trim()) {
            searchPlaces.value = []
        }
        else try {
            isSearchLoading.value = true
            const response = await axios.get(`${API}/search.json`, {params: {q: q.trim()}})
            searchPlaces.value = response.data
        } catch (e) {
            setError('searchError', e)
            searchPlaces.value = []
            throw e
        } finally {
            isSearchLoading.value = false
        }
    }
    const getTimezone = async (placeQuery) => {
        resetError()
        try {
            const response = await axios.get(`${API}/forecast.json`, {
                    params: {
                        q: placeQuery,
                    }
                }
            )
            return response.data.location.tz_id;
        } catch (e) {
            setError('timezoneError', e)
            throw e
        }
    }
    const getCurrentWeather = async (tempPreference, place) => {
        resetError()
        try {
            isWeatherLoading.value = true
            const response = await axios.get(`${API}/forecast.json`, {
                    params: {
                        days: 1,
                        q: place.value,
                        lang: 'ru'
                    }
                }
            )

            let {data} = response
            let {current, forecast} = data
            options.icon = "https:" + current.condition.icon
            options.currentTemperature = parseInt(current[tempPreference.value])
            options.minTemperature = parseInt(forecast?.forecastday[0]?.day[`min${tempPreference.value}`])
            options.maxTemperature = parseInt(forecast?.forecastday[0]?.day[`max${tempPreference.value}`])
            options.description = current.condition.text
            setColorState(current.is_day, current.condition.code)
        } catch (e) {
            setError('weatherError', e)
            console.log('Ошибка получения погоды: ', e)
        } finally {
            isWeatherLoading.value = false
        }
    }

    return {
        options,
        isError,
        errorMessage,
        searchPlaces,
        isSearchLoading,
        isWeatherLoading,
        getLocations,
        getTimezone,
        getCurrentWeather
    }
}
