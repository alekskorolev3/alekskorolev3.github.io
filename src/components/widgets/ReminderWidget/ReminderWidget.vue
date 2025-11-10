<script setup>
import {refDebounced} from "@vueuse/core";
import {useReminderStore} from "@/stores/reminderStore.js";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import ReminderCheckbox from "@/components/UI/checkboxes/ReminderCheckbox.vue";

const store = useReminderStore()
const {reminders} = storeToRefs(store)
const debouncedList = refDebounced(reminders, 1000)
const isEmptyList = computed(() => debouncedList.value.length === 0)

const handleRemoveItem = (id) => store.removeReminder(id)

</script>

<template>
  <div class="widget-item">
    <div class="reminder-header__container">
      <span class="reminder-header__title">Напоминания</span>
      <Transition name="count-change" mode="out-in">
        <span
            class="reminder-header__count"
            :key="reminders.length"
        >{{reminders.length}}</span>
      </Transition>
    </div>

    <div class="reminder-items__container">
      <div key="empty" v-if="isEmptyList" class="empty-list__container">
        Все напоминания завершены
      </div>
      <TransitionGroup name="list" v-if="!isEmptyList">
        <div
            class="reminder-item__container"
            v-for="reminder in debouncedList"
            :key="reminder.id"
            @pointerdown.stop
        >
          <ReminderCheckbox :id="reminder.id"  @removeItem="handleRemoveItem"/>
          <div class="reminder-item__inner-container">
            <span class="reminder-item__value">{{reminder.title}}</span>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.widget-item {
  background-color: #1C1C1E;
  align-content: center;
  text-align: center;
  padding: 7px clamp(16px, 4vw, 20px) 24px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .reminder-header__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;

    .reminder-header__title {
      font-size: clamp(14px, 3.8vw, 20px);
      letter-spacing: 0.36px;
      font-weight: 600;
      color: #F98F00;
    }

    .reminder-header__count {
      font-size: clamp(22px, 5vw, 32px);
      color: #FFFFFF;
    }
  }

  .reminder-items__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    overflow: hidden;

    .reminder-item__container {
      display: flex;
      flex-direction: row;
      gap: 10px;
      height: 31px;
      min-height: 31px;
      align-items: flex-start;
    }

    .checkbox-round:checked + .reminder-item__inner-container {
      .reminder-item__value {
        color: #B9B9B9;
      }
    }

    .reminder-item__inner-container {
      border-bottom: 1px dashed #9B9B9D4D;
      height: 100%;
      text-align: left;
      padding-left: 6px;
      width: calc(100% - 40px);

      .reminder-item__value {
        font-size: clamp(10px, 3.2vw, 14px);
        font-weight: 600;
        letter-spacing: 0.36px;
        color: #FFFFFF;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }
    }

    .empty-list__container {
      text-align: left;
      color: #9B9B9D;
      font-size: clamp(12px, 3.5vw, 20px);
      font-weight: 500;
    }
  }
}

.reminder-item__container:last-child {
  .reminder-item__inner-container {
    border-bottom: none;
  }
}

.count-change-enter-active,
.count-change-leave-active {
  transition: all 0.2s ease;
}

.count-change-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.count-change-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
