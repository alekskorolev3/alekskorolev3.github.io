import {ref} from "vue";

export function useError() {
    const isError = ref(false)
    const errorMessage = ref(null)

    const resetError = () => {
        isError.value = false
        errorMessage.value = null
    }

    const setError = (errorType, error) => {
        isError.value = true
        errorMessage.value = `${errorType}: ${error.response?.data?.error?.message}`
    }

    return {isError, errorMessage, resetError, setError}
}
