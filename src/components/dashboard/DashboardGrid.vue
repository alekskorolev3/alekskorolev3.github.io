<script setup>
import {computed, ref, useTemplateRef} from "vue";
import WidgetBase from "@/components/widgets/WidgetBase.vue";
import {DnDOperations, useDroppable} from "@vue-dnd-kit/core"
import {useDashboardStore} from "@/stores/dashboardStore.js";
import {storeToRefs} from "pinia";
import WidgetModal from "@/components/modals/WidgetModal.vue";
import {widgetComponents, widgetSettingsComponents} from "@/components/widgets/index.js";
import {onClickOutside} from "@vueuse/core";

const store = useDashboardStore()
const {dashboardItems, paletteItems, isFixed, isEditable, isPaletteOpen, isWidgetModalOpen, selectedWidget} = storeToRefs(store)
const draggingWidget = ref(true)
const isEmptyDashboard = computed(() => !isEditable.value && dashboardItems.value.length === 0)
const isEmptyPalette = computed(() => paletteItems.value.length === 0)

const {elementRef} = useDroppable({
  data: {
    source: dashboardItems,
  },
  events: {
    onHover: () => {
      if (isPaletteOpen.value) store.handlePaletteClose()
    },
    onDrop: (e) => draggingWidget.value && DnDOperations.applyTransfer(e)
  },
});
const {elementRef: allWidgetsRef} = useDroppable({
  data: {
    source: store.paletteItems.value,
  },
  events: {
    onDrop: DnDOperations.applyTransfer,
  },
});

const paletteRef = useTemplateRef('palette')
const settingsModalRef = useTemplateRef('settings')

onClickOutside(paletteRef, () => store.handlePaletteClose())
onClickOutside(settingsModalRef, () => isWidgetModalOpen.value && store.handleWidgetClose(), {
  ignore: ['.widget-item']
})

const handleClickWidget = (id) => store.handleSelectWidget(id)
const handleDraggingWidget = (value) => draggingWidget.value = value

</script>

<template>
  <div class="container">
    <div class="grid" ref="elementRef">
      <TransitionGroup name="list">
        <WidgetBase
            v-for="(item, index) in dashboardItems"
            :key="item.id"
            :id="item.id"
            :index="index"
            :source="dashboardItems"
            :isFixed="isFixed"
            @handleDrag="handleDraggingWidget"
            @handleClick="handleClickWidget"
            wrapperClass="widget-item"
        >
          <component :is="widgetComponents[item.component]"/>
        </WidgetBase>
      </TransitionGroup>
    </div>

    <div class="empty-list__container" v-if="isEmptyDashboard">
      <img src="/src/assets/icons/EmptyListIcon.svg" alt="Empty List">
      <span class="empty-list__title">Вы еще не добавили виджеты</span>
    </div>

    <WidgetModal :open="isPaletteOpen" @close="() => store.handlePaletteClose()" ref="palette" id="palette" title='Добавить виджет'>
      <div class="grid" ref="allWidgetsRef">
        <TransitionGroup name="list" v-if="!isEmptyPalette">
          <WidgetBase
              v-for="(item, index) in paletteItems"
              :key="item.id"
              :id="item.id"
              :index="index"
              :source="paletteItems"
              @handleDrag="handleDraggingWidget"
          >
            <component :is="widgetComponents[item.component]"/>
          </WidgetBase>
        </TransitionGroup>
      </div>
      <div class="empty-list__container" v-if="isEmptyPalette">
        <img src="/src/assets/icons/EmptyListIcon.svg" alt="Empty List">
        <span class="empty-list__title">Доступные виджеты отсутствуют</span>
      </div>
    </WidgetModal>
    <WidgetModal :open="isWidgetModalOpen" @close="() => store.handleWidgetClose()" ref="settings" :title="`Панель настройки виджета ${selectedWidget}`">
      <component :is="widgetSettingsComponents[selectedWidget]"/>
    </WidgetModal>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;

  .grid {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    max-width: 872px;
    min-height: 250px;
  }
}

.widget-item {
  min-width: 160px;
  min-height: 160px;
  max-width: 220px;
  max-height: 220px;
  aspect-ratio: 1/1;
  border-radius: 22px;
  cursor: grab;
  user-select: none;
}

.empty-list__container {
  position: fixed;
  top: 82px;
  left: 0;
  right: 0;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  text-align: center;
  margin: 0 auto;

  img {
    width: clamp(32px, 9vw, 64px);
    height: clamp(32px, 9vw, 64px);
  }

  .empty-list__title {
    font-size: clamp(20px, 5vw, 24px);
    font-weight: 600;
  }
}

.list-move {
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.list-enter-active,
.list-leave-active {
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.list-leave-active {
  position: absolute;
  pointer-events: none;
}
</style>
