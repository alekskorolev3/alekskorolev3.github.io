export default {
    mounted(el, binding) {
        if (binding.value) {
            setTimeout(() => el.focus(), 10)
        }
    },
    updated(el, binding) {
        if (binding.value && binding.value !== binding.oldValue) {
            setTimeout(() => el.focus(), 10)
        }
    }
}
