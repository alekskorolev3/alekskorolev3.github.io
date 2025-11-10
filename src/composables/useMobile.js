import {onBeforeMount, ref} from "vue";

export function useMobile() {
    const isMobile = ref(false)

    onBeforeMount(() => {
        isMobile.value = screen.width <= 760;
    })

    return {isMobile}
}
