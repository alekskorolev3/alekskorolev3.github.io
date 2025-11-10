import {defineAsyncComponent} from "vue";
import WidgetLoading from "@/components/widgets/WidgetLoading.vue";
import WeatherWidgetSettingsLoader from "@/components/widgets/WeatherWidget/WeatherWidgetSettingsLoader.vue";
import ClockWidgetSettingsLoader from "@/components/widgets/ClockWidget/ClockWidgetSettingsLoader.vue";
import ReminderWidgetSettingsLoader from "@/components/widgets/ReminderWidget/ReminderWidgetSettingsLoader.vue";

export const widgets = [
    {id: 1, component: "WeatherWidget"},
    {id: 2, component: "ClockWidget"},
    {id: 3, component: "ReminderWidget"}
]

export const widgetComponents = {
    WeatherWidget: defineAsyncComponent({
        loader: () => import('@/components/widgets/WeatherWidget/WeatherWidget.vue'),
        loadingComponent: WidgetLoading
    }),
    ClockWidget: defineAsyncComponent({
        loader: () => import('@/components/widgets/ClockWidget/ClockWidget.vue'),
        loadingComponent: WidgetLoading
    }),
    ReminderWidget: defineAsyncComponent({
        loader: () => import('@/components/widgets/ReminderWidget/ReminderWidget.vue'),
        loadingComponent: WidgetLoading
    }),
}

const WeatherWidgetSettings = defineAsyncComponent({
    loader: () => import('@/components/widgets/WeatherWidget/WeatherWidgetSettings.vue'),
    loadingComponent: WeatherWidgetSettingsLoader
})
const ClockWidgetSettings = defineAsyncComponent({
    loader: () => import('@/components/widgets/ClockWidget/ClockWidgetSettings.vue'),
    loadingComponent: ClockWidgetSettingsLoader
})
const ReminderWidgetSettings = defineAsyncComponent({
    loader: () => import('@/components/widgets/ReminderWidget/ReminderWidgetSettings.vue'),
    loadingComponent: ReminderWidgetSettingsLoader
})

export const widgetSettingsComponents = {
    1: WeatherWidgetSettings,
    2: ClockWidgetSettings,
    3: ReminderWidgetSettings
}
