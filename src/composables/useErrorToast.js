import {useToast} from 'vue-toast-notification';

export function useErrorToast() {
    const toast = useToast()

    const openErrorToast = (message) => {
        toast.open({
            message: message,
            type: 'error',
            position: 'top'
        })
    }

    return {openErrorToast}
}

