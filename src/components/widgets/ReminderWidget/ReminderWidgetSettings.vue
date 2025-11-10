<script setup>
import SecondaryButton from "@/components/UI/buttons/SecondaryButton.vue";
import {useReminderStore} from "@/stores/reminderStore.js";
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";
import {refDebounced, useTimestamp} from "@vueuse/core";
import ReminderCheckbox from "@/components/UI/checkboxes/ReminderCheckbox.vue";

const store = useReminderStore()
const {reminders} = storeToRefs(store)
const debouncedList = refDebounced(reminders, 1000)
const isNewReminderFieldOpen = ref(false)
const isEditReminder = ref(false)
const timestamp = useTimestamp()
const emptyReminder = {
  id: '',
  title: '',
  description: ''
}

const newReminder = ref({...emptyReminder})
const editReminder = ref({...emptyReminder})
const isEmptyReminders = computed(() => debouncedList.value.length === 0)
const isShowEmpty = computed(() => isEmptyReminders.value && !isNewReminderFieldOpen.value)

const handleAddNewReminder = () => {
  store.addReminder({
    id: timestamp.value,
    title: newReminder.value.title,
    description: newReminder.value.description
  })

  newReminder.value.title = ''
  newReminder.value.description = ''

  isNewReminderFieldOpen.value = false
}
const handleOpenNewReminder = () => isNewReminderFieldOpen.value = true

const handleCloseNewReminder = () => {
  newReminder.value.title = ''
  newReminder.value.description = ''
  isNewReminderFieldOpen.value = false
}
const handleEditReminder = (item) => {
  editReminder.value = {...item}
  isEditReminder.value = true
}

const handleCloseEditReminder = () => {
  editReminder.value = {...emptyReminder}
  isEditReminder.value = false
}
const handleSaveReminder = () => {
  store.editReminder(editReminder.value)
  editReminder.value = emptyReminder
  isEditReminder.value = false
}
const handleRemoveReminder = (id) => store.removeReminder(id)

</script>

<template>
  <Transition appear>
    <div class="reminder-settings__container">
      <div class="reminder-buttons__container">
        <div class="add-reminder-button__container" @click="() => handleOpenNewReminder()">
          <img src="/src/assets/icons/ReminderAddIcon.svg" alt="ReminderAddIcon">
          <span>Напоминание</span>
        </div>

        <Transition>
          <div class="reminder-button__inner-container" v-if="isNewReminderFieldOpen">
            <SecondaryButton @click="() => handleAddNewReminder()">Готово</SecondaryButton>
            <SecondaryButton @click="() => handleCloseNewReminder()">Отменить</SecondaryButton>
          </div>
        </Transition>

        <div class="reminder-button__inner-container" v-show="isEditReminder">
          <SecondaryButton @click="() => handleSaveReminder()">Сохранить</SecondaryButton>
          <SecondaryButton @click="() => handleCloseEditReminder()">Отменить
          </SecondaryButton>
        </div>
      </div>

      <div class="reminder-list__container">

        <Transition name="new-reminder">
          <div key="empty" v-if="isShowEmpty" class="empty-list__container">
            Все напоминания завершены
          </div>
        </Transition>

        <Transition name="new-reminder">
          <div key="newReminder" v-show="isNewReminderFieldOpen" class="reminder-item__container">
            <ReminderCheckbox :disabled="true"/>
            <div class="reminder-item__inner-container">
              <input v-focus="isNewReminderFieldOpen" v-model="newReminder.title" class="reminder-item-input__value" placeholder="Название"/>
              <input v-model="newReminder.description" class="reminder-item-input__description" placeholder="Описание"/>
            </div>
          </div>
        </Transition>
        <TransitionGroup name="list" v-if="!isEmptyReminders">
          <div class="reminder-item__container"
               v-for="item in debouncedList"
               :key="item.id"
               :id="item.id"
               v-memo="[item.id === editReminder.id, item.title, item.description]"
               @click="() => handleEditReminder(item)"
               @pointerdown.stop
          >
            <ReminderCheckbox :id="item.id" :disabled="item.id === editReminder.id && isEditReminder" @removeItem="handleRemoveReminder"/>
            <Transition name="new-reminder">
              <div v-if="item.id !== editReminder.id" class="reminder-item__inner-container">
                <span class="reminder-item__value">{{ item.title }}</span>
                <span v-if="!!item.description" class="reminder-item__description">{{ item.description }}</span>
              </div>
            </Transition>

            <Transition name="new-reminder">
              <div v-if="item.id === editReminder.id && isEditReminder" class="reminder-item__inner-container">
                <input @click.stop v-focus="isEditReminder" v-model="editReminder.title" class="reminder-item-input__value"
                       placeholder="Название"/>
                <input @click.stop v-model="editReminder.description" class="reminder-item-input__description"
                       placeholder="Описание"/>
              </div>
            </Transition>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/mixins.scss';

.reminder-settings__container {
  @include flex-column;
  gap: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  .reminder-buttons__container {
    @include flex-row;
    justify-content: space-between;
    min-height: 30px;

    .reminder-button__inner-container {
      @include flex-row;
      gap: 12px;
    }
  }

  .add-reminder-button__container {
    @include flex-row;
    gap: 8px;
    align-items: center;
    color: $black;
    width: fit-content;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 16px;
      font-weight: 600;
      color: $orange;
    }
  }

  .reminder-list__container {
    @include flex-column;
    margin-top: 16px;
    gap: 16px;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .reminder-item__container {
    @include flex-row;
    gap: 10px;
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
    width: 100%;
    text-align: left;
    padding-left: 6px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 8px;

    .reminder-item__value {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0.36px;
      color: $black;
    }

    .reminder-item__description {
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.36px;
      color: #3C3C4399;
    }
  }

  .empty-list__container {
    text-align: left;
    color: #9B9B9D;
    font-size: 14px;
    font-weight: 500;
  }


  .reminder-item-input__value, .reminder-item-input__description {
    width: 100%;
    padding: 6px 12px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
    font-weight: 400;
    background: rgba(118, 118, 128, 0.12);
    border: none;
    border-radius: 6px;
    outline: none;
    transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    color: $black;
    backdrop-filter: blur(10px);
  }

  .reminder-item-input__value:focus, .reminder-item-input__description:focus {
    background: rgba(118, 118, 128, 0.08);
    box-shadow: inset 0 0 0 1px rgba(0, 122, 255, 0.3),
    0 0 0 2px rgba(0, 122, 255, 0.1);
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.new-reminder-enter-active {
  transition: all 0.3s ease;
}

.new-reminder-enter-from {
  opacity: 0;
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
