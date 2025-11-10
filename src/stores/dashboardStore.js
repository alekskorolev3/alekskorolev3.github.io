import {defineStore} from 'pinia'
import {computed, ref, watch} from "vue";
import {widgets} from "@/components/widgets/index.js";
import {useModal} from "@/composables/useModal.js";
import {useStorage} from "@vueuse/core";

export const useDashboardStore = defineStore('dashboard', () => {

    const localStore = useStorage('dashboardStore', {
        dashboardItems: [],
        paletteItems: [...widgets]
    })

    const paletteItems = ref(localStore.value.paletteItems)
    const dashboardItems = ref(localStore.value.dashboardItems)
    const isEditable = computed(() => !!dashboardItems.value?.length)
    const isFixed = ref(false)
    const isEdit = ref(false)
    const selectedWidget = ref(null)
    const {isOpen: isPaletteOpen, open: handlePaletteOpen, close: handlePaletteClose} = useModal()
    const {isOpen: isWidgetModalOpen, open: handleWidgetOpen, close: handleWidgetClose} = useModal()


    watch(dashboardItems, (newDashboardValue) => localStore.value.dashboardItems = newDashboardValue)

    watch(paletteItems, (newPaletteValue) => localStore.value.paletteItems = newPaletteValue)

    watch(isWidgetModalOpen, (newValue) => isFixed.value = !!newValue)


    const handleSelectWidget = (value) => {
        handleWidgetOpen()
        selectedWidget.value = value
    }

    const handleEdit = () => {
        isEdit.value = true
        isFixed.value = true
    }

    const handleSave = () => {
        isEdit.value = false
        isFixed.value = false
    }

    const handleRemove = (id) => {
        dashboardItems.value = dashboardItems.value.filter((item) => item.id !== id)
        let removedItem = widgets.find((item) => item.id === id)
        paletteItems.value.push(removedItem)

        if (dashboardItems.value.length === 0) {
            isEdit.value = false
        }
    }

    return {paletteItems,
        dashboardItems,
        isEditable,
        isFixed,
        isEdit,
        isPaletteOpen,
        isWidgetModalOpen,
        selectedWidget,
        handleSelectWidget,
        handleWidgetOpen,
        handleWidgetClose,
        handlePaletteOpen,
        handlePaletteClose,
        handleEdit,
        handleSave,
        handleRemove}
})
