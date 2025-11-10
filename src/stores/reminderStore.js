import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useLocalStorage} from "@vueuse/core";

export const useReminderStore = defineStore('reminder', () => {

    const localStore = useLocalStorage('reminderStore', [])
    const reminders = ref(localStore.value)

    watch(reminders, (newValue) => localStore.value = newValue)

    const addReminder = (value) => reminders.value.unshift(value)
    const removeReminder = (id) => reminders.value = reminders.value.filter((item) => item.id !== id)
    const editReminder = (value) => reminders.value = reminders.value.map((item) => item.id === value.id ?  value : item)

    return {
        reminders,
        addReminder,
        removeReminder,
        editReminder
    }
})
