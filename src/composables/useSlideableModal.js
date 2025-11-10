import { ref, onMounted, onUnmounted } from 'vue'

export function useSlideableModal(modalRef, open, closeFn) {
    const startY = ref(0)
    const currentY = ref(0)
    const isDragging = ref(false)

    const isInDragArea = (clientY) => {
        if (!modalRef.value) return false

        const modalRect = modalRef.value.getBoundingClientRect()
        const relativeY = clientY - modalRect.top
        return relativeY <= 100
    }

    const handleTouchStart = (e) => {
        if (!open.value) return
        const touchY = e.touches[0].clientY

        if (!isInDragArea(touchY)) {
            return
        }
        startY.value = e.touches[0].clientY
        currentY.value = 0
        isDragging.value = true
    }

    const handleTouchMove = (e) => {
        if (!isDragging.value || !open.value) return

        currentY.value = e.touches[0].clientY - startY.value

        if (currentY.value > 0) {
            e.preventDefault()
            modalRef.value.style.transform = `translate3d(0, ${currentY.value}px, 0)`
        }
    }

    const handleTouchEnd = () => {
        if (!isDragging.value) return
        isDragging.value = false
        if (currentY.value > 100) {
            closeFn()
        }

        if (modalRef.value) {
            modalRef.value.style.transform = ''
        }
    }

    onMounted(() => {
        if (modalRef.value) {
            modalRef.value.addEventListener('touchstart', handleTouchStart, { passive: false })
            modalRef.value.addEventListener('touchmove', handleTouchMove, { passive: false })
            modalRef.value.addEventListener('touchend', handleTouchEnd)
        }
    })

    onUnmounted(() => {
        if (modalRef.value) {
            modalRef.value.removeEventListener('touchstart', handleTouchStart)
            modalRef.value.removeEventListener('touchmove', handleTouchMove)
            modalRef.value.removeEventListener('touchend', handleTouchEnd)
        }
    })

    return {currentY}
}
